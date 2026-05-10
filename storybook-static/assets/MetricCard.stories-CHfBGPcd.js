import { j as e } from './jsx-runtime-Cf8x2fCZ.js';
import { M as s } from './MetricCard-BUcjj5ur.js';
import './index-yBjzXJbu.js';
import './index-t5q4d8OJ.js';
import './Input-Z5ELXsou.js';
import './utils-BLSKlp9E.js';
import './createLucideIcon-DYb0enIN.js';
const R = {
		title: 'Molecules/MetricCard',
		component: s,
		parameters: { layout: 'centered' },
		tags: ['autodocs'],
		argTypes: {
			currency: { control: 'select', options: ['USD', 'INR', 'EUR', 'GBP'], description: 'Currency code for formatting' },
			isNegative: { control: 'boolean', description: 'Whether the change is negative (red arrow down)' },
			showChangeIndicator: { control: 'boolean', description: 'Whether to show the trending indicator' },
		},
		args: { title: 'Total Revenue', value: 12450.5, currency: 'USD', showChangeIndicator: !0, isNegative: !1 },
	},
	r = { args: { title: 'Total Revenue', value: 12450.5, currency: 'USD' } },
	t = { args: { title: 'Active Subscriptions', value: 142, currency: void 0, showChangeIndicator: !0, isNegative: !0 } },
	a = { args: { title: 'Churn Rate', value: 2.4, isPercent: !0, currency: void 0, showChangeIndicator: !0, isNegative: !0 } },
	n = {
		render: () =>
			e.jsxs('div', {
				className: 'grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl',
				children: [
					e.jsx(s, { title: 'Revenue', value: 45231.89, currency: 'USD', showChangeIndicator: !0 }),
					e.jsx(s, { title: 'Customers', value: 2350, showChangeIndicator: !0 }),
					e.jsx(s, { title: 'Active Subscriptions', value: 1203, showChangeIndicator: !0, isNegative: !0 }),
				],
			}),
	};
var o, i, c;
r.parameters = {
	...r.parameters,
	docs: {
		...((o = r.parameters) == null ? void 0 : o.docs),
		source: {
			originalSource: `{
  args: {
    title: 'Total Revenue',
    value: 12450.50,
    currency: 'USD'
  }
}`,
			...((c = (i = r.parameters) == null ? void 0 : i.docs) == null ? void 0 : c.source),
		},
	},
};
var u, d, l;
t.parameters = {
	...t.parameters,
	docs: {
		...((u = t.parameters) == null ? void 0 : u.docs),
		source: {
			originalSource: `{
  args: {
    title: 'Active Subscriptions',
    value: 142,
    currency: undefined,
    showChangeIndicator: true,
    isNegative: true
  }
}`,
			...((l = (d = t.parameters) == null ? void 0 : d.docs) == null ? void 0 : l.source),
		},
	},
};
var g, m, p;
a.parameters = {
	...a.parameters,
	docs: {
		...((g = a.parameters) == null ? void 0 : g.docs),
		source: {
			originalSource: `{
  args: {
    title: 'Churn Rate',
    value: 2.4,
    isPercent: true,
    currency: undefined,
    showChangeIndicator: true,
    isNegative: true
  }
}`,
			...((p = (m = a.parameters) == null ? void 0 : m.docs) == null ? void 0 : p.source),
		},
	},
};
var v, h, C;
n.parameters = {
	...n.parameters,
	docs: {
		...((v = n.parameters) == null ? void 0 : v.docs),
		source: {
			originalSource: `{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
      <MetricCard title="Revenue" value={45231.89} currency="USD" showChangeIndicator />
      <MetricCard title="Customers" value={2350} showChangeIndicator />
      <MetricCard title="Active Subscriptions" value={1203} showChangeIndicator isNegative />
    </div>
}`,
			...((C = (h = n.parameters) == null ? void 0 : h.docs) == null ? void 0 : C.source),
		},
	},
};
const D = ['Default', 'NegativeChange', 'Percentage', 'Grid'];
export { r as Default, n as Grid, t as NegativeChange, a as Percentage, D as __namedExportsOrder, R as default };
