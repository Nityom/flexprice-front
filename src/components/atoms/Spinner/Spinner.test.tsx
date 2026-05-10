import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Spinner from './Spinner';

describe('Spinner Component', () => {
	it('renders correctly', () => {
		const { container } = render(<Spinner />);
		const svg = container.querySelector('svg');
		expect(svg).toBeInTheDocument();
		expect(svg).toHaveClass('animate-spin');
	});

	it('applies the correct size', () => {
		const size = 32;
		const { container } = render(<Spinner size={size} />);
		const svg = container.querySelector('svg');
		expect(svg).toHaveStyle({ width: `${size}px`, height: `${size}px` });
	});

	it('applies custom className', () => {
		const className = 'text-blue-500';
		const { container } = render(<Spinner className={className} />);
		const svg = container.querySelector('svg');
		expect(svg).toHaveClass(className);
	});

	it('renders with default size 24', () => {
		const { container } = render(<Spinner />);
		const svg = container.querySelector('svg');
		expect(svg).toHaveStyle({ width: '24px', height: '24px' });
	});
});
