import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export interface PricingTier {
	from: number;
	to: number | null; // null for "unlimited"
	unitPrice: number;
	flatFee?: number;
}

export interface PricingTierTableProps {
	/** Array of pricing tiers */
	tiers: PricingTier[];
	/** Currency symbol or code */
	currency?: string;
	/** Unit name (e.g., 'API call', 'seat') */
	unitName?: string;
	/** Pricing model (e.g., 'graduated', 'volume') */
	model?: 'graduated' | 'volume' | 'flat';
	/** Additional CSS classes */
	className?: string;
}

/**
 * An organism for displaying complex pricing tier structures in a clear table format.
 */
const PricingTierTable: React.FC<PricingTierTableProps> = ({
	tiers,
	currency = '$',
	unitName = 'unit',
	model = 'graduated',
	className,
}) => {
	return (
		<div className={cn('overflow-hidden rounded-lg border border-border bg-card shadow-sm', className)}>
			<table className='w-full text-left text-sm'>
				<thead className='bg-muted/50 border-b border-border'>
					<tr>
						<th className='px-4 py-3 font-semibold text-muted-foreground'>Range ({unitName}s)</th>
						<th className='px-4 py-3 font-semibold text-muted-foreground'>Unit Price</th>
						{tiers.some((t) => t.flatFee !== undefined) && <th className='px-4 py-3 font-semibold text-muted-foreground'>Flat Fee</th>}
					</tr>
				</thead>
				<tbody className='divide-y divide-border'>
					{tiers.map((tier, index) => (
						<tr key={index} className='hover:bg-accent/30 transition-colors'>
							<td className='px-4 py-3 font-medium'>
								{tier.to === null ? (
									<span>{tier.from.toLocaleString()}+</span>
								) : (
									<span>
										{tier.from.toLocaleString()} - {tier.to.toLocaleString()}
									</span>
								)}
								{index === 0 && model === 'graduated' && (
									<Badge variant='secondary' className='ml-2 text-[10px] h-4 px-1'>
										Initial
									</Badge>
								)}
							</td>
							<td className='px-4 py-3'>
								<span className='font-mono'>
									{currency}
									{tier.unitPrice.toFixed(4)}
								</span>
								<span className='text-xs text-muted-foreground ml-1'>/ {unitName}</span>
							</td>
							{tiers.some((t) => t.flatFee !== undefined) && (
								<td className='px-4 py-3'>
									{tier.flatFee !== undefined ? (
										<span className='font-mono'>
											{currency}
											{tier.flatFee.toLocaleString()}
										</span>
									) : (
										<span className='text-muted-foreground'>â€”</span>
									)}
								</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
			<div className='bg-muted/30 px-4 py-2 border-t border-border'>
				<p className='text-[10px] text-muted-foreground uppercase tracking-wider font-semibold'>Pricing Model: {model}</p>
			</div>
		</div>
	);
};

export default PricingTierTable;
