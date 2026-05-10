import React, { useState, useEffect, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import Input from '@/components/atoms/Input/Input';
import { cn } from '@/lib/utils';

/**
 * Props for the SearchBar component.
 */
export interface SearchBarProps {
	/** Initial search value */
	value?: string;
	/** Callback when the search value changes (debounced) */
	onSearch?: (value: string) => void;
	/** Placeholder text */
	placeholder?: string;
	/** Delay in milliseconds for debouncing (default 300) */
	debounceMs?: number;
	/** Whether the search bar is disabled */
	disabled?: boolean;
	/** Additional CSS classes */
	className?: string;
}

/**
 * A specialized search input component with built-in debouncing and search icons.
 */
const SearchBar: React.FC<SearchBarProps> = ({
	value = '',
	onSearch,
	placeholder = 'Search...',
	debounceMs = 300,
	disabled = false,
	className,
}) => {
	const [localValue, setLocalValue] = useState(value);

	useEffect(() => {
		setLocalValue(value);
	}, [value]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (onSearch) {
				onSearch(localValue);
			}
		}, debounceMs);

		return () => clearTimeout(timer);
	}, [localValue, onSearch, debounceMs]);

	const handleClear = useCallback(() => {
		setLocalValue('');
	}, []);

	return (
		<div className={cn('relative w-full max-w-sm', className)}>
			<Input
				value={localValue}
				onChange={setLocalValue}
				placeholder={placeholder}
				disabled={disabled}
				inputPrefix={<Search className='text-muted-foreground h-4 w-4' />}
				suffix={
					localValue && !disabled ? (
						<button onClick={handleClear} className='hover:bg-accent rounded-full p-0.5 transition-colors' aria-label='Clear search'>
							<X className='h-3.5 w-3.5 text-muted-foreground' />
						</button>
					) : null
				}
				className='pr-8' // Make space for the clear button
			/>
		</div>
	);
};

export default SearchBar;
