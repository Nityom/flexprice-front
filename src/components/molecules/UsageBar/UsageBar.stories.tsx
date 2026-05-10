import type { Meta, StoryObj } from '@storybook/react';
import UsageBar from './UsageBar';

const meta = {
	title: 'Molecules/UsageBar',
	component: UsageBar,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		value: { control: { type: 'number', min: 0 } },
		max: { control: { type: 'number', min: 1 } },
	},
	args: {
		value: 450,
		max: 1000,
		unit: 'API Calls',
	},
} satisfies Meta<typeof UsageBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: 450,
		max: 1000,
	},
};

export const Warning: Story = {
	args: {
		value: 850,
		max: 1000,
	},
};

export const Critical: Story = {
	args: {
		value: 980,
		max: 1000,
	},
};

export const NoLabels: Story = {
	args: {
		value: 300,
		max: 1000,
		showPercentage: false,
		showFraction: false,
	},
};

export const Stacked: Story = {
	render: () => (
		<div className='space-y-6 max-w-md'>
			<div className='space-y-1'>
				<h4 className='text-sm font-medium'>Storage</h4>
				<UsageBar value={20} max={100} unit='GB' />
			</div>
			<div className='space-y-1'>
				<h4 className='text-sm font-medium'>Bandwidth</h4>
				<UsageBar value={85} max={100} unit='TB' />
			</div>
			<div className='space-y-1'>
				<h4 className='text-sm font-medium'>Compute</h4>
				<UsageBar value={97} max={100} unit='hrs' />
			</div>
		</div>
	),
};
