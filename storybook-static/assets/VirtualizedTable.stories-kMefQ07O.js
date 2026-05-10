import { j as l } from './jsx-runtime-Cf8x2fCZ.js';
import { V as p } from './VirtualizedTable-PBrJeUrY.js';
import { B as h } from './badge-h_lvg-2o.js';
import './index-yBjzXJbu.js';
import './index-t5q4d8OJ.js';
import './index-Ds86VQ4X.js';
import './index-BLHw34Di.js';
import './utils-BLSKlp9E.js';
import './index-1evVQkiP.js';
const j = { title: 'Organisms/VirtualizedTable', component: p, parameters: { layout: 'fullscreen' }, tags: ['autodocs'] },
	i = (e) =>
		Array.from({ length: e }, (g, a) => ({
			id: `INV-${1e3 + a}`,
			name: `Customer ${a + 1}`,
			email: `customer${a + 1}@example.com`,
			status: a % 3 === 0 ? 'Paid' : a % 3 === 1 ? 'Pending' : 'Overdue',
			amount: `$${(Math.random() * 1e3).toFixed(2)}`,
		})),
	u = [
		{ header: 'Invoice ID', accessor: 'id', width: 120 },
		{ header: 'Customer Name', accessor: 'name' },
		{ header: 'Email', accessor: 'email' },
		{
			header: 'Status',
			accessor: 'status',
			width: 120,
			cell: (e) => l.jsx(h, { variant: e === 'Paid' ? 'success' : e === 'Pending' ? 'warning' : 'destructive', children: e }),
		},
		{ header: 'Amount', accessor: 'amount', width: 100 },
	],
	r = { args: { data: i(1e4), columns: u, height: 600 } },
	t = { args: { data: i(10), columns: u, height: 300 } };
var s, o, n;
r.parameters = {
	...r.parameters,
	docs: {
		...((s = r.parameters) == null ? void 0 : s.docs),
		source: {
			originalSource: `{
  args: {
    data: generateData(10000),
    columns: columns,
    height: 600
  }
}`,
			...((n = (o = r.parameters) == null ? void 0 : o.docs) == null ? void 0 : n.source),
		},
	},
};
var m, c, d;
t.parameters = {
	...t.parameters,
	docs: {
		...((m = t.parameters) == null ? void 0 : m.docs),
		source: {
			originalSource: `{
  args: {
    data: generateData(10),
    columns: columns,
    height: 300
  }
}`,
			...((d = (c = t.parameters) == null ? void 0 : c.docs) == null ? void 0 : d.source),
		},
	},
};
const E = ['TenThousandRows', 'SmallDataset'];
export { t as SmallDataset, r as TenThousandRows, E as __namedExportsOrder, j as default };
