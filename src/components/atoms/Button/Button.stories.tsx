import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Mail, ArrowRight } from 'lucide-react';
import Button from './Button';

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'black', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
			description: 'The visual style of the button',
		},
		size: {
			control: 'select',
			options: ['default', 'sm', 'lg', 'icon', 'xs'],
			description: 'The size of the button',
		},
		isLoading: {
			control: 'boolean',
			description: 'Whether the button is in a loading state',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the button is disabled',
		},
		asChild: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		children: 'Button',
		variant: 'default',
		size: 'default',
		isLoading: false,
		disabled: false,
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Click me',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: /click me/i });
		await expect(button).toBeInTheDocument();
		await expect(button).not.toBeDisabled();
	},
};

export const Loading: Story = {
	args: {
		children: 'Please wait',
		isLoading: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');
		await expect(button).toBeDisabled();
		// Verify spinner is rendered
		const spinner = canvas.getByTestId('button-loading-spinner');
		await expect(spinner).toBeInTheDocument();
	},
};

export const Disabled: Story = {
	args: {
		children: 'Disabled',
		disabled: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: /disabled/i });
		await expect(button).toBeDisabled();
	},
};

export const WithIcons: Story = {
	render: (args) => (
		<Button {...args} prefixIcon={<Mail className='size-4' />} suffixIcon={<ArrowRight className='size-4' />}>
			Login with Email
		</Button>
	),
};

export const IconOnly: Story = {
	render: (args) => (
		<Button {...args} size='icon' variant='outline' aria-label='Email'>
			<Mail className='size-4' />
		</Button>
	),
};

export const Destructive: Story = {
	args: {
		variant: 'destructive',
		children: 'Delete Account',
	},
};
