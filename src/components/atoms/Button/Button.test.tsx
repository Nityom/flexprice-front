import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';
import { Mail } from 'lucide-react';

describe('Button component', () => {
	it('renders the children correctly', () => {
		render(<Button>Click me</Button>);
		expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
	});

	it('handles click events', () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Click me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });
		fireEvent.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('is disabled when the disabled prop is passed', () => {
		render(<Button disabled>Disabled Button</Button>);
		const button = screen.getByRole('button', { name: /disabled button/i });
		expect(button).toBeDisabled();
	});

	it('shows a loading spinner and is disabled when isLoading is true', () => {
		render(<Button isLoading>Loading Button</Button>);
		const button = screen.getByRole('button');

		expect(button).toBeDisabled();
		expect(screen.getByTestId('button-loading-spinner')).toBeInTheDocument();

		// Original text shouldn't be visible in the normal way when loading
		expect(screen.queryByText(/loading button/i)).not.toBeInTheDocument();
	});

	it('renders prefix and suffix icons', () => {
		render(
			<Button prefixIcon={<Mail data-testid='prefix-icon' />} suffixIcon={<Mail data-testid='suffix-icon' />}>
				Icon Button
			</Button>,
		);

		expect(screen.getByTestId('prefix-icon')).toBeInTheDocument();
		expect(screen.getByTestId('suffix-icon')).toBeInTheDocument();
	});

	it('applies the correct variant classes', () => {
		render(<Button variant='destructive'>Destructive</Button>);
		const button = screen.getByRole('button', { name: /destructive/i });
		expect(button.className).toContain('bg-destructive');
	});

	it('applies the correct size classes', () => {
		render(<Button size='lg'>Large</Button>);
		const button = screen.getByRole('button', { name: /large/i });
		expect(button.className).toContain('h-10');
	});
});
