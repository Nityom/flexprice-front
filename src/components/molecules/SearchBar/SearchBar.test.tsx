import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it('renders correctly with placeholder', () => {
		render(<SearchBar placeholder='Search items...' />);
		expect(screen.getByPlaceholderText('Search items...')).toBeInTheDocument();
	});

	it('debounces the search callback', () => {
		const handleSearch = vi.fn();
		render(<SearchBar onSearch={handleSearch} debounceMs={500} />);

		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'test' } });

		// Callback should not be called immediately
		expect(handleSearch).not.toHaveBeenCalled();

		// Fast forward time
		act(() => {
			vi.advanceTimersByTime(500);
		});

		expect(handleSearch).toHaveBeenCalledWith('test');
	});

	it('clears the search when clear button is clicked', () => {
		const handleSearch = vi.fn();
		render(<SearchBar onSearch={handleSearch} value='initial' />);

		const clearButton = screen.getByLabelText('Clear search');
		fireEvent.click(clearButton);

		const input = screen.getByRole('textbox');
		expect(input).toHaveValue('');

		act(() => {
			vi.advanceTimersByTime(300);
		});
		expect(handleSearch).toHaveBeenCalledWith('');
	});

	it('is disabled when disabled prop is true', () => {
		render(<SearchBar disabled />);
		expect(screen.getByRole('textbox')).toBeDisabled();
	});
});
