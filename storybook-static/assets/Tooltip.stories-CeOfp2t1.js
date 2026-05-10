import { j as t } from './jsx-runtime-Cf8x2fCZ.js';
import { within as a, userEvent as D, expect as N } from './index-CH2Su9EI.js';
import { T as o } from './Tooltip-DuiAFdzG.js';
import { B as e } from './Button-Cf0ayti6.js';
import { c as R } from './createLucideIcon-DYb0enIN.js';
import { I as b } from './info-DvlYBrLq.js';
import './index-yBjzXJbu.js';
import './tooltip-CkQW4Nnp.js';
import './index-t5q4d8OJ.js';
import './index-vJvtiM9z.js';
import './index-BEq13kdC.js';
import './index-Ds86VQ4X.js';
import './index-BLHw34Di.js';
import './index-MpCb0xCw.js';
import './utils-BLSKlp9E.js';
import './index-BNNQlCw5.js';
import './index-1evVQkiP.js';
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w = R('CircleHelp', [
		['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
		['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
		['path', { d: 'M12 17h.01', key: 'p32p05' }],
	]),
	J = {
		title: 'Atoms/Tooltip',
		component: o,
		parameters: { layout: 'centered' },
		tags: ['autodocs'],
		argTypes: {
			side: { control: 'select', options: ['top', 'right', 'bottom', 'left'], description: 'Side of the trigger to show tooltip' },
			align: { control: 'select', options: ['start', 'center', 'end'], description: 'Alignment of the tooltip relative to the trigger' },
			delayDuration: { control: 'number', description: 'Delay before showing tooltip in ms' },
		},
		args: { side: 'top', align: 'center', delayDuration: 0, sideOffset: 4 },
	},
	n = {
		args: { content: 'This is a helpful tooltip', children: t.jsx(e, { variant: 'outline', size: 'sm', children: 'Hover Me' }) },
		play: async ({ canvasElement: T }) => {
			const B = a(T).getByRole('button', { name: /hover me/i });
			await D.hover(B);
			const j = await a(document.body).findByText('This is a helpful tooltip');
			N(j).toBeInTheDocument();
		},
	},
	i = {
		args: {
			content: 'Appears after 500ms',
			delayDuration: 500,
			children: t.jsxs('span', {
				className: 'cursor-help flex items-center gap-1 text-sm text-muted-foreground',
				children: [t.jsx(b, { size: 16 }), ' Hover for delay'],
			}),
		},
	},
	r = {
		render: () =>
			t.jsxs('div', {
				className: 'grid grid-cols-2 gap-8 p-12',
				children: [
					t.jsx(o, { content: 'Top tooltip', side: 'top', children: t.jsx(e, { variant: 'outline', children: 'Top' }) }),
					t.jsx(o, { content: 'Right tooltip', side: 'right', children: t.jsx(e, { variant: 'outline', children: 'Right' }) }),
					t.jsx(o, { content: 'Bottom tooltip', side: 'bottom', children: t.jsx(e, { variant: 'outline', children: 'Bottom' }) }),
					t.jsx(o, { content: 'Left tooltip', side: 'left', children: t.jsx(e, { variant: 'outline', children: 'Left' }) }),
				],
			}),
	},
	s = {
		args: {
			content: t.jsxs('div', {
				className: 'space-y-1',
				children: [
					t.jsx('p', { className: 'font-medium text-sm', children: 'Advanced Usage' }),
					t.jsx('p', { className: 'text-xs text-muted-foreground', children: 'Tooltips can contain HTML elements and complex layouts.' }),
				],
			}),
			children: t.jsx(e, { variant: 'ghost', size: 'icon', children: t.jsx(w, { size: 18 }) }),
		},
	};
var c, l, p;
n.parameters = {
	...n.parameters,
	docs: {
		...((c = n.parameters) == null ? void 0 : c.docs),
		source: {
			originalSource: `{
  args: {
    content: 'This is a helpful tooltip',
    children: <Button variant="outline" size="sm">
        Hover Me
      </Button>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /hover me/i
    });

    // Radix tooltips require hovering
    await userEvent.hover(trigger);

    // Tooltip renders in a portal
    const tooltipContent = await within(document.body).findByText('This is a helpful tooltip');
    expect(tooltipContent).toBeInTheDocument();
  }
}`,
			...((p = (l = n.parameters) == null ? void 0 : l.docs) == null ? void 0 : p.source),
		},
	},
};
var m, d, u;
i.parameters = {
	...i.parameters,
	docs: {
		...((m = i.parameters) == null ? void 0 : m.docs),
		source: {
			originalSource: `{
  args: {
    content: 'Appears after 500ms',
    delayDuration: 500,
    children: <span className="cursor-help flex items-center gap-1 text-sm text-muted-foreground">
        <Info size={16} /> Hover for delay
      </span>
  }
}`,
			...((u = (d = i.parameters) == null ? void 0 : d.docs) == null ? void 0 : u.source),
		},
	},
};
var h, g, x;
r.parameters = {
	...r.parameters,
	docs: {
		...((h = r.parameters) == null ? void 0 : h.docs),
		source: {
			originalSource: `{
  render: () => <div className="grid grid-cols-2 gap-8 p-12">
      <Tooltip content="Top tooltip" side="top">
        <Button variant="outline">Top</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" side="right">
        <Button variant="outline">Right</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button variant="outline">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" side="left">
        <Button variant="outline">Left</Button>
      </Tooltip>
    </div>
}`,
			...((x = (g = r.parameters) == null ? void 0 : g.docs) == null ? void 0 : x.source),
		},
	},
};
var f, v, y;
s.parameters = {
	...s.parameters,
	docs: {
		...((f = s.parameters) == null ? void 0 : f.docs),
		source: {
			originalSource: `{
  args: {
    content: <div className="space-y-1">
        <p className="font-medium text-sm">Advanced Usage</p>
        <p className="text-xs text-muted-foreground">
          Tooltips can contain HTML elements and complex layouts.
        </p>
      </div>,
    children: <Button variant="ghost" size="icon">
        <HelpCircle size={18} />
      </Button>
  }
}`,
			...((y = (v = s.parameters) == null ? void 0 : v.docs) == null ? void 0 : y.source),
		},
	},
};
const K = ['Default', 'WithDelay', 'Placements', 'RichContent'];
export { n as Default, r as Placements, s as RichContent, i as WithDelay, K as __namedExportsOrder, J as default };
