import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PlanPriceTable from './PlanPriceTable';
import { ENTITY_STATUS } from '@/models';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

const mockPlan = {
	id: 'plan_123',
	name: 'Pro Plan',
	description: 'Advanced features for scaling businesses',
	status: ENTITY_STATUS.PUBLISHED,
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
};

const meta = {
	title: 'Organisms/PlanPriceTable',
	component: PlanPriceTable,
	args: {
		plan: mockPlan as any,
	},
	decorators: [
		(Story) => (
			<MemoryRouter>
				<QueryClientProvider client={queryClient}>
					<div className='w-full max-w-5xl p-6'>
						<Story />
					</div>
				</QueryClientProvider>
			</MemoryRouter>
		),
	],
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof PlanPriceTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		plan: mockPlan as any,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Check if the component renders
		await expect(canvas.getByText('Charges')).toBeInTheDocument();

		// Check if the Add button is present
		const addButton = canvas.getByRole('button', { name: /add/i });
		await expect(addButton).toBeInTheDocument();

		// We can't easily test navigation in Storybook without mocking the router better,
		// but we've verified the elements are there.
	},
};
