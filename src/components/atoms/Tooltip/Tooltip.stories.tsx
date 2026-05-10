import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent } from '@storybook/test';
import { Info, HelpCircle } from 'lucide-react';
import Tooltip from './Tooltip';
import Button from '../Button/Button';

const meta = {
	title: 'Atoms/Tooltip',
	component: Tooltip,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		side: {
			control: 'select',
			options: ['top', 'right', 'bottom', 'left'],
			description: 'Side of the trigger to show tooltip',
		},
		align: {
			control: 'select',
			options: ['start', 'center', 'end'],
			description: 'Alignment of the tooltip relative to the trigger',
		},
		delayDuration: {
			control: 'number',
			description: 'Delay before showing tooltip in ms',
		},
	},
	args: {
		side: 'top',
		align: 'center',
		delayDuration: 0,
		sideOffset: 4,
	},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		content: 'Tooltip content for Default story 5e628675',
		children: (
			<Button variant='outline' size='sm'>
				Hover Me
			</Button>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('button', { name: /hover me/i });

		// Radix tooltips require hovering
		await userEvent.hover(trigger);

		// Tooltip renders in a portal
		const tooltipElements = await within(document.body).findAllByText('Tooltip content for Default story 5e628675');
		const visibleTooltip = tooltipElements.find((el) => el.offsetParent !== null || el.getClientRects().length > 0);
		expect(visibleTooltip).toBeInTheDocument();
	},
};

export const WithDelay: Story = {
	args: {
		content: 'Appears after 500ms',
		delayDuration: 500,
		children: (
			<span className='cursor-help flex items-center gap-1 text-sm text-muted-foreground'>
				<Info size={16} /> Hover for delay
			</span>
		),
	},
};

export const Placements: Story = {
	args: {
		content: 'Placements demo',
		children: <div>Placements</div>,
	},
	render: () => (
		<div className='grid grid-cols-2 gap-8 p-12'>
			<Tooltip content='Top tooltip' side='top'>
				<Button variant='outline'>Top</Button>
			</Tooltip>
			<Tooltip content='Right tooltip' side='right'>
				<Button variant='outline'>Right</Button>
			</Tooltip>
			<Tooltip content='Bottom tooltip' side='bottom'>
				<Button variant='outline'>Bottom</Button>
			</Tooltip>
			<Tooltip content='Left tooltip' side='left'>
				<Button variant='outline'>Left</Button>
			</Tooltip>
		</div>
	),
};

export const RichContent: Story = {
	args: {
		content: (
			<div className='space-y-1'>
				<p className='font-medium text-sm'>Advanced Usage</p>
				<p className='text-xs text-muted-foreground'>Tooltips can contain HTML elements and complex layouts.</p>
			</div>
		),
		children: (
			<Button variant='ghost' size='icon'>
				<HelpCircle size={18} />
			</Button>
		),
	},
};
