import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import EmptyState from './EmptyState';

describe('EmptyState Component', () => {
	it('renders title and description correctly', () => {
		render(<EmptyState title='No Data' description='Check back later.' />);
		expect(screen.getByText('No Data')).toBeInTheDocument();
		expect(screen.getByText('Check back later.')).toBeInTheDocument();
	});

	it('renders the icon if provided', () => {
		render(<EmptyState title='Empty' icon={<span data-testid='test-icon'>icon</span>} />);
		expect(screen.getByTestId('test-icon')).toBeInTheDocument();
	});

	it('calls onAction when the action button is clicked', () => {
		const handleAction = vi.fn();
		render(<EmptyState title='Empty' actionLabel='Click Me' onAction={handleAction} />);

		const button = screen.getByRole('button', { name: /click me/i });
		fireEvent.click(button);

		expect(handleAction).toHaveBeenCalledTimes(1);
	});

	it('does not render button if onAction or actionLabel is missing', () => {
		const { rerender } = render(<EmptyState title='Empty' actionLabel='Click Me' />);
		expect(screen.queryByRole('button')).not.toBeInTheDocument();

		rerender(<EmptyState title='Empty' onAction={() => {}} />);
		expect(screen.queryByRole('button')).not.toBeInTheDocument();
	});

	it('applies compact variant styles', () => {
		const { container } = render(<EmptyState title='Compact' variant='compact' />);
		const div = container.firstChild;
		expect(div).toHaveClass('min-h-[200px]');
		expect(screen.getByRole('heading')).toHaveClass('text-lg');
	});
});
