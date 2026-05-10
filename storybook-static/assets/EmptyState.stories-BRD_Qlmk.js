import { j as t } from './jsx-runtime-Cf8x2fCZ.js';
import { w as h, x as f } from './SortDropdown-kGmZTU_J.js';
import { c as g } from './createLucideIcon-DYb0enIN.js';
import { S as N } from './x-BDoriEd4.js';
import './index-yBjzXJbu.js';
import './popover-DCybn2PX.js';
import './index-t5q4d8OJ.js';
import './utils-BLSKlp9E.js';
import './index-BNNQlCw5.js';
import './index-BEq13kdC.js';
import './index-1evVQkiP.js';
import './select-1EArqANp.js';
import './index-Ds86VQ4X.js';
import './index-BLHw34Di.js';
import './index-vJvtiM9z.js';
import './index-MpCb0xCw.js';
import './SidebarNav-DSU81IN1.js';
import './badge-h_lvg-2o.js';
import './circle-CnA5Nx1k.js';
import './circle-x-6f_XFf-A.js';
import './tooltip-CkQW4Nnp.js';
import './Button-Cf0ayti6.js';
import './Input-Z5ELXsou.js';
import './Chip-D5dGlNj6.js';
import './Select-CLFKPqir.js';
import './Spinner-BfFjocAz.js';
import './MetricCard-BUcjj5ur.js';
import './calendar-BmUthEcD.js';
import './Tooltip-DuiAFdzG.js';
import './mail-BlZkHQOZ.js';
import './tiny-invariant-CopsF_GD.js';
import './file-text-BxZ8c0aT.js';
import './info-DvlYBrLq.js';
import './iframe-HHtQTssW.js';
import './PricingTierTable-D019JJFH.js';
import './VirtualizedTable-PBrJeUrY.js';
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v = g('FileX', [
		['path', { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', key: '1rqfz7' }],
		['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
		['path', { d: 'm14.5 12.5-5 5', key: 'b62r18' }],
		['path', { d: 'm9.5 12.5 5 5', key: '1rk7el' }],
	]),
	ot = {
		title: 'Organisms/EmptyState',
		component: h,
		parameters: { layout: 'padded' },
		tags: ['autodocs'],
		argTypes: { variant: { control: 'select', options: ['default', 'compact'] }, onAction: { action: 'clicked' } },
	},
	e = {
		args: {
			title: 'No invoices found',
			description: "You haven't created any invoices yet. Start by creating your first invoice to bill your customers.",
			icon: t.jsx(v, { size: 48 }),
			actionLabel: 'Create Invoice',
		},
	},
	r = {
		args: {
			title: 'No results found',
			description: "We couldn't find anything matching your search criteria. Try using different filters or keywords.",
			icon: t.jsx(N, { size: 48 }),
			variant: 'compact',
			actionLabel: 'Clear filters',
		},
	},
	a = {
		args: {
			title: 'Database is empty',
			description: 'Connect your data source to start analyzing your usage metrics and billing performance.',
			icon: t.jsx(f, { size: 48 }),
			actionLabel: 'Connect Source',
		},
	},
	o = {
		render: () =>
			t.jsx('div', {
				className: 'border rounded-lg overflow-hidden',
				children: t.jsxs('table', {
					className: 'w-full',
					children: [
						t.jsx('thead', {
							className: 'bg-muted/50 border-b',
							children: t.jsxs('tr', {
								children: [
									t.jsx('th', { className: 'px-4 py-2 text-left text-xs font-medium uppercase tracking-wider', children: 'Name' }),
									t.jsx('th', { className: 'px-4 py-2 text-left text-xs font-medium uppercase tracking-wider', children: 'Status' }),
									t.jsx('th', { className: 'px-4 py-2 text-left text-xs font-medium uppercase tracking-wider', children: 'Amount' }),
								],
							}),
						}),
						t.jsx('tbody', {
							children: t.jsx('tr', {
								children: t.jsx('td', {
									colSpan: 3,
									className: 'p-0',
									children: t.jsx(h, {
										title: 'No items to display',
										description: 'This table is currently empty.',
										variant: 'compact',
										className: 'border-none rounded-none bg-transparent',
									}),
								}),
							}),
						}),
					],
				}),
			}),
	};
var s, i, n;
e.parameters = {
	...e.parameters,
	docs: {
		...((s = e.parameters) == null ? void 0 : s.docs),
		source: {
			originalSource: `{
  args: {
    title: 'No invoices found',
    description: 'You haven\\'t created any invoices yet. Start by creating your first invoice to bill your customers.',
    icon: <FileX size={48} />,
    actionLabel: 'Create Invoice'
  }
}`,
			...((n = (i = e.parameters) == null ? void 0 : i.docs) == null ? void 0 : n.source),
		},
	},
};
var c, m, p;
r.parameters = {
	...r.parameters,
	docs: {
		...((c = r.parameters) == null ? void 0 : c.docs),
		source: {
			originalSource: `{
  args: {
    title: 'No results found',
    description: 'We couldn\\'t find anything matching your search criteria. Try using different filters or keywords.',
    icon: <Search size={48} />,
    variant: 'compact',
    actionLabel: 'Clear filters'
  }
}`,
			...((p = (m = r.parameters) == null ? void 0 : m.docs) == null ? void 0 : p.source),
		},
	},
};
var d, l, u;
a.parameters = {
	...a.parameters,
	docs: {
		...((d = a.parameters) == null ? void 0 : d.docs),
		source: {
			originalSource: `{
  args: {
    title: 'Database is empty',
    description: 'Connect your data source to start analyzing your usage metrics and billing performance.',
    icon: <Database size={48} />,
    actionLabel: 'Connect Source'
  }
}`,
			...((u = (l = a.parameters) == null ? void 0 : l.docs) == null ? void 0 : u.source),
		},
	},
};
var y, x, b;
o.parameters = {
	...o.parameters,
	docs: {
		...((y = o.parameters) == null ? void 0 : y.docs),
		source: {
			originalSource: `{
  render: () => <div className="border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-muted/50 border-b">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Name</th>
            <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Status</th>
            <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3} className="p-0">
              <EmptyState title="No items to display" description="This table is currently empty." variant="compact" className="border-none rounded-none bg-transparent" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
}`,
			...((b = (x = o.parameters) == null ? void 0 : x.docs) == null ? void 0 : b.source),
		},
	},
};
const st = ['NoInvoices', 'NoResults', 'EmptyDatabase', 'TableEmptyState'];
export { a as EmptyDatabase, e as NoInvoices, r as NoResults, o as TableEmptyState, st as __namedExportsOrder, ot as default };
