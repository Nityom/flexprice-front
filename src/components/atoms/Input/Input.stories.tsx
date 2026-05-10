import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent } from '@storybook/test';
import Input from './Input';

const meta = {
	title: 'Atoms/Input',
	component: Input,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['text', 'number', 'formatted-number', 'integer'],
			description: 'The type of input formatting to apply',
		},
		size: {
			control: 'select',
			options: ['default', 'sm', 'lg', 'xs'],
			description: 'The size of the input field',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the input is disabled',
		},
	},
	args: {
		variant: 'text',
		size: 'default',
		disabled: false,
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Enter text here',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText(/Enter text here/i);
		await expect(input).toBeInTheDocument();

		await userEvent.type(input, 'Hello World');
		await expect(input).toHaveValue('Hello World');
	},
};

export const WithLabel: Story = {
	args: {
		label: 'Email',
		placeholder: 'Enter your email',
		type: 'email',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// Label should be connected to input
		const input = canvas.getByLabelText(/Email/i);
		await expect(input).toBeInTheDocument();
	},
};

export const WithError: Story = {
	args: {
		label: 'Password',
		type: 'password',
		error: 'Password must be at least 8 characters',
		placeholder: 'Enter your password',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const errorText = canvas.getByText(/Password must be at least 8 characters/i);
		await expect(errorText).toBeInTheDocument();
		await expect(errorText).toHaveClass('text-destructive');
	},
};

export const Disabled: Story = {
	args: {
		label: 'Username',
		placeholder: 'Enter your username',
		disabled: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText(/Username/i);
		await expect(input).toBeDisabled();
	},
};

export const WithCurrencyPrefix: Story = {
	args: {
		label: 'Amount',
		placeholder: '0.00',
		variant: 'formatted-number',
		inputPrefix: <span className='text-muted-foreground'>$</span>,
		formatOptions: {
			allowDecimals: true,
			thousandSeparator: ',',
			decimalSeparator: '.',
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText(/Amount/i);
		await userEvent.type(input, '1234.56', { delay: 50 });

		// Use waitFor to ensure formatting has applied
		await expect(input).toHaveValue('1,234.56');
	},
};
