import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Chip from './Chip';

describe('Chip Component', () => {
	it('renders correctly with label', () => {
		render(<Chip label='Test Chip' />);
		expect(screen.getByText('Test Chip')).toBeInTheDocument();
	});

	it('renders correctly with different variants', () => {
		// Just testing that it renders without crashing for each variant
		const variants = ['default', 'success', 'warning', 'failed', 'info'] as const;
		variants.forEach((variant) => {
			render(<Chip label={variant} variant={variant} />);
			expect(screen.getByText(variant)).toBeInTheDocument();
		});
	});

	it('renders an icon if provided', () => {
		render(<Chip label='With Icon' icon={<span data-testid='test-icon'>Icon</span>} />);
		expect(screen.getByTestId('test-icon')).toBeInTheDocument();
	});

	it('renders childrenAfter if provided', () => {
		render(<Chip label='With After' childrenAfter={<span data-testid='test-after'>After</span>} />);
		expect(screen.getByTestId('test-after')).toBeInTheDocument();
	});

	it('calls onClick when clicked', () => {
		const handleClick = vi.fn();
		render(<Chip label='Clickable' onClick={handleClick} />);

		const chipElement = screen.getByText('Clickable').parentElement!;
		fireEvent.click(chipElement);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('calls onClick on Enter key press', () => {
		const handleClick = vi.fn();
		render(<Chip label='Clickable' onClick={handleClick} />);

		const chipElement = screen.getByText('Clickable').parentElement!;
		fireEvent.keyDown(chipElement, { key: 'Enter', code: 'Enter' });

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('does not call onClick when disabled', () => {
		const handleClick = vi.fn();
		render(<Chip label='Disabled' onClick={handleClick} disabled />);

		const chipElement = screen.getByText('Disabled').parentElement!;
		fireEvent.click(chipElement);
		fireEvent.keyDown(chipElement, { key: 'Enter', code: 'Enter' });

		expect(handleClick).not.toHaveBeenCalled();
		expect(chipElement).toHaveAttribute('aria-disabled', 'true');
	});
});
