import { j as e } from './jsx-runtime-Cf8x2fCZ.js';
import { r as u } from './index-t5q4d8OJ.js';
import { u as x, e as y, f as g, C as v, g as j } from './SortDropdown-kGmZTU_J.js';
import { z as b } from './MetricCard-BUcjj5ur.js';
import './Button-Cf0ayti6.js';
import './Input-Z5ELXsou.js';
import './Chip-D5dGlNj6.js';
import './Select-CLFKPqir.js';
import './Spinner-BfFjocAz.js';
import './index-Ds86VQ4X.js';
import { f as a } from './SidebarNav-DSU81IN1.js';
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
import './index-BNNQlCw5.js';
import './index-BEq13kdC.js';
import './index-BLHw34Di.js';
import './index-vJvtiM9z.js';
import './index-MpCb0xCw.js';
const N = ({ config: i, analyticsParams: l, label: h }) => {
	const { config: f } = x(),
		m = !!f.theme,
		{ data: t, isLoading: p, isError: n } = y({ queryKey: ['portal-analytics', l], queryFn: () => g.getAnalytics(l) });
	u.useEffect(() => {
		n && b.error('Failed to load usage analytics');
	}, [n]);
	const d = u.useMemo(() => {
		if (!(t != null && t.items)) return [];
		const { feature_filter_mode: s, feature_ids: r } = i;
		return s === 'include_list' && r != null && r.length
			? t.items.filter((o) => r.includes(o.feature_id))
			: s === 'exclude_list' && r != null && r.length
				? t.items.filter((o) => !r.includes(o.feature_id))
				: t.items;
	}, [t, i]);
	if (!p && d.length === 0) return null;
	const c = t ? { ...t, items: d } : void 0;
	return e.jsxs(v, {
		className: 'rounded-xl overflow-hidden',
		style: { backgroundColor: 'var(--portal-surface, white)', border: '1px solid var(--portal-border, #E9E9E9)' },
		children: [
			e.jsx('div', {
				className: 'p-6',
				style: { borderBottom: '1px solid var(--portal-border, #E9E9E9)' },
				children: e.jsx('h3', {
					className: 'text-base font-medium',
					style: { color: 'var(--portal-text-primary, #09090b)' },
					children: h || 'Usage Trend',
				}),
			}),
			e.jsx('div', {
				className: 'p-6',
				children: e.jsx('div', {
					className: 'portal-chart-wrapper',
					style: m
						? { '--card': 'var(--portal-surface)', '--card-foreground': 'var(--portal-text-primary)', '--border': 'var(--portal-border)' }
						: void 0,
					children: p
						? e.jsxs('div', {
								className: 'w-full h-64 flex flex-col gap-3 px-1',
								children: [
									e.jsxs('div', {
										className: 'flex flex-col justify-between h-52 relative',
										children: [
											[...Array(5)].map((s, r) =>
												e.jsxs(
													'div',
													{
														className: 'flex items-center gap-3 w-full',
														children: [
															e.jsx(a, { className: 'h-3 w-8 shrink-0', style: { opacity: 0.5 } }),
															e.jsx('div', {
																className: 'flex-1 h-px',
																style: { backgroundColor: 'var(--portal-border, #e5e7eb)', opacity: 0.4 },
															}),
														],
													},
													r,
												),
											),
											e.jsx('div', {
												className: 'absolute bottom-0 left-12 right-0 flex items-end gap-3 h-40',
												children: [35, 65, 45, 80, 55, 90, 40, 70, 50, 60].map((s, r) =>
													e.jsx(a, { className: 'flex-1 rounded-sm', style: { height: `${s}%`, opacity: 0.35 + r * 0.03 } }, r),
												),
											}),
										],
									}),
									e.jsx('div', {
										className: 'flex justify-between pl-12',
										children: ['', '', '', ''].map((s, r) => e.jsx(a, { className: 'h-3 w-12', style: { opacity: 0.4 } }, r)),
									}),
									e.jsxs('div', {
										className: 'flex items-center gap-2 justify-center',
										children: [
											e.jsx(a, { className: 'h-2 w-2 rounded-full' }),
											e.jsx(a, { className: 'h-3 w-16', style: { opacity: 0.5 } }),
										],
									}),
								],
							})
						: c
							? e.jsx(j, {
									data: c,
									primaryColor: (m && getComputedStyle(document.documentElement).getPropertyValue('--portal-primary').trim()) || void 0,
								})
							: null,
				}),
			}),
		],
	});
};
N.__docgenInfo = {
	description: `Renders ONLY the usage chart (line chart).
The breakdown table is a separate widget (UsageBreakdownWidget).
Both share the same React Query cache entry — one API call serves both.
Returns null if no data — no empty state container shown.`,
	methods: [],
	displayName: 'UsageGraphWidget',
	props: {
		config: { required: !0, tsType: { name: 'UsageGraphConfig' }, description: '' },
		analyticsParams: {
			required: !0,
			tsType: { name: 'DashboardAnalyticsRequest' },
			description: 'Resolved by SectionContent (shared date filter — same cache key as UsageBreakdownWidget)',
		},
		label: { required: !1, tsType: { name: 'string' }, description: '' },
	},
};
export { N as default };
