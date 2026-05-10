import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

/**
 * Props for the DateRangePicker component.
 */
export interface DateRangePickerProps {
	/** Initial date range */
	value?: DateRange;
	/** Callback when the range changes */
	onChange?: (range: DateRange | undefined) => void;
	/** Placeholder text when no range is selected */
	placeholder?: string;
	/** Additional CSS classes for the trigger button */
	className?: string;
	/** Whether the picker is disabled */
	disabled?: boolean;
}

/**
 * A composite component that allows users to select a range of dates.
 * Uses Radix Popover and react-day-picker.
 */
export function DateRangePicker({ className, value, onChange, placeholder = 'Pick a date range', disabled = false }: DateRangePickerProps) {
	return (
		<div className={cn('grid gap-2', className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id='date'
						variant={'outline'}
						size='sm'
						disabled={disabled}
						className={cn('w-[300px] justify-start text-left font-normal h-9 px-3', !value && 'text-muted-foreground')}>
						<CalendarIcon className='mr-2 h-4 w-4' />
						{value?.from ? (
							value.to ? (
								<>
									{format(value.from, 'LLL dd, y')} - {format(value.to, 'LLL dd, y')}
								</>
							) : (
								format(value.from, 'LLL dd, y')
							)
						) : (
							<span>{placeholder}</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-auto p-0' align='start'>
					<Calendar initialFocus mode='range' defaultMonth={value?.from} selected={value} onSelect={onChange} numberOfMonths={2} />
				</PopoverContent>
			</Popover>
		</div>
	);
}

export default DateRangePicker;
