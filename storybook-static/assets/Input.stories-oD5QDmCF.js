import { j as P } from './jsx-runtime-Cf8x2fCZ.js';
import { within as n, expect as t, userEvent as D } from './index-CH2Su9EI.js';
import { I as W } from './Input-Z5ELXsou.js';
import './index-yBjzXJbu.js';
import './index-t5q4d8OJ.js';
import './utils-BLSKlp9E.js';
const U = {
		title: 'Atoms/Input',
		component: W,
		parameters: { layout: 'padded' },
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['text', 'number', 'formatted-number', 'integer'],
				description: 'The type of input formatting to apply',
			},
			size: { control: 'select', options: ['default', 'sm', 'lg', 'xs'], description: 'The size of the input field' },
			disabled: { control: 'boolean', description: 'Whether the input is disabled' },
		},
		args: { variant: 'text', size: 'default', disabled: !1 },
	},
	s = {
		args: { placeholder: 'Enter text here' },
		play: async ({ canvasElement: a }) => {
			const e = n(a).getByPlaceholderText(/Enter text here/i);
			(await t(e).toBeInTheDocument(), await D.type(e, 'Hello World'), await t(e).toHaveValue('Hello World'));
		},
	},
	o = {
		args: { label: 'Email', placeholder: 'Enter your email', type: 'email' },
		play: async ({ canvasElement: a }) => {
			const e = n(a).getByLabelText(/Email/i);
			await t(e).toBeInTheDocument();
		},
	},
	c = {
		args: { label: 'Password', type: 'password', error: 'Password must be at least 8 characters', placeholder: 'Enter your password' },
		play: async ({ canvasElement: a }) => {
			const e = n(a).getByText(/Password must be at least 8 characters/i);
			(await t(e).toBeInTheDocument(), await t(e).toHaveClass('text-destructive'));
		},
	},
	l = {
		args: { label: 'Username', placeholder: 'Enter your username', disabled: !0 },
		play: async ({ canvasElement: a }) => {
			const e = n(a).getByLabelText(/Username/i);
			await t(e).toBeDisabled();
		},
	},
	i = {
		args: {
			label: 'Amount',
			placeholder: '0.00',
			variant: 'formatted-number',
			inputPrefix: P.jsx('span', { className: 'text-muted-foreground', children: '$' }),
			formatOptions: { allowDecimals: !0, thousandSeparator: ',', decimalSeparator: '.' },
		},
		play: async ({ canvasElement: a }) => {
			const e = n(a).getByLabelText(/Amount/i);
			(await D.type(e, '1234.56'), await t(e).toHaveValue('1,234.56'));
		},
	};
var p, m, u;
s.parameters = {
	...s.parameters,
	docs: {
		...((p = s.parameters) == null ? void 0 : p.docs),
		source: {
			originalSource: `{
  args: {
    placeholder: 'Enter text here'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(/Enter text here/i);
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, 'Hello World');
    await expect(input).toHaveValue('Hello World');
  }
}`,
			...((u = (m = s.parameters) == null ? void 0 : m.docs) == null ? void 0 : u.source),
		},
	},
};
var d, h, y;
o.parameters = {
	...o.parameters,
	docs: {
		...((d = o.parameters) == null ? void 0 : d.docs),
		source: {
			originalSource: `{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Label should be connected to input
    const input = canvas.getByLabelText(/Email/i);
    await expect(input).toBeInTheDocument();
  }
}`,
			...((y = (h = o.parameters) == null ? void 0 : h.docs) == null ? void 0 : y.source),
		},
	},
};
var v, x, b;
c.parameters = {
	...c.parameters,
	docs: {
		...((v = c.parameters) == null ? void 0 : v.docs),
		source: {
			originalSource: `{
  args: {
    label: 'Password',
    type: 'password',
    error: 'Password must be at least 8 characters',
    placeholder: 'Enter your password'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const errorText = canvas.getByText(/Password must be at least 8 characters/i);
    await expect(errorText).toBeInTheDocument();
    await expect(errorText).toHaveClass('text-destructive');
  }
}`,
			...((b = (x = c.parameters) == null ? void 0 : x.docs) == null ? void 0 : b.source),
		},
	},
};
var w, g, E;
l.parameters = {
	...l.parameters,
	docs: {
		...((w = l.parameters) == null ? void 0 : w.docs),
		source: {
			originalSource: `{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/Username/i);
    await expect(input).toBeDisabled();
  }
}`,
			...((E = (g = l.parameters) == null ? void 0 : g.docs) == null ? void 0 : E.source),
		},
	},
};
var f, T, B;
i.parameters = {
	...i.parameters,
	docs: {
		...((f = i.parameters) == null ? void 0 : f.docs),
		source: {
			originalSource: `{
  args: {
    label: 'Amount',
    placeholder: '0.00',
    variant: 'formatted-number',
    inputPrefix: <span className="text-muted-foreground">$</span>,
    formatOptions: {
      allowDecimals: true,
      thousandSeparator: ',',
      decimalSeparator: '.'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/Amount/i);
    await userEvent.type(input, '1234.56');
    // formatted-number should format it with commas
    await expect(input).toHaveValue('1,234.56');
  }
}`,
			...((B = (T = i.parameters) == null ? void 0 : T.docs) == null ? void 0 : B.source),
		},
	},
};
const V = ['Default', 'WithLabel', 'WithError', 'Disabled', 'WithCurrencyPrefix'];
export { s as Default, l as Disabled, i as WithCurrencyPrefix, c as WithError, o as WithLabel, V as __namedExportsOrder, U as default };
