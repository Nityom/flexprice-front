import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import InvoiceStatusBadge from './InvoiceStatusBadge';

/**
 * InvoiceStatusBadge maps invoice status strings to colored chips with icons.
 * Consistent with the FlexPrice design system for invoice management.
 */
const meta = {
	title: 'Molecules/InvoiceStatusBadge',
	component: InvoiceStatusBadge,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		status: {
			control: 'select',
			options: ['draft', 'open', 'paid', 'uncollectible', 'void', 'past_due', 'processing'],
			description: 'The invoice status to display',
		},
	},
	args: {
		status: 'paid',
	},
} satisfies Meta<typeof InvoiceStatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paid: Story = {
	args: {
		status: 'paid',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByText('Paid')).toBeInTheDocument();
	},
};

export const Open: Story = {
	args: {
		status: 'open',
	},
};

export const PastDue: Story = {
	args: {
		status: 'past_due',
	},
};

export const Draft: Story = {
	args: {
		status: 'draft',
	},
};

export const AllStatuses: Story = {
	render: () => (
		<div className='flex flex-wrap gap-4'>
			<InvoiceStatusBadge status='draft' />
			<InvoiceStatusBadge status='open' />
			<InvoiceStatusBadge status='paid' />
			<InvoiceStatusBadge status='past_due' />
			<InvoiceStatusBadge status='uncollectible' />
			<InvoiceStatusBadge status='void' />
			<InvoiceStatusBadge status='processing' />
		</div>
	),
};
