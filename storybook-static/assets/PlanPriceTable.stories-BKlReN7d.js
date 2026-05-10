import { j as r } from './jsx-runtime-Cf8x2fCZ.js';
import { M as m } from './SidebarNav-DSU81IN1.js';
import { E as p, P as s, Q as n, b as l } from './SortDropdown-kGmZTU_J.js';
import './index-yBjzXJbu.js';
import './createLucideIcon-DYb0enIN.js';
import './index-t5q4d8OJ.js';
import './index-vJvtiM9z.js';
import './index-BEq13kdC.js';
import './index-Ds86VQ4X.js';
import './index-BLHw34Di.js';
import './select-1EArqANp.js';
import './utils-BLSKlp9E.js';
import './index-MpCb0xCw.js';
import './badge-h_lvg-2o.js';
import './index-1evVQkiP.js';
import './index-BNNQlCw5.js';
import './popover-DCybn2PX.js';
import './x-BDoriEd4.js';
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
const c = new l({ defaultOptions: { queries: { retry: !1 } } }),
	d = {
		id: 'plan_123',
		name: 'Pro Plan',
		description: 'Advanced features for scaling businesses',
		status: p.PUBLISHED,
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
	},
	V = {
		title: 'Organisms/PlanPriceTable',
		component: s,
		decorators: [
			(a) =>
				r.jsx(m, {
					children: r.jsx(n, { client: c, children: r.jsx('div', { className: 'w-full max-w-5xl p-6', children: r.jsx(a, {}) }) }),
				}),
		],
		parameters: { layout: 'fullscreen' },
		tags: ['autodocs'],
	},
	t = { args: { plan: d } };
var o, e, i;
t.parameters = {
	...t.parameters,
	docs: {
		...((o = t.parameters) == null ? void 0 : o.docs),
		source: {
			originalSource: `{
  args: {
    plan: mockPlan
  }
}`,
			...((i = (e = t.parameters) == null ? void 0 : e.docs) == null ? void 0 : i.source),
		},
	},
};
const W = ['Default'];
export { t as Default, W as __namedExportsOrder, V as default };
