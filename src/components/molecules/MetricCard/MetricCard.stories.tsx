import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import MetricCard from './MetricCard';

/**
 * MetricCard displays key performance indicators with optional trend indicators.
 * Used primarily on dashboards to show revenue, customer counts, etc.
 */
const meta = {
	title: 'Molecules/MetricCard',
	component: MetricCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		currency: {
			control: 'select',
			options: ['USD', 'INR', 'EUR', 'GBP'],
			description: 'Currency code for formatting',
		},
		isNegative: {
			control: 'boolean',
			description: 'Whether the change is negative (red arrow down)',
		},
		showChangeIndicator: {
			control: 'boolean',
			description: 'Whether to show the trending indicator',
		},
	},
	args: {
		title: 'Total Revenue',
		value: 12450.5,
		currency: 'USD',
		showChangeIndicator: true,
		isNegative: false,
	},
} satisfies Meta<typeof MetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Total Revenue',
		value: 12450.5,
		currency: 'USD',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByText('Total Revenue')).toBeInTheDocument();
		await expect(await canvas.findByText(/\$\s*12,450\.50/)).toBeInTheDocument();
	},
};

export const NegativeChange: Story = {
	args: {
		title: 'Active Subscriptions',
		value: 142,
		currency: undefined,
		showChangeIndicator: true,
		isNegative: true,
	},
};

export const Percentage: Story = {
	args: {
		title: 'Churn Rate',
		value: 2.4,
		isPercent: true,
		currency: undefined,
		showChangeIndicator: true,
		isNegative: true,
	},
};

export const Grid: Story = {
	render: () => (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl'>
			<MetricCard title='Revenue' value={45231.89} currency='USD' showChangeIndicator />
			<MetricCard title='Customers' value={2350} showChangeIndicator />
			<MetricCard title='Active Subscriptions' value={1203} showChangeIndicator isNegative />
		</div>
	),
};
