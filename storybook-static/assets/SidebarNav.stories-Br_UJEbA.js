import { j as e } from './jsx-runtime-Cf8x2fCZ.js';
import { H as g, L as b, a as v, C as f, b as x, P as h, S, c as j, M as m, d, e as u } from './SidebarNav-DSU81IN1.js';
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
const X = {
		title: 'Organisms/SidebarNav',
		component: j,
		decorators: [
			(s) =>
				e.jsx(m, {
					initialEntries: ['/dashboard'],
					children: e.jsx(d, {
						children: e.jsx('div', { className: 'flex h-screen w-full', children: e.jsx(u, { children: e.jsx(s, {}) }) }),
					}),
				}),
		],
		parameters: { layout: 'fullscreen' },
		tags: ['autodocs'],
	},
	p = [
		{ title: 'Home', url: '/dashboard', icon: g },
		{
			title: 'Product Catalog',
			url: '/catalog',
			icon: b,
			items: [
				{ title: 'Features', url: '/catalog/features' },
				{ title: 'Plans', url: '/catalog/plans' },
				{ title: 'Coupons', url: '/catalog/coupons' },
			],
		},
		{
			title: 'Billing',
			url: '/billing',
			icon: v,
			items: [
				{ title: 'Customers', url: '/billing/customers' },
				{ title: 'Subscriptions', url: '/billing/subscriptions' },
				{ title: 'Invoices', url: '/billing/invoices' },
			],
		},
		{ title: 'Revenue', url: '/revenue', icon: f },
		{
			title: 'Developers',
			url: '/dev',
			icon: x,
			items: [
				{ title: 'Events', url: '/dev/events' },
				{ title: 'API Keys', url: '/dev/api-keys' },
			],
		},
		{ title: 'Integrations', url: '/integrations', icon: h },
		{ title: 'Settings', url: '/settings', icon: S },
	],
	r = { args: { items: p } },
	t = {
		decorators: [
			(s) =>
				e.jsx(m, {
					initialEntries: ['/dashboard'],
					children: e.jsx(d, {
						defaultOpen: !1,
						children: e.jsx('div', {
							className: 'flex h-screen w-full',
							children: e.jsx(u, { collapsible: 'icon', children: e.jsx(s, {}) }),
						}),
					}),
				}),
		],
		args: { items: p },
	};
var i, o, a;
r.parameters = {
	...r.parameters,
	docs: {
		...((i = r.parameters) == null ? void 0 : i.docs),
		source: {
			originalSource: `{
  args: {
    items: mockItems
  }
}`,
			...((a = (o = r.parameters) == null ? void 0 : o.docs) == null ? void 0 : a.source),
		},
	},
};
var l, n, c;
t.parameters = {
	...t.parameters,
	docs: {
		...((l = t.parameters) == null ? void 0 : l.docs),
		source: {
			originalSource: `{
  decorators: [Story => <MemoryRouter initialEntries={['/dashboard']}>
        <SidebarProvider defaultOpen={false}>
          <div className="flex h-screen w-full">
            <Sidebar collapsible="icon">
              <Story />
            </Sidebar>
          </div>
        </SidebarProvider>
      </MemoryRouter>],
  args: {
    items: mockItems
  }
}`,
			...((c = (n = t.parameters) == null ? void 0 : n.docs) == null ? void 0 : c.source),
		},
	},
};
const q = ['Default', 'Collapsed'];
export { t as Collapsed, r as Default, q as __namedExportsOrder, X as default };
