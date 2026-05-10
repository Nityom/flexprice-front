import { j as a } from './jsx-runtime-Cf8x2fCZ.js';
import { C as h, b as D, a as w } from './Chip-D5dGlNj6.js';
import { C as c, F as T } from './file-text-BxZ8c0aT.js';
import { C as l } from './circle-x-6f_XFf-A.js';
import './index-yBjzXJbu.js';
import './createLucideIcon-DYb0enIN.js';
import './index-t5q4d8OJ.js';
import './utils-BLSKlp9E.js';
const u = {
		draft: { label: 'Draft', variant: 'default', icon: a.jsx(T, { size: 14 }) },
		open: { label: 'Open', variant: 'info', icon: a.jsx(c, { size: 14 }) },
		paid: { label: 'Paid', variant: 'success', icon: a.jsx(w, { size: 14 }) },
		uncollectible: { label: 'Uncollectible', variant: 'failed', icon: a.jsx(l, { size: 14 }) },
		void: { label: 'Void', variant: 'default', icon: a.jsx(l, { size: 14 }) },
		past_due: { label: 'Past Due', variant: 'warning', icon: a.jsx(D, { size: 14 }) },
		processing: { label: 'Processing', variant: 'info', icon: a.jsx(c, { size: 14 }) },
	},
	s = ({ status: y, className: P }) => {
		const i = u[y] || u.draft;
		return a.jsx(h, { label: i.label, variant: i.variant, icon: i.icon, className: P });
	};
s.__docgenInfo = {
	description: 'A specialized Badge component for displaying Invoice statuses with consistent icons and colors.',
	methods: [],
	displayName: 'InvoiceStatusBadge',
	props: {
		status: {
			required: !0,
			tsType: {
				name: 'union',
				raw: "'draft' | 'open' | 'paid' | 'uncollectible' | 'void' | 'past_due' | 'processing'",
				elements: [
					{ name: 'literal', value: "'draft'" },
					{ name: 'literal', value: "'open'" },
					{ name: 'literal', value: "'paid'" },
					{ name: 'literal', value: "'uncollectible'" },
					{ name: 'literal', value: "'void'" },
					{ name: 'literal', value: "'past_due'" },
					{ name: 'literal', value: "'processing'" },
				],
			},
			description: '',
		},
		className: { required: !1, tsType: { name: 'string' }, description: '' },
	},
};
const R = {
		title: 'Molecules/InvoiceStatusBadge',
		component: s,
		parameters: { layout: 'centered' },
		tags: ['autodocs'],
		argTypes: {
			status: {
				control: 'select',
				options: ['draft', 'open', 'paid', 'uncollectible', 'void', 'past_due', 'processing'],
				description: 'The invoice status to display',
			},
		},
		args: { status: 'paid' },
	},
	e = { args: { status: 'paid' } },
	t = { args: { status: 'open' } },
	r = { args: { status: 'past_due' } },
	o = { args: { status: 'draft' } },
	n = {
		render: () =>
			a.jsxs('div', {
				className: 'flex flex-wrap gap-4',
				children: [
					a.jsx(s, { status: 'draft' }),
					a.jsx(s, { status: 'open' }),
					a.jsx(s, { status: 'paid' }),
					a.jsx(s, { status: 'past_due' }),
					a.jsx(s, { status: 'uncollectible' }),
					a.jsx(s, { status: 'void' }),
					a.jsx(s, { status: 'processing' }),
				],
			}),
	};
var d, p, m;
e.parameters = {
	...e.parameters,
	docs: {
		...((d = e.parameters) == null ? void 0 : d.docs),
		source: {
			originalSource: `{
  args: {
    status: 'paid'
  }
}`,
			...((m = (p = e.parameters) == null ? void 0 : p.docs) == null ? void 0 : m.source),
		},
	},
};
var g, v, f;
t.parameters = {
	...t.parameters,
	docs: {
		...((g = t.parameters) == null ? void 0 : g.docs),
		source: {
			originalSource: `{
  args: {
    status: 'open'
  }
}`,
			...((f = (v = t.parameters) == null ? void 0 : v.docs) == null ? void 0 : f.source),
		},
	},
};
var x, j, b;
r.parameters = {
	...r.parameters,
	docs: {
		...((x = r.parameters) == null ? void 0 : x.docs),
		source: {
			originalSource: `{
  args: {
    status: 'past_due'
  }
}`,
			...((b = (j = r.parameters) == null ? void 0 : j.docs) == null ? void 0 : b.source),
		},
	},
};
var S, B, I;
o.parameters = {
	...o.parameters,
	docs: {
		...((S = o.parameters) == null ? void 0 : S.docs),
		source: {
			originalSource: `{
  args: {
    status: 'draft'
  }
}`,
			...((I = (B = o.parameters) == null ? void 0 : B.docs) == null ? void 0 : I.source),
		},
	},
};
var _, C, z;
n.parameters = {
	...n.parameters,
	docs: {
		...((_ = n.parameters) == null ? void 0 : _.docs),
		source: {
			originalSource: `{
  render: () => <div className="flex flex-wrap gap-4">
      <InvoiceStatusBadge status="draft" />
      <InvoiceStatusBadge status="open" />
      <InvoiceStatusBadge status="paid" />
      <InvoiceStatusBadge status="past_due" />
      <InvoiceStatusBadge status="uncollectible" />
      <InvoiceStatusBadge status="void" />
      <InvoiceStatusBadge status="processing" />
    </div>
}`,
			...((z = (C = n.parameters) == null ? void 0 : C.docs) == null ? void 0 : z.source),
		},
	},
};
const U = ['Paid', 'Open', 'PastDue', 'Draft', 'AllStatuses'];
export { n as AllStatuses, o as Draft, t as Open, e as Paid, r as PastDue, U as __namedExportsOrder, R as default };
