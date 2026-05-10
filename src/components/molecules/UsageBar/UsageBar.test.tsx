import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UsageBar from './UsageBar';

describe('UsageBar Component', () => {
	it('renders value and max correctly', () => {
		render(<UsageBar value={50} max={100} unit='credits' />);
		expect(screen.getByText('50 / 100 credits')).toBeInTheDocument();
		expect(screen.getByText('50%')).toBeInTheDocument();
	});

	it('calculates percentage correctly for the progress bar', () => {
		render(<UsageBar value={25} max={100} />);
		const progressBar = screen.getByRole('progressbar');
		expect(progressBar).toHaveStyle({ width: '25%' });
	});

	it('applies success color when below warning threshold', () => {
		render(<UsageBar value={10} max={100} warningThreshold={80} />);
		const progressBar = screen.getByRole('progressbar');
		expect(progressBar).toHaveClass('bg-success');
	});

	it('applies warning color when above warning threshold', () => {
		render(<UsageBar value={85} max={100} warningThreshold={80} dangerThreshold={95} />);
		const progressBar = screen.getByRole('progressbar');
		expect(progressBar).toHaveClass('bg-warning');
	});

	it('applies destructive color when above danger threshold', () => {
		render(<UsageBar value={96} max={100} dangerThreshold={95} />);
		const progressBar = screen.getByRole('progressbar');
		expect(progressBar).toHaveClass('bg-destructive');
	});

	it('clamps percentage between 0 and 100', () => {
		const { rerender } = render(<UsageBar value={150} max={100} />);
		let progressBar = screen.getByRole('progressbar');
		expect(progressBar).toHaveStyle({ width: '100%' });

		rerender(<UsageBar value={-50} max={100} />);
		progressBar = screen.getByRole('progressbar');
		expect(progressBar).toHaveStyle({ width: '0%' });
	});
});
