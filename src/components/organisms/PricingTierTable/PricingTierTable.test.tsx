import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PricingTierTable from './PricingTierTable';

const mockTiers = [
	{ from: 0, to: 100, unitPrice: 0.5 },
	{ from: 101, to: null, unitPrice: 0.3 },
];

describe('PricingTierTable Component', () => {
	it('renders table headers correctly', () => {
		render(<PricingTierTable tiers={mockTiers} unitName='Credit' />);
		expect(screen.getByText('Range (Credits)')).toBeInTheDocument();
		expect(screen.getByText('Unit Price')).toBeInTheDocument();
	});

	it('renders tier ranges correctly', () => {
		render(<PricingTierTable tiers={mockTiers} />);
		expect(screen.getByText('0 - 100')).toBeInTheDocument();
		expect(screen.getByText('101+')).toBeInTheDocument();
	});

	it('formats unit prices with currency', () => {
		render(<PricingTierTable tiers={mockTiers} currency='â‚¹' />);
		expect(screen.getByText('â‚¹0.5000')).toBeInTheDocument();
		expect(screen.getByText('â‚¹0.3000')).toBeInTheDocument();
	});

	it('shows flat fee column only when tiers have flat fees', () => {
		const { rerender } = render(<PricingTierTable tiers={mockTiers} />);
		expect(screen.queryByText('Flat Fee')).not.toBeInTheDocument();

		const tiersWithFlatFee = [{ from: 0, to: null, unitPrice: 10, flatFee: 50 }];
		rerender(<PricingTierTable tiers={tiersWithFlatFee} />);
		expect(screen.getByText('Flat Fee')).toBeInTheDocument();
		expect(screen.getByText('$50')).toBeInTheDocument();
	});
});
