import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router';
import SidebarNav from './SidebarNav';
import { SidebarProvider, Sidebar } from '@/components/ui/sidebar';
import { Home, Layers2 } from 'lucide-react';

const mockItems = [
	{
		title: 'Home',
		url: '/dashboard',
		icon: Home,
	},
	{
		title: 'Catalog',
		url: '/catalog',
		icon: Layers2,
		items: [{ title: 'Plans', url: '/catalog/plans' }],
	},
];

const renderWithProviders = (ui: React.ReactElement, { initialEntries = ['/'] } = {}) => {
	return render(
		<MemoryRouter initialEntries={initialEntries}>
			<SidebarProvider>
				<Sidebar>{ui}</Sidebar>
			</SidebarProvider>
		</MemoryRouter>,
	);
};

describe('SidebarNav Component', () => {
	it('renders main navigation items', () => {
		renderWithProviders(<SidebarNav items={mockItems} />);
		expect(screen.getByText('Home')).toBeInTheDocument();
		expect(screen.getByText('Catalog')).toBeInTheDocument();
	});

	it('opens sub-menu when parent item is clicked', async () => {
		renderWithProviders(<SidebarNav items={mockItems} />);

		const catalogItem = screen.getByText('Catalog');
		fireEvent.click(catalogItem);

		await waitFor(() => {
			expect(screen.getByText('Plans')).toBeVisible();
		});
	});

	it('marks the active item based on the current route', () => {
		renderWithProviders(<SidebarNav items={mockItems} />, { initialEntries: ['/dashboard'] });

		// The Home item should be active.
		const homeLink = screen.getByRole('link', { name: /home/i });
		// In our implementation, SidebarMenuButton with asChild passes isActive to the Link
		// isActive true adds data-active="true" via SidebarMenuButton
		expect(homeLink).toHaveAttribute('data-active', 'true');
	});

	it('marks sub-items as active', async () => {
		renderWithProviders(<SidebarNav items={mockItems} />, { initialEntries: ['/catalog/plans'] });

		expect(screen.getByText('Plans')).toBeInTheDocument();

		const plansLink = screen.getByRole('link', { name: /plans/i });
		// SidebarMenuSubButton with asChild passes isActive to the Link
		// isActive true adds data-active="true" via SidebarMenuSubButton
		expect(plansLink).toHaveAttribute('data-active', 'true');
	});
});
