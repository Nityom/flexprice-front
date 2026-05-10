import React from 'react';
import { Button } from '@/components/atoms';
import { cn } from '@/lib/utils';

/**
 * Props for the EmptyState component.
 */
export interface EmptyStateProps {
	/** Icon to display at the top */
	icon?: React.ReactNode;
	/** Main title text */
	title: string;
	/** Longer descriptive text */
	description?: string;
	/** Label for the action button */
	actionLabel?: string;
	/** Callback for the action button */
	onAction?: () => void;
	/** Additional CSS classes for the container */
	className?: string;
	/** Variant for different sizes or styles */
	variant?: 'default' | 'compact';
}

/**
 * A reusable organism for displaying empty states across the application.
 */
const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, description, actionLabel, onAction, className, variant = 'default' }) => {
	const isCompact = variant === 'compact';

	return (
		<div
			className={cn(
				'flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-border rounded-xl bg-background/50',
				isCompact ? 'min-h-[200px] gap-2' : 'min-h-[400px] gap-4',
				className,
			)}>
			{icon && <div className={cn('text-muted-foreground', isCompact ? 'mb-1' : 'mb-2')}>{icon}</div>}

			<h3 className={cn('font-bold text-foreground tracking-tight', isCompact ? 'text-lg' : 'text-2xl')}>{title}</h3>

			{description && <p className={cn('text-muted-foreground max-w-sm', isCompact ? 'text-xs' : 'text-sm')}>{description}</p>}

			{onAction && actionLabel && (
				<Button variant='outline' onClick={onAction} size={isCompact ? 'sm' : 'default'} className='mt-2'>
					{actionLabel}
				</Button>
			)}
		</div>
	);
};

export default EmptyState;
