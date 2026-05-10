import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent } from '@storybook/test';
import { useState } from 'react';
import Select from './Select';

const meta = {
	title: 'Atoms/Select',
	component: Select,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		disabled: {
			control: 'boolean',
			description: 'Whether the select is disabled',
		},
		isRadio: {
			control: 'boolean',
			description: 'Render as a radio group inside the select dropdown',
		},
	},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockOptions = [
	{ value: 'active', label: 'Active' },
	{ value: 'draft', label: 'Draft' },
	{ value: 'archived', label: 'Archived' },
	{ value: 'void', label: 'Void', disabled: true },
];

const DefaultComponent = (args: any) => {
	const [val, setVal] = useState<string>('');
	return (
		<div className='w-[300px]'>
			<Select {...args} value={val} onChange={setVal} options={mockOptions} placeholder='Select Status' />
		</div>
	);
};

export const Default: Story = {
	args: {
		options: mockOptions,
		placeholder: 'Select Status',
	},
	render: (args) => <DefaultComponent {...args} />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('combobox');
		await expect(trigger).toBeInTheDocument();

		// Test interaction
		await userEvent.click(trigger);

		// Radix UI renders SelectContent in a portal, so we need to query document.body
		const listbox = within(document.body).getByRole('listbox');
		await expect(listbox).toBeInTheDocument();

		const activeOption = within(listbox).getByText('Active');
		await userEvent.click(activeOption);

		// The trigger should now display "Active"
		await expect(trigger).toHaveTextContent('Active');
	},
};

const WithLabelAndErrorComponent = (args: any) => {
	const [val, setVal] = useState<string>('');
	return (
		<div className='w-[300px]'>
			<Select
				{...args}
				value={val}
				onChange={setVal}
				options={mockOptions}
				label='Account Status'
				required
				error='This field is required'
			/>
		</div>
	);
};

export const WithLabelAndError: Story = {
	args: {
		options: mockOptions,
		label: 'Account Status',
		error: 'This field is required',
		required: true,
	},
	render: (args) => <WithLabelAndErrorComponent {...args} />,
};

const WithRadioItemsComponent = (args: any) => {
	const [val, setVal] = useState<string>('draft');
	return (
		<div className='w-[300px]'>
			<Select {...args} value={val} onChange={setVal} options={mockOptions} isRadio label='Radio Select' />
		</div>
	);
};

export const WithRadioItems: Story = {
	args: {
		options: mockOptions,
		isRadio: true,
		label: 'Radio Select',
	},
	render: (args) => <WithRadioItemsComponent {...args} />,
};

export const Disabled: Story = {
	args: {
		options: mockOptions,
		disabled: true,
		label: 'Disabled Select',
	},
	render: (args) => (
		<div className='w-[300px]'>
			<Select {...args} options={mockOptions} disabled label='Disabled Select' />
		</div>
	),
};
