import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PlanPriceTable from './PlanPriceTable';
import { PriceApi } from '@/api/PriceApi';
import { ENTITY_STATUS, PRICE_TYPE } from '@/models';

// Mock API
vi.mock('@/api/PriceApi', () => ({
	PriceApi: {
		searchPrices: vi.fn(),
		DeletePrice: vi.fn(),
	},
}));

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router', async () => {
	const actual = await vi.importActual('react-router');
	return {
		...actual,
		useNavigate: () => mockNavigate,
	};
});

const mockPlan = {
	id: 'plan_123',
	name: 'Pro Plan',
	description: 'Advanced features for scaling businesses',
	status: ENTITY_STATUS.PUBLISHED,
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
};

const mockPrices = [
	{
		id: 'price_1',
		display_name: 'Monthly Subscription',
		type: PRICE_TYPE.FIXED,
		billing_period: 'monthly',
		amount: '99',
		currency: 'usd',
		start_date: '2024-01-01T00:00:00Z',
		invoice_cadence: 'ARREAR',
	},
	{
		id: 'price_2',
		display_name: 'Usage Charge',
		type: PRICE_TYPE.USAGE,
		billing_period: 'monthly',
		amount: '0.10',
		currency: 'usd',
		start_date: '2024-01-01T00:00:00Z',
		invoice_cadence: 'ARREAR',
	},
];

describe('PlanPriceTable Component', () => {
	let queryClient: QueryClient;

	beforeEach(() => {
		queryClient = new QueryClient({
			defaultOptions: {
				queries: {
					retry: false,
				},
			},
		});
		vi.clearAllMocks();
		(PriceApi.searchPrices as any).mockResolvedValue({
			items: mockPrices,
			pagination: { total: 2, limit: 10, offset: 0 },
		});
	});

	const renderComponent = () =>
		render(
			<MemoryRouter>
				<QueryClientProvider client={queryClient}>
					<PlanPriceTable plan={mockPlan as any} />
				</QueryClientProvider>
			</MemoryRouter>,
		);

	it('renders the table with prices', async () => {
		renderComponent();

		await waitFor(() => {
			expect(screen.getByText('Monthly Subscription')).toBeInTheDocument();
			expect(screen.getByText('Usage Based')).toBeInTheDocument();
		});
	});

	it('navigates to add charges page on click', async () => {
		renderComponent();

		const addButton = screen.getByRole('button', { name: /add/i });
		fireEvent.click(addButton);

		expect(mockNavigate).toHaveBeenCalledWith('/product-catalog/plan/plan_123/add-charges');
	});

	it('opens terminate modal when terminate is selected', async () => {
		renderComponent();

		await waitFor(() => {
			expect(screen.getByText('Monthly Subscription')).toBeInTheDocument();
		});

		// Find the interactive div for the first price dropdown
		const dropdownTriggers = screen.getAllByTestId('price-dropdown-trigger');
		fireEvent.click(dropdownTriggers[0]);

		// Now should see the dropdown options
		const terminateOption = screen.getByText('Terminate Price');
		fireEvent.click(terminateOption);

		// Should show the TerminatePriceModal
		expect(screen.getByRole('heading', { name: /terminate price/i })).toBeInTheDocument();
	});
});
