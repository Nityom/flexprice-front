import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { addDays } from 'date-fns';
import DateRangePicker from './DateRangePicker';

const meta = {
	title: 'Molecules/DateRangePicker',
	component: DateRangePicker,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		disabled: {
			control: 'boolean',
		},
	},
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultComponent = (args: any) => {
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(2024, 0, 1),
		to: addDays(new Date(2024, 0, 1), 20),
	});

	return <DateRangePicker {...args} value={date} onChange={setDate} />;
};

export const Default: Story = {
	render: (args) => <DefaultComponent {...args} />,
};

const EmptyComponent = (args: any) => {
	const [date, setDate] = useState<DateRange | undefined>(undefined);
	return <DateRangePicker {...args} value={date} onChange={setDate} />;
};

export const Empty: Story = {
	render: (args) => <EmptyComponent {...args} />,
};

export const Disabled: Story = {
	args: {
		disabled: true,
		value: {
			from: new Date(),
			to: addDays(new Date(), 7),
		},
	},
};
