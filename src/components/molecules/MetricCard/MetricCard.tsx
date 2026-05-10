import React from 'react';
import { formatNumber } from '@/utils/common';
import { getCurrencySymbol } from '@/utils/common/helper_functions';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Props for the MetricCard component.
 */
export interface MetricCardProps {
	/** The title/label of the metric */
	title: string;
	/** The numeric value to display */
	value: number;
	/** Optional currency code (e.g., 'USD', 'INR') */
	currency?: string;
	/** Whether the value should be displayed as a percentage */
	isPercent?: boolean;
	/** Whether to show a trending indicator (arrow) */
	showChangeIndicator?: boolean;
	/** Whether the change is negative (red arrow down) or positive (green arrow up) */
	isNegative?: boolean;
	/** Additional CSS classes for the card */
	className?: string;
}

/**
 * A card component used to display key performance indicators (KPIs) and metrics.
 */
const MetricCard: React.FC<MetricCardProps> = ({
	title,
	value,
	currency,
	isPercent = false,
	showChangeIndicator = false,
	isNegative = false,
	className,
}) => {
	const arrowColor = isNegative ? 'text-destructive' : 'text-success';

	const renderValue = () => {
		if (isPercent) {
			return `${formatNumber(value, 2)}%`;
		}
		if (currency) {
			return `${getCurrencySymbol(currency)} ${formatNumber(value, 2)}`;
		}
		return formatNumber(value, 2);
	};

	return (
		<div className={cn('bg-white border border-border p-6 flex flex-col gap-3 rounded-lg shadow-sm', className)}>
			<p className='text-sm text-muted-foreground font-medium'>{title}</p>
			<div className='flex items-center gap-2'>
				<span className='text-2xl font-bold text-foreground'>{renderValue()}</span>
				{showChangeIndicator && (
					<span className={cn('flex items-center', arrowColor)}>{isNegative ? <TrendingDown size={20} /> : <TrendingUp size={20} />}</span>
				)}
			</div>
		</div>
	);
};

export default MetricCard;
