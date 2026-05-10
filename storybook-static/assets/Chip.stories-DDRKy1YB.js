import { j as l } from './jsx-runtime-Cf8x2fCZ.js';
import { within as p, expect as d, userEvent as V } from './index-CH2Su9EI.js';
import { C as W, a as F, b as H } from './Chip-D5dGlNj6.js';
import { C as X } from './circle-x-6f_XFf-A.js';
import { I as _ } from './info-DvlYBrLq.js';
import './index-yBjzXJbu.js';
import './createLucideIcon-DYb0enIN.js';
import './index-t5q4d8OJ.js';
import './utils-BLSKlp9E.js';
const U = {
		title: 'Atoms/Chip',
		component: W,
		parameters: { layout: 'centered' },
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['default', 'success', 'warning', 'failed', 'info'],
				description: 'The visual style variant of the chip',
			},
			disabled: { control: 'boolean', description: 'Whether the chip is interactive or disabled' },
			onClick: { action: 'clicked' },
		},
		args: { variant: 'default', disabled: !1, label: 'Status' },
	},
	s = {
		args: { label: 'Draft', variant: 'default' },
		play: async ({ canvasElement: a }) => {
			const e = p(a).getByText('Draft');
			await d(e).toBeInTheDocument();
		},
	},
	n = { args: { label: 'Active', variant: 'success', icon: l.jsx(F, { size: 14 }) } },
	t = { args: { label: 'Past Due', variant: 'warning', icon: l.jsx(H, { size: 14 }) } },
	r = { args: { label: 'Void', variant: 'failed', icon: l.jsx(X, { size: 14 }) } },
	c = { args: { label: 'Processing', variant: 'info', icon: l.jsx(_, { size: 14 }) } },
	i = {
		args: { label: 'Click Me', variant: 'default' },
		play: async ({ canvasElement: a, args: m }) => {
			const u = p(a).getByText('Click Me');
			(await V.click(u), await d(u).toBeInTheDocument());
		},
	},
	o = {
		args: { label: 'Disabled', disabled: !0 },
		play: async ({ canvasElement: a }) => {
			const e = p(a).getByText('Disabled').parentElement;
			await d(e).toHaveAttribute('aria-disabled', 'true');
		},
	};
var v, g, b;
s.parameters = {
	...s.parameters,
	docs: {
		...((v = s.parameters) == null ? void 0 : v.docs),
		source: {
			originalSource: `{
  args: {
    label: 'Draft',
    variant: 'default'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByText('Draft');
    await expect(chip).toBeInTheDocument();
  }
}`,
			...((b = (g = s.parameters) == null ? void 0 : g.docs) == null ? void 0 : b.source),
		},
	},
};
var f, h, y;
n.parameters = {
	...n.parameters,
	docs: {
		...((f = n.parameters) == null ? void 0 : f.docs),
		source: {
			originalSource: `{
  args: {
    label: 'Active',
    variant: 'success',
    icon: <CheckCircle size={14} />
  }
}`,
			...((y = (h = n.parameters) == null ? void 0 : h.docs) == null ? void 0 : y.source),
		},
	},
};
var x, C, D;
t.parameters = {
	...t.parameters,
	docs: {
		...((x = t.parameters) == null ? void 0 : x.docs),
		source: {
			originalSource: `{
  args: {
    label: 'Past Due',
    variant: 'warning',
    icon: <AlertCircle size={14} />
  }
}`,
			...((D = (C = t.parameters) == null ? void 0 : C.docs) == null ? void 0 : D.source),
		},
	},
};
var w, k, E;
r.parameters = {
	...r.parameters,
	docs: {
		...((w = r.parameters) == null ? void 0 : w.docs),
		source: {
			originalSource: `{
  args: {
    label: 'Void',
    variant: 'failed',
    icon: <XCircle size={14} />
  }
}`,
			...((E = (k = r.parameters) == null ? void 0 : k.docs) == null ? void 0 : E.source),
		},
	},
};
var S, T, B;
c.parameters = {
	...c.parameters,
	docs: {
		...((S = c.parameters) == null ? void 0 : S.docs),
		source: {
			originalSource: `{
  args: {
    label: 'Processing',
    variant: 'info',
    icon: <Info size={14} />
  }
}`,
			...((B = (T = c.parameters) == null ? void 0 : T.docs) == null ? void 0 : B.source),
		},
	},
};
var I, z, j;
i.parameters = {
	...i.parameters,
	docs: {
		...((I = i.parameters) == null ? void 0 : I.docs),
		source: {
			originalSource: `{
  args: {
    label: 'Click Me',
    variant: 'default'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByText('Click Me');
    await userEvent.click(chip);
    // Since args.onClick is mocked by Storybook actions, we just test if it's clickable
    await expect(chip).toBeInTheDocument();
  }
}`,
			...((j = (z = i.parameters) == null ? void 0 : z.docs) == null ? void 0 : j.source),
		},
	},
};
var A, M, P;
o.parameters = {
	...o.parameters,
	docs: {
		...((A = o.parameters) == null ? void 0 : A.docs),
		source: {
			originalSource: `{
  args: {
    label: 'Disabled',
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByText('Disabled').parentElement!;
    await expect(chip).toHaveAttribute('aria-disabled', 'true');
  }
}`,
			...((P = (M = o.parameters) == null ? void 0 : M.docs) == null ? void 0 : P.source),
		},
	},
};
const Y = ['Default', 'Success', 'Warning', 'Failed', 'InfoVariant', 'Interactive', 'Disabled'];
export {
	s as Default,
	o as Disabled,
	r as Failed,
	c as InfoVariant,
	i as Interactive,
	n as Success,
	t as Warning,
	Y as __namedExportsOrder,
	U as default,
};
