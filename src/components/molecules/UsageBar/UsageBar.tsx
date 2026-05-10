import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the UsageBar component.
 */
export interface UsageBarProps {
	/** The current usage value */
	value: number;
	/** The maximum allowed value (limit) */
	max: number;
	/** Optional unit label (e.g., 'API calls', 'credits') */
	unit?: string;
	/** Threshold percentage after which the bar turns 'warning' color (default 80) */
	warningThreshold?: number;
	/** Threshold percentage after which the bar turns 'danger' color (default 95) */
	dangerThreshold?: number;
	/** Whether to show the percentage text */
	showPercentage?: boolean;
	/** Whether to show the fraction (e.g., "50 / 100") */
	showFraction?: boolean;
	/** Additional CSS classes for the container */
	className?: string;
}

/**
 * A progress bar component specifically designed to show usage against a limit.
 * Changes color based on the percentage of usage.
 */
const UsageBar: React.FC<UsageBarProps> = ({
	value,
	max,
	unit = '',
	warningThreshold = 80,
	dangerThreshold = 95,
	showPercentage = true,
	showFraction = true,
	className,
}) => {
	const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

	let barColor = 'bg-success'; // Green
	if (percentage >= dangerThreshold) {
		barColor = 'bg-destructive'; // Red
	} else if (percentage >= warningThreshold) {
		barColor = 'bg-warning'; // Orange
	}

	return (
		<div className={cn('w-full space-y-2', className)}>
			<div className='flex justify-between items-end'>
				{showFraction && (
					<span className='text-sm font-medium text-foreground'>
						{value.toLocaleString()} / {max.toLocaleString()} {unit}
					</span>
				)}
				{showPercentage && (
					<span className={cn('text-xs font-semibold', percentage >= dangerThreshold ? 'text-destructive' : 'text-muted-foreground')}>
						{Math.round(percentage)}%
					</span>
				)}
			</div>

			<div className='h-2 w-full bg-secondary rounded-full overflow-hidden'>
				<div
					className={cn('h-full transition-all duration-500 ease-out', barColor)}
					style={{ width: `${percentage}%` }}
					role='progressbar'
					aria-valuenow={value}
					aria-valuemin={0}
					aria-valuemax={max}
				/>
			</div>
		</div>
	);
};

export default UsageBar;
