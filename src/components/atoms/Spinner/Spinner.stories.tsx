import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';

const meta = {
	title: 'Atoms/Spinner',
	component: Spinner,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'number', min: 12, max: 100, step: 4 },
			description: 'The size of the spinner in pixels',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes for styling (e.g., text-blue-500)',
		},
	},
	args: {
		size: 24,
	},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: 24,
	},
};

export const Small: Story = {
	args: {
		size: 16,
	},
};

export const Large: Story = {
	args: {
		size: 48,
	},
};

export const CustomColor: Story = {
	args: {
		size: 32,
		className: 'text-blue-600',
	},
};

export const BrandPrimary: Story = {
	args: {
		size: 32,
		className: 'text-zinc-950',
	},
};
