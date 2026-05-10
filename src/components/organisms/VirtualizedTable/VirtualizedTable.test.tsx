import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import VirtualizedTable from './VirtualizedTable';

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
}));

// Mock useVirtualizer
vi.mock('@tanstack/react-virtual', () => ({
	useVirtualizer: vi.fn().mockReturnValue({
		getTotalSize: () => 1000,
		getVirtualItems: () => [
			{ index: 0, key: 0, size: 50, start: 0 },
			{ index: 1, key: 1, size: 50, start: 50 },
		],
	}),
}));

const mockData = Array.from({ length: 100 }, (_, i) => ({
	id: `row-${i}`,
	name: `Item ${i}`,
	value: i * 10,
}));

const mockColumns = [
	{
		header: 'ID',
		accessor: 'id' as const,
	},
	{
		header: 'Name',
		accessor: 'name' as const,
	},
];

describe('VirtualizedTable Component', () => {
	it('renders correctly with data', () => {
		render(
			<div style={{ height: '500px', width: '500px' }}>
				<VirtualizedTable columns={mockColumns} data={mockData} estimateRowHeight={50} />
			</div>,
		);

		// Virtualization means only visible items are rendered
		// Item 0 should be visible
		expect(screen.getByText('Item 0')).toBeInTheDocument();
	});

	it('renders headers correctly', () => {
		render(
			<div style={{ height: '500px', width: '500px' }}>
				<VirtualizedTable columns={mockColumns} data={mockData} />
			</div>,
		);

		expect(screen.getByText('ID')).toBeInTheDocument();
		expect(screen.getByText('Name')).toBeInTheDocument();
	});
});
