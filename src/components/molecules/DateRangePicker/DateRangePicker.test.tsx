import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import DateRangePicker from './DateRangePicker';

describe('DateRangePicker Component', () => {
	it('renders with placeholder when no value is provided', () => {
		render(<DateRangePicker placeholder='Select range' />);
		expect(screen.getByText('Select range')).toBeInTheDocument();
	});

	it('displays the formatted date range when value is provided', () => {
		const from = new Date(2024, 0, 1);
		const to = new Date(2024, 0, 10);
		render(<DateRangePicker value={{ from, to }} />);

		// format(from, 'LLL dd, y') -> "Jan 01, 2024"
		expect(screen.getByText(/Jan 01, 2024 - Jan 10, 2024/)).toBeInTheDocument();
	});

	it('opens the calendar popover when clicked', async () => {
		render(<DateRangePicker />);
		const button = screen.getByRole('button');
		await userEvent.click(button);

		// The calendar should be visible
		// react-day-picker usually has role='grid' or we can check for month name
		await waitFor(() => {
			expect(screen.getByRole('dialog')).toBeInTheDocument();
		});
	});

	it('is disabled when disabled prop is true', () => {
		render(<DateRangePicker disabled />);
		expect(screen.getByRole('button')).toBeDisabled();
	});
});
