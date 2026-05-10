import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { Home, Landmark, Layers2, Settings, CodeXml, Puzzle, BarChart3 } from 'lucide-react';
import SidebarNav from './SidebarNav';
import { SidebarProvider, Sidebar } from '@/components/ui/sidebar';
import { expect, within, userEvent } from '@storybook/test';

/**
 * Main navigation component for the FlexPrice dashboard.
 * Supports nested items, icons, and collapsible state.
 */
const meta = {
	title: 'Organisms/SidebarNav',
	component: SidebarNav,
	decorators: [
		(Story) => (
			<MemoryRouter initialEntries={['/dashboard']}>
				<SidebarProvider>
					<div className='flex h-screen w-full'>
						<Sidebar>
							<Story />
						</Sidebar>
					</div>
				</SidebarProvider>
			</MemoryRouter>
		),
	],
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof SidebarNav>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
	{
		title: 'Home',
		url: '/dashboard',
		icon: Home,
	},
	{
		title: 'Product Catalog',
		url: '/catalog',
		icon: Layers2,
		items: [
			{ title: 'Features', url: '/catalog/features' },
			{ title: 'Plans', url: '/catalog/plans' },
			{ title: 'Coupons', url: '/catalog/coupons' },
		],
	},
	{
		title: 'Billing',
		url: '/billing',
		icon: Landmark,
		items: [
			{ title: 'Customers', url: '/billing/customers' },
			{ title: 'Subscriptions', url: '/billing/subscriptions' },
			{ title: 'Invoices', url: '/billing/invoices' },
		],
	},
	{
		title: 'Revenue',
		url: '/revenue',
		icon: BarChart3,
	},
	{
		title: 'Developers',
		url: '/dev',
		icon: CodeXml,
		items: [
			{ title: 'Events', url: '/dev/events' },
			{ title: 'API Keys', url: '/dev/api-keys' },
		],
	},
	{
		title: 'Integrations',
		url: '/integrations',
		icon: Puzzle,
	},
	{
		title: 'Settings',
		url: '/settings',
		icon: Settings,
	},
];

export const Default: Story = {
	args: {
		items: mockItems,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByText('Home')).toBeInTheDocument();

		// Test nested item expansion
		const billingTrigger = canvas.getByText('Billing');
		await userEvent.click(billingTrigger);

		await expect(canvas.getByText('Invoices')).toBeInTheDocument();
	},
};

export const Collapsed: Story = {
	decorators: [
		(Story) => (
			<SidebarProvider defaultOpen={false}>
				<div className='flex h-screen w-full'>
					<Sidebar collapsible='icon'>
						<Story />
					</Sidebar>
				</div>
			</SidebarProvider>
		),
	],
	args: {
		items: mockItems,
	},
};
