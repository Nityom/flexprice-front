import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import InvoiceStatusBadge from './InvoiceStatusBadge';

describe('InvoiceStatusBadge Component', () => {
	it('renders the correct label for each status', () => {
		const statuses = [
			{ id: 'paid', label: 'Paid' },
			{ id: 'open', label: 'Open' },
			{ id: 'draft', label: 'Draft' },
			{ id: 'past_due', label: 'Past Due' },
		] as const;

		statuses.forEach(({ id, label }) => {
			const { unmount } = render(<InvoiceStatusBadge status={id} />);
			expect(screen.getByText(label)).toBeInTheDocument();
			unmount();
		});
	});

	it('renders an icon based on the status', () => {
		const { container } = render(<InvoiceStatusBadge status='paid' />);
		const icon = container.querySelector('svg');
		expect(icon).toBeInTheDocument();
	});

	it('applies the correct variant class through the Chip atom', () => {
		// Paid should have success styling
		render(<InvoiceStatusBadge status='paid' />);
		// Since Chip uses inline styles or tailwind, we check if it renders.
		// In our Chip implementation, success has bgColor: '#ECFBE4'
		const chip = screen.getByText('Paid').parentElement;
		expect(chip).toHaveStyle({ backgroundColor: 'rgb(236, 251, 228)' }); // #ECFBE4 in RGB
	});
});
