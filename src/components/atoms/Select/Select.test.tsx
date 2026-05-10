import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Select from './Select';

const mockOptions = [
	{ value: 'option1', label: 'Option 1' },
	{ value: 'option2', label: 'Option 2' },
	{ value: 'option3', label: 'Option 3', disabled: true },
];

describe('Select Component', () => {
	it('renders correctly with placeholder', () => {
		render(<Select options={mockOptions} placeholder='Choose an option' />);
		expect(screen.getByText('Choose an option')).toBeInTheDocument();
	});

	it('renders with label and description', () => {
		render(<Select options={mockOptions} label='Test Label' description='Helper text' />);
		expect(screen.getByText('Test Label')).toBeInTheDocument();
		expect(screen.getByText('Helper text')).toBeInTheDocument();
	});

	it('renders error message', () => {
		render(<Select options={mockOptions} error='Invalid selection' />);
		const errorText = screen.getByText('Invalid selection');
		expect(errorText).toBeInTheDocument();
		expect(errorText).toHaveClass('text-destructive');
	});

	it('opens dropdown and displays options when clicked', async () => {
		render(<Select options={mockOptions} />);

		const trigger = screen.getByRole('combobox');
		await userEvent.click(trigger);

		// Radix portals listbox out of the main DOM tree
		const listbox = screen.getByRole('listbox');
		expect(listbox).toBeInTheDocument();

		// Options should be visible
		expect(screen.getByText('Option 1')).toBeInTheDocument();
		expect(screen.getByText('Option 2')).toBeInTheDocument();
		expect(screen.getByText('Option 3')).toBeInTheDocument();
	});

	it('calls onChange when an option is selected', async () => {
		const handleChange = vi.fn();
		render(<Select options={mockOptions} onChange={handleChange} />);

		const trigger = screen.getByRole('combobox');
		await userEvent.click(trigger);

		const option1 = screen.getByText('Option 1');
		await userEvent.click(option1);

		expect(handleChange).toHaveBeenCalledTimes(1);
		expect(handleChange).toHaveBeenCalledWith('option1');
	});

	it('does not call onChange for disabled options', async () => {
		const handleChange = vi.fn();
		render(<Select options={mockOptions} onChange={handleChange} />);

		const trigger = screen.getByRole('combobox');
		await userEvent.click(trigger);

		const option3 = screen.getByText('Option 3');
		// Using fireEvent.click since userEvent.click prevents clicking disabled elements
		fireEvent.click(option3);

		expect(handleChange).not.toHaveBeenCalled();
	});

	it('is disabled when disabled prop is true', () => {
		render(<Select options={mockOptions} disabled />);

		const trigger = screen.getByRole('combobox');
		expect(trigger).toBeDisabled();
	});
});
