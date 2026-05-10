import { j as n } from './jsx-runtime-Cf8x2fCZ.js';
import { within as u, expect as a } from './index-CH2Su9EI.js';
import { B as m } from './Button-Cf0ayti6.js';
import { M as k, A as N } from './mail-BlZkHQOZ.js';
import './index-yBjzXJbu.js';
import './index-t5q4d8OJ.js';
import './index-BNNQlCw5.js';
import './index-BEq13kdC.js';
import './index-1evVQkiP.js';
import './utils-BLSKlp9E.js';
import './createLucideIcon-DYb0enIN.js';
const H = {
		title: 'Atoms/Button',
		component: m,
		parameters: { layout: 'centered' },
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['default', 'black', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
				description: 'The visual style of the button',
			},
			size: { control: 'select', options: ['default', 'sm', 'lg', 'icon', 'xs'], description: 'The size of the button' },
			isLoading: { control: 'boolean', description: 'Whether the button is in a loading state' },
			disabled: { control: 'boolean', description: 'Whether the button is disabled' },
			asChild: { table: { disable: !0 } },
		},
		args: { children: 'Button', variant: 'default', size: 'default', isLoading: !1, disabled: !1 },
	},
	o = {
		args: { children: 'Click me' },
		play: async ({ canvasElement: e }) => {
			const t = u(e).getByRole('button', { name: /click me/i });
			(await a(t).toBeInTheDocument(), await a(t).not.toBeDisabled());
		},
	},
	r = {
		args: { children: 'Please wait', isLoading: !0 },
		play: async ({ canvasElement: e }) => {
			const s = u(e),
				t = s.getByRole('button');
			await a(t).toBeDisabled();
			const A = s.getByTestId('button-loading-spinner');
			await a(A).toBeInTheDocument();
		},
	},
	i = {
		args: { children: 'Disabled', disabled: !0 },
		play: async ({ canvasElement: e }) => {
			const t = u(e).getByRole('button', { name: /disabled/i });
			await a(t).toBeDisabled();
		},
	},
	c = {
		render: (e) =>
			n.jsx(m, {
				...e,
				prefixIcon: n.jsx(k, { className: 'size-4' }),
				suffixIcon: n.jsx(N, { className: 'size-4' }),
				children: 'Login with Email',
			}),
	},
	l = {
		render: (e) => n.jsx(m, { ...e, size: 'icon', variant: 'outline', 'aria-label': 'Email', children: n.jsx(k, { className: 'size-4' }) }),
	},
	d = { args: { variant: 'destructive', children: 'Delete Account' } };
var p, b, g;
o.parameters = {
	...o.parameters,
	docs: {
		...((p = o.parameters) == null ? void 0 : p.docs),
		source: {
			originalSource: `{
  args: {
    children: 'Click me'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /click me/i
    });
    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();
  }
}`,
			...((g = (b = o.parameters) == null ? void 0 : b.docs) == null ? void 0 : g.source),
		},
	},
};
var h, v, y;
r.parameters = {
	...r.parameters,
	docs: {
		...((h = r.parameters) == null ? void 0 : h.docs),
		source: {
			originalSource: `{
  args: {
    children: 'Please wait',
    isLoading: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeDisabled();
    // Verify spinner is rendered
    const spinner = canvas.getByTestId('button-loading-spinner');
    await expect(spinner).toBeInTheDocument();
  }
}`,
			...((y = (v = r.parameters) == null ? void 0 : v.docs) == null ? void 0 : y.source),
		},
	},
};
var B, f, x;
i.parameters = {
	...i.parameters,
	docs: {
		...((B = i.parameters) == null ? void 0 : B.docs),
		source: {
			originalSource: `{
  args: {
    children: 'Disabled',
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /disabled/i
    });
    await expect(button).toBeDisabled();
  }
}`,
			...((x = (f = i.parameters) == null ? void 0 : f.docs) == null ? void 0 : x.source),
		},
	},
};
var w, D, I;
c.parameters = {
	...c.parameters,
	docs: {
		...((w = c.parameters) == null ? void 0 : w.docs),
		source: {
			originalSource: `{
  render: args => <Button {...args} prefixIcon={<Mail className="size-4" />} suffixIcon={<ArrowRight className="size-4" />}>
      Login with Email
    </Button>
}`,
			...((I = (D = c.parameters) == null ? void 0 : D.docs) == null ? void 0 : I.source),
		},
	},
};
var E, z, R;
l.parameters = {
	...l.parameters,
	docs: {
		...((E = l.parameters) == null ? void 0 : E.docs),
		source: {
			originalSource: `{
  render: args => <Button {...args} size="icon" variant="outline" aria-label="Email">
      <Mail className="size-4" />
    </Button>
}`,
			...((R = (z = l.parameters) == null ? void 0 : z.docs) == null ? void 0 : R.source),
		},
	},
};
var T, L, j;
d.parameters = {
	...d.parameters,
	docs: {
		...((T = d.parameters) == null ? void 0 : T.docs),
		source: {
			originalSource: `{
  args: {
    variant: 'destructive',
    children: 'Delete Account'
  }
}`,
			...((j = (L = d.parameters) == null ? void 0 : L.docs) == null ? void 0 : j.source),
		},
	},
};
const J = ['Default', 'Loading', 'Disabled', 'WithIcons', 'IconOnly', 'Destructive'];
export {
	o as Default,
	d as Destructive,
	i as Disabled,
	l as IconOnly,
	r as Loading,
	c as WithIcons,
	J as __namedExportsOrder,
	H as default,
};
