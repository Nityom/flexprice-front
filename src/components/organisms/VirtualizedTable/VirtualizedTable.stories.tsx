import type { Meta, StoryObj } from '@storybook/react';
import VirtualizedTable from './VirtualizedTable';
import { Badge } from '@/components/ui/badge';
import { useSyncFilters } from '@/hooks/useSyncFilters';
import { useFilterStore } from '@/store/useFilterStore';
import { expect, within, userEvent } from '@storybook/test';

const meta = {
	title: 'Organisms/VirtualizedTable',
	component: VirtualizedTable,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof VirtualizedTable>;

export default meta;
type Story = StoryObj<typeof meta>;

interface MockData {
	id: string;
	name: string;
	email: string;
	status: string;
	amount: string;
}

const generateData = (count: number): MockData[] => {
	return Array.from({ length: count }, (_, i) => ({
		id: `INV-${1000 + i}`,
		name: `Customer ${i + 1}`,
		email: `customer${i + 1}@example.com`,
		status: i % 3 === 0 ? 'Paid' : i % 3 === 1 ? 'Pending' : 'Overdue',
		amount: `$${(Math.random() * 1000).toFixed(2)}`,
	}));
};

const columns = [
	{ header: 'Invoice ID', accessor: 'id' as const, width: 120 },
	{ header: 'Customer Name', accessor: 'name' as const },
	{ header: 'Email', accessor: 'email' as const },
	{
		header: 'Status',
		accessor: 'status' as const,
		width: 120,
		cell: (value: string) => (
			<Badge variant={value === 'Paid' ? 'default' : value === 'Pending' ? 'outline' : 'destructive'}>{value}</Badge>
		),
	},
	{ header: 'Amount', accessor: 'amount' as const, width: 100 },
];

export const TenThousandRows: Story = {
	args: {
		data: generateData(10000),
		columns: columns as any,
		height: 600,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByText('Invoice ID')).toBeInTheDocument();
		await expect(canvas.getByText('Customer 1')).toBeInTheDocument();
	},
};

export const SmallDataset: Story = {
	args: {
		data: generateData(10),
		columns: columns as any,
		height: 300,
	},
};

const WithFilterStoreComponent = (args: any) => {
	const filters = useSyncFilters('invoices');
	const setFilter = useFilterStore((state) => state.setFilter);

	// Filter the data based on search query
	const filteredData = args.data.filter(
		(item: any) =>
			item.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
			item.id.toLowerCase().includes(filters.searchQuery.toLowerCase()),
	);

	return (
		<div className='p-4 space-y-4'>
			<div className='flex gap-4 items-center'>
				<input
					type='text'
					placeholder='Search invoices...'
					className='px-3 py-2 border rounded-md w-64 bg-background text-foreground'
					value={filters.searchQuery}
					onChange={(e) => setFilter('invoices', 'searchQuery', e.target.value)}
				/>
				<div className='text-sm text-muted-foreground'>Filters are persisted in sessionStorage and synced to URL hash fingerprint.</div>
			</div>
			<VirtualizedTable {...args} data={filteredData} />
		</div>
	);
};

/**
 * Demonstrates integration with useFilterStore and useSyncFilters hook.
 * Check the URL hash (f=...) when you interact with this story.
 */
export const WithFilterStore: Story = {
	render: (args) => <WithFilterStoreComponent {...args} />,
	args: {
		data: generateData(100),
		columns: columns as any,
		height: 400,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const searchInput = canvas.getByPlaceholderText('Search invoices...');

		// Type search
		await userEvent.type(searchInput, 'Customer 50');

		// Verify result
		await expect(canvas.getByText('Customer 50')).toBeInTheDocument();
		await expect(canvas.queryByText('Customer 1')).not.toBeInTheDocument();

		// Check URL hash indirectly
		await expect(window.location.hash).toContain('f=');
	},
};
