import { j as a } from './jsx-runtime-Cf8x2fCZ.js';
import { within as d, expect as p, userEvent as v } from './index-CH2Su9EI.js';
import { r as u } from './index-t5q4d8OJ.js';
import { F as o } from './Select-CLFKPqir.js';
import './index-yBjzXJbu.js';
import './select-1EArqANp.js';
import './index-Ds86VQ4X.js';
import './index-BLHw34Di.js';
import './index-vJvtiM9z.js';
import './index-BEq13kdC.js';
import './utils-BLSKlp9E.js';
import './createLucideIcon-DYb0enIN.js';
import './circle-CnA5Nx1k.js';
const _ = {
		title: 'Atoms/Select',
		component: o,
		parameters: { layout: 'padded' },
		tags: ['autodocs'],
		argTypes: {
			disabled: { control: 'boolean', description: 'Whether the select is disabled' },
			isRadio: { control: 'boolean', description: 'Render as a radio group inside the select dropdown' },
		},
	},
	l = [
		{ value: 'active', label: 'Active' },
		{ value: 'draft', label: 'Draft' },
		{ value: 'archived', label: 'Archived' },
		{ value: 'void', label: 'Void', disabled: !0 },
	],
	r = {
		render: (e) => {
			const [s, t] = u.useState('');
			return a.jsx('div', {
				className: 'w-[300px]',
				children: a.jsx(o, { ...e, value: s, onChange: t, options: l, placeholder: 'Select Status' }),
			});
		},
		play: async ({ canvasElement: e }) => {
			const t = d(e).getByRole('combobox');
			(await p(t).toBeInTheDocument(), await v.click(t));
			const m = d(document.body).getByRole('listbox');
			await p(m).toBeInTheDocument();
			const E = d(m).getByText('Active');
			(await v.click(E), await p(t).toHaveTextContent('Active'));
		},
	},
	i = {
		render: (e) => {
			const [s, t] = u.useState('');
			return a.jsx('div', {
				className: 'w-[300px]',
				children: a.jsx(o, {
					...e,
					value: s,
					onChange: t,
					options: l,
					label: 'Account Status',
					required: !0,
					error: 'This field is required',
				}),
			});
		},
	},
	n = {
		render: (e) => {
			const [s, t] = u.useState('draft');
			return a.jsx('div', {
				className: 'w-[300px]',
				children: a.jsx(o, { ...e, value: s, onChange: t, options: l, isRadio: !0, label: 'Radio Select' }),
			});
		},
	},
	c = {
		render: (e) =>
			a.jsx('div', { className: 'w-[300px]', children: a.jsx(o, { ...e, options: l, disabled: !0, label: 'Disabled Select' }) }),
	};
var g, x, b;
r.parameters = {
	...r.parameters,
	docs: {
		...((g = r.parameters) == null ? void 0 : g.docs),
		source: {
			originalSource: `{
  render: args => {
    const [val, setVal] = useState<string>('');
    return <div className="w-[300px]">
        <Select {...args} value={val} onChange={setVal} options={mockOptions} placeholder="Select Status" />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
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
  }
}`,
			...((b = (x = r.parameters) == null ? void 0 : x.docs) == null ? void 0 : b.source),
		},
	},
};
var h, S, w;
i.parameters = {
	...i.parameters,
	docs: {
		...((h = i.parameters) == null ? void 0 : h.docs),
		source: {
			originalSource: `{
  render: args => {
    const [val, setVal] = useState<string>('');
    return <div className="w-[300px]">
        <Select {...args} value={val} onChange={setVal} options={mockOptions} label="Account Status" required error="This field is required" />
      </div>;
  }
}`,
			...((w = (S = i.parameters) == null ? void 0 : S.docs) == null ? void 0 : w.source),
		},
	},
};
var y, R, f;
n.parameters = {
	...n.parameters,
	docs: {
		...((y = n.parameters) == null ? void 0 : y.docs),
		source: {
			originalSource: `{
  render: args => {
    const [val, setVal] = useState<string>('draft');
    return <div className="w-[300px]">
        <Select {...args} value={val} onChange={setVal} options={mockOptions} isRadio label="Radio Select" />
      </div>;
  }
}`,
			...((f = (R = n.parameters) == null ? void 0 : R.docs) == null ? void 0 : f.source),
		},
	},
};
var T, A, D;
c.parameters = {
	...c.parameters,
	docs: {
		...((T = c.parameters) == null ? void 0 : T.docs),
		source: {
			originalSource: `{
  render: args => <div className="w-[300px]">
      <Select {...args} options={mockOptions} disabled label="Disabled Select" />
    </div>
}`,
			...((D = (A = c.parameters) == null ? void 0 : A.docs) == null ? void 0 : D.source),
		},
	},
};
const P = ['Default', 'WithLabelAndError', 'WithRadioItems', 'Disabled'];
export { r as Default, c as Disabled, i as WithLabelAndError, n as WithRadioItems, P as __namedExportsOrder, _ as default };
