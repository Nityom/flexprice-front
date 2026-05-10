import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent } from '@storybook/test';
import SearchBar from './SearchBar';

/**
 * SearchBar component with debounce and clear functionality.
 * Used across tables and lists for real-time filtering.
 */
const meta = {
	title: 'Molecules/SearchBar',
	component: SearchBar,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		placeholder: { control: 'text' },
		debounceMs: { control: 'number' },
		onSearch: { action: 'searched' },
	},
	args: {
		placeholder: 'Search for anything...',
		debounceMs: 300,
	},
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Search for anything...',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Search for anything...');

		await userEvent.type(input, 'FlexPrice');
		await expect(input).toHaveValue('FlexPrice');

		// Clear button should appear
		const clearButton = canvas.getByRole('button');
		await expect(clearButton).toBeInTheDocument();

		await userEvent.click(clearButton);
		await expect(input).toHaveValue('');
	},
};

export const Small: Story = {
	args: {
		placeholder: 'Small search',
		className: 'max-w-xs',
	},
};
