import type { Meta, StoryObj } from '@storybook/react';
import { Database, Search, FileX } from 'lucide-react';
import EmptyState from './EmptyState';

const meta = {
	title: 'Organisms/EmptyState',
	component: EmptyState,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'compact'],
		},
		onAction: { action: 'clicked' },
	},
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoInvoices: Story = {
	args: {
		title: 'No invoices found',
		description: "You haven't created any invoices yet. Start by creating your first invoice to bill your customers.",
		icon: <FileX size={48} />,
		actionLabel: 'Create Invoice',
	},
};

export const NoResults: Story = {
	args: {
		title: 'No results found',
		description: "We couldn't find anything matching your search criteria. Try using different filters or keywords.",
		icon: <Search size={48} />,
		variant: 'compact',
		actionLabel: 'Clear filters',
	},
};

export const EmptyDatabase: Story = {
	args: {
		title: 'Database is empty',
		description: 'Connect your data source to start analyzing your usage metrics and billing performance.',
		icon: <Database size={48} />,
		actionLabel: 'Connect Source',
	},
};

export const TableEmptyState: Story = {
	args: {
		title: 'No items to display',
		variant: 'compact',
	},
	render: () => (
		<div className='border rounded-lg overflow-hidden'>
			<table className='w-full'>
				<thead className='bg-muted/50 border-b'>
					<tr>
						<th className='px-4 py-2 text-left text-xs font-medium uppercase tracking-wider'>Name</th>
						<th className='px-4 py-2 text-left text-xs font-medium uppercase tracking-wider'>Status</th>
						<th className='px-4 py-2 text-left text-xs font-medium uppercase tracking-wider'>Amount</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colSpan={3} className='p-0'>
							<EmptyState
								title='No items to display'
								description='This table is currently empty.'
								variant='compact'
								className='border-none rounded-none bg-transparent'
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	),
};
