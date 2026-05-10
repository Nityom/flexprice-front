import { j as r } from './jsx-runtime-Cf8x2fCZ.js';
import { r as N } from './index-t5q4d8OJ.js';
import { u as K, e as M, f as A } from './SortDropdown-kGmZTU_J.js';
import { z as E, M as i } from './MetricCard-BUcjj5ur.js';
import { f as F } from './SidebarNav-DSU81IN1.js';
import './Button-Cf0ayti6.js';
import './Input-Z5ELXsou.js';
import './Chip-D5dGlNj6.js';
import './Select-CLFKPqir.js';
import './Spinner-BfFjocAz.js';
import './index-Ds86VQ4X.js';
import './badge-h_lvg-2o.js';
import './popover-DCybn2PX.js';
import './select-1EArqANp.js';
import './tooltip-CkQW4Nnp.js';
import './Tooltip-DuiAFdzG.js';
import './index-yBjzXJbu.js';
import './utils-BLSKlp9E.js';
import './createLucideIcon-DYb0enIN.js';
import './circle-CnA5Nx1k.js';
import './circle-x-6f_XFf-A.js';
import './x-BDoriEd4.js';
import './calendar-BmUthEcD.js';
import './index-1evVQkiP.js';
import './mail-BlZkHQOZ.js';
import './tiny-invariant-CopsF_GD.js';
import './file-text-BxZ8c0aT.js';
import './info-DvlYBrLq.js';
import './iframe-HHtQTssW.js';
import './PricingTierTable-D019JJFH.js';
import './VirtualizedTable-PBrJeUrY.js';
import './index-vJvtiM9z.js';
import './index-BEq13kdC.js';
import './index-MpCb0xCw.js';
import './index-BNNQlCw5.js';
import './index-BLHw34Di.js';
const I = { 'revenue-per-minute': 'CPM' },
	O = { show_custom_metrics: !0, show_revenue_metric: !0, show_cost_metrics: !0 },
	Y = ({ analyticsParams: e, config: a }) => {
		const L = { ...O, ...a },
			{ show_custom_metrics: c, show_revenue_metric: l, show_cost_metrics: m } = L,
			{ config: R } = K(),
			s = !!R.theme,
			{ data: u, isLoading: q, isError: _ } = M({ queryKey: ['portal-analytics', e], queryFn: () => A.getAnalytics(e), enabled: c }),
			{
				data: t,
				isLoading: T,
				isError: j,
			} = M({
				queryKey: ['portal-cost-analytics', e.start_time, e.end_time],
				queryFn: () => A.getCostAnalytics({ start_time: e.start_time, end_time: e.end_time, expand: ['meter', 'price'] }),
				enabled: l || m,
			});
		(N.useEffect(() => {
			_ && E.error('Failed to load analytics');
		}, [_]),
			N.useEffect(() => {
				j && E.error('Failed to load cost analytics');
			}, [j]));
		const g = (u == null ? void 0 : u.custom_analytics) ?? [];
		if ((c && q) || ((l || m) && T)) {
			const o = l ? 1 : 0,
				d = m ? 3 : 0,
				y = c ? 2 : 0,
				x = o + d + y || 4;
			return r.jsx('div', {
				className: 'grid grid-cols-2 md:grid-cols-4 gap-3',
				children: Array.from({ length: x }).map((G, z) =>
					r.jsxs(
						'div',
						{
							className: 'rounded-md p-[25px] space-y-3',
							style: { backgroundColor: 'var(--portal-surface, white)', border: '1px solid var(--portal-border, #E5E7EB)' },
							children: [r.jsx(F, { className: 'h-4 w-24' }), r.jsx(F, { className: 'h-7 w-32' })],
						},
						z,
					),
				),
			});
		}
		const h = l && t,
			C = m && t,
			f = c && g.length > 0;
		if (!h && !C && !f) return null;
		const p = (t == null ? void 0 : t.currency) ?? 'USD',
			S = parseFloat((t == null ? void 0 : t.total_revenue) ?? '0'),
			k = parseFloat((t == null ? void 0 : t.total_cost) ?? '0'),
			w = parseFloat((t == null ? void 0 : t.margin) ?? '0'),
			b = parseFloat((t == null ? void 0 : t.margin_percent) ?? '0'),
			P = h ? 1 : 0,
			U = C ? 3 : 0,
			W = f ? g.length : 0,
			v = P + U + W;
		return r.jsxs('div', {
			className: 'grid gap-3',
			style: { gridTemplateColumns: v === 1 ? 'auto' : `repeat(${v}, 1fr)`, width: v === 1 ? '25%' : '100%' },
			children: [
				h && r.jsx(n, { hasTheme: s, children: r.jsx(i, { title: 'Revenue', value: S, currency: p }) }),
				C &&
					r.jsxs(r.Fragment, {
						children: [
							r.jsx(n, { hasTheme: s, children: r.jsx(i, { title: 'Cost', value: k, currency: p }) }),
							r.jsx(n, {
								hasTheme: s,
								children: r.jsx(i, { title: 'Margin', value: w, currency: p, showChangeIndicator: !0, isNegative: w < 0 }),
							}),
							r.jsx(n, {
								hasTheme: s,
								children: r.jsx(i, { title: 'Margin %', value: b, isPercent: !0, showChangeIndicator: !0, isNegative: b < 0 }),
							}),
						],
					}),
				f &&
					g.map((o) => {
						const d = parseFloat(o.value),
							y = I[o.id] ?? I[o.name] ?? o.name,
							x = o.id === 'revenue-per-minute';
						return r.jsx(n, { hasTheme: s, children: r.jsx(i, { title: y, value: isNaN(d) ? 0 : d, currency: x ? p : void 0 }) }, o.id);
					}),
			],
		});
	},
	n = ({ hasTheme: e, children: a }) =>
		e
			? r.jsxs('div', {
					className: 'rounded-md overflow-hidden',
					style: { backgroundColor: 'var(--portal-surface)', border: '1px solid var(--portal-border)' },
					children: [
						r.jsx('style', {
							children: `
				.portal-metric-inner .bg-white { background-color: transparent !important; }
				.portal-metric-inner .border { border-color: transparent !important; }
				.portal-metric-inner p:first-child { color: var(--portal-text-secondary) !important; }
				.portal-metric-inner p:last-child { color: var(--portal-text-primary) !important; }
			`,
						}),
						r.jsx('div', { className: 'portal-metric-inner', children: a }),
					],
				})
			: r.jsx(r.Fragment, { children: a });
Y.__docgenInfo = {
	description: `Renders three optional card groups in one flat auto-fill grid row:
  1. Revenue metric     — Revenue from cost analytics API
  2. Cost metrics       — Cost / Margin / Margin % from cost analytics API
  3. Custom metrics     — from revenue analytics custom_analytics[]

Uses the same MetricCard molecule as the admin CostAnalytics page.
auto-fill grid ensures all cards sit on one line at full width.`,
	methods: [],
	displayName: 'MetricCardsWidget',
	props: {
		analyticsParams: { required: !0, tsType: { name: 'DashboardAnalyticsRequest' }, description: '' },
		config: {
			required: !1,
			tsType: { name: 'MetricCardsConfig' },
			description: 'Controls which sub-groups are shown. Defaults to both true if absent.',
		},
	},
};
export { Y as default };
