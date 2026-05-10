import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import PricingTierTable from './PricingTierTable';

/**
 * PricingTierTable displays tiered or graduated pricing in a readable format.
 * Essential for usage-based billing transparency.
 */
const meta = {
	title: 'Organisms/PricingTierTable',
	component: PricingTierTable,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof PricingTierTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Graduated: Story = {
	args: {
		unitName: 'API Call',
		currency: '$',
		model: 'graduated',
		tiers: [
			{ from: 0, to: 1000, unitPrice: 0.05 },
			{ from: 1001, to: 10000, unitPrice: 0.03 },
			{ from: 10001, to: 100000, unitPrice: 0.01 },
			{ from: 100001, to: null, unitPrice: 0.005 },
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(await canvas.findByText(/API Calls/i)).toBeInTheDocument();
		await expect(await canvas.findByText(/\$0\.0500/)).toBeInTheDocument();
	},
};

export const WithFlatFee: Story = {
	args: {
		unitName: 'Seat',
		currency: '$',
		model: 'volume',
		tiers: [
			{ from: 1, to: 10, unitPrice: 20, flatFee: 50 },
			{ from: 11, to: 50, unitPrice: 15, flatFee: 100 },
			{ from: 51, to: null, unitPrice: 10, flatFee: 200 },
		],
	},
};

export const IndiaPricing: Story = {
	args: {
		unitName: 'Unit',
		currency: '₹',
		tiers: [
			{ from: 0, to: 100, unitPrice: 10.0 },
			{ from: 101, to: 500, unitPrice: 8.5 },
			{ from: 501, to: null, unitPrice: 7.0 },
		],
	},
};
