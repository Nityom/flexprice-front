import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import Tooltip from './Tooltip';

describe('Tooltip Component', () => {
	it('renders its children correctly', () => {
		render(
			<Tooltip content='Tooltip Content'>
				<button>Hover Me</button>
			</Tooltip>,
		);
		expect(screen.getByText('Hover Me')).toBeInTheDocument();
	});

	it('shows tooltip content on hover', async () => {
		render(
			<Tooltip content='Tooltip Content' delayDuration={0}>
				<button>Hover Me</button>
			</Tooltip>,
		);

		const trigger = screen.getByText('Hover Me');

		// Tooltip content should not be in the document initially
		expect(screen.queryByText('Tooltip Content')).not.toBeInTheDocument();

		// Hover to trigger tooltip
		await userEvent.hover(trigger);

		// Radix tooltips render in a portal and might take a frame
		// Use getAllByText because Radix might render content twice (one for sr-only)
		await waitFor(() => {
			expect(screen.getAllByText('Tooltip Content').length).toBeGreaterThan(0);
		});
	});

	it.skip('hides tooltip content on unhover', async () => {
		render(
			<Tooltip content='Tooltip Content' delayDuration={0}>
				<button>Hover Me</button>
			</Tooltip>,
		);

		const trigger = screen.getByText('Hover Me');

		// Hover
		await userEvent.hover(trigger);
		await waitFor(() => {
			expect(screen.getAllByText('Tooltip Content').length).toBeGreaterThan(0);
		});

		// Unhover
		fireEvent.mouseLeave(trigger);

		// Wait for tooltip to be removed from the DOM
		await waitFor(
			() => {
				expect(screen.queryAllByText('Tooltip Content').length).toBe(0);
			},
			{ timeout: 2000 },
		);
	});

	it('supports rich ReactNode content', async () => {
		render(
			<Tooltip content={<div data-testid='rich-content'>Rich Node</div>} delayDuration={0}>
				<button>Hover</button>
			</Tooltip>,
		);

		await userEvent.hover(screen.getByText('Hover'));

		await waitFor(() => {
			expect(screen.getAllByTestId('rich-content').length).toBeGreaterThan(0);
			expect(screen.getAllByText('Rich Node').length).toBeGreaterThan(0);
		});
	});
});
