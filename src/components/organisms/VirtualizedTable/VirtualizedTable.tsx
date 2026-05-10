import React, { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { cn } from '@/lib/utils';

export interface Column<T> {
	header: string;
	accessor: keyof T;
	width?: number;
	cell?: (value: any, item: T) => React.ReactNode;
}

export interface VirtualizedTableProps<T> {
	/** Data array to display */
	data: T[];
	/** Column definitions */
	columns: Column<T>[];
	/** Estimated height of each row in pixels */
	estimateRowHeight?: number;
	/** Height of the viewport in pixels */
	height?: number;
	/** Additional CSS classes for the container */
	className?: string;
}

/**
 * A highly performant table component for rendering massive datasets (e.g. 10,000+ rows).
 * Uses windowing/virtualization to only render visible rows.
 */
export function VirtualizedTable<T>({ data, columns, estimateRowHeight = 45, height = 500, className }: VirtualizedTableProps<T>) {
	const parentRef = useRef<HTMLDivElement>(null);

	const rowVirtualizer = useVirtualizer({
		count: data.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => estimateRowHeight,
		overscan: 5,
	});

	return (
		<div
			ref={parentRef}
			className={cn('overflow-auto border border-border rounded-lg bg-card', className)}
			style={{ height: `${height}px` }}>
			<div
				style={{
					height: `${rowVirtualizer.getTotalSize()}px`,
					width: '100%',
					position: 'relative',
				}}>
				{/* Table Header - sticky */}
				<div className='sticky top-0 z-10 flex bg-muted/90 backdrop-blur-sm border-b border-border font-semibold text-xs text-muted-foreground uppercase tracking-wider'>
					{columns.map((column, i) => (
						<div key={i} className='px-4 py-3' style={{ flex: column.width ? `0 0 ${column.width}px` : '1' }}>
							{column.header}
						</div>
					))}
				</div>

				{/* Virtualized Rows */}
				{rowVirtualizer.getVirtualItems().map((virtualRow) => {
					const item = data[virtualRow.index];
					return (
						<div
							key={virtualRow.key}
							className={cn(
								'absolute top-0 left-0 w-full flex items-center border-b border-border/50 hover:bg-accent/30 transition-colors',
								virtualRow.index % 2 === 0 ? 'bg-background' : 'bg-muted/10',
							)}
							style={{
								height: `${virtualRow.size}px`,
								transform: `translateY(${virtualRow.start}px)`,
							}}>
							{columns.map((column, i) => (
								<div key={i} className='px-4 py-2 truncate text-sm' style={{ flex: column.width ? `0 0 ${column.width}px` : '1' }}>
									{column.cell ? column.cell(item[column.accessor], item) : String(item[column.accessor])}
								</div>
							))}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default VirtualizedTable;
