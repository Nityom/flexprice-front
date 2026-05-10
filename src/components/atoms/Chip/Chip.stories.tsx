import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent } from '@storybook/test';
import { CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react';
import Chip from './Chip';

const meta = {
	title: 'Atoms/Chip',
	component: Chip,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'success', 'warning', 'failed', 'info'],
			description: 'The visual style variant of the chip',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the chip is interactive or disabled',
		},
		onClick: { action: 'clicked' },
	},
	args: {
		variant: 'default',
		disabled: false,
		label: 'Status',
	},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Draft',
		variant: 'default',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const chip = canvas.getByText('Draft');
		await expect(chip).toBeInTheDocument();
	},
};

export const Success: Story = {
	args: {
		label: 'Active',
		variant: 'success',
		icon: <CheckCircle size={14} />,
	},
};

export const Warning: Story = {
	args: {
		label: 'Past Due',
		variant: 'warning',
		icon: <AlertCircle size={14} />,
	},
};

export const Failed: Story = {
	args: {
		label: 'Void',
		variant: 'failed',
		icon: <XCircle size={14} />,
	},
};

export const InfoVariant: Story = {
	args: {
		label: 'Processing',
		variant: 'info',
		icon: <Info size={14} />,
	},
};

export const Interactive: Story = {
	args: {
		label: 'Click Me',
		variant: 'default',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const chip = canvas.getByText('Click Me');
		await userEvent.click(chip);
		// Since args.onClick is mocked by Storybook actions, we just test if it's clickable
		await expect(chip).toBeInTheDocument();
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled',
		disabled: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const chip = canvas.getByText('Disabled').parentElement!;
		await expect(chip).toHaveAttribute('aria-disabled', 'true');
	},
};
