import { j as t } from './jsx-runtime-Cf8x2fCZ.js';
import './Button-Cf0ayti6.js';
import { F as u, C as x, d as g } from './SortDropdown-kGmZTU_J.js';
import { f as n } from './Input-Z5ELXsou.js';
import './Chip-D5dGlNj6.js';
import './Select-CLFKPqir.js';
import './Spinner-BfFjocAz.js';
import './index-t5q4d8OJ.js';
import './index-Ds86VQ4X.js';
import './SidebarNav-DSU81IN1.js';
import './badge-h_lvg-2o.js';
import './popover-DCybn2PX.js';
import './select-1EArqANp.js';
import './tooltip-CkQW4Nnp.js';
import './Tooltip-DuiAFdzG.js';
import './index-yBjzXJbu.js';
import './index-BNNQlCw5.js';
import './index-BEq13kdC.js';
import './index-1evVQkiP.js';
import './utils-BLSKlp9E.js';
import './createLucideIcon-DYb0enIN.js';
import './circle-CnA5Nx1k.js';
import './circle-x-6f_XFf-A.js';
import './x-BDoriEd4.js';
import './MetricCard-BUcjj5ur.js';
import './calendar-BmUthEcD.js';
import './mail-BlZkHQOZ.js';
import './tiny-invariant-CopsF_GD.js';
import './file-text-BxZ8c0aT.js';
import './info-DvlYBrLq.js';
import './iframe-HHtQTssW.js';
import './PricingTierTable-D019JJFH.js';
import './VirtualizedTable-PBrJeUrY.js';
import './index-BLHw34Di.js';
import './index-vJvtiM9z.js';
import './index-MpCb0xCw.js';
const f = ({ usageData: i, label: d }) => {
	const a =
		(i == null
			? void 0
			: i.filter((r) => {
					var o;
					return ((o = r.feature) == null ? void 0 : o.type) === u.METERED;
				})) || [];
	return a.length === 0
		? null
		: t.jsxs(x, {
				className: 'rounded-xl overflow-hidden',
				style: { backgroundColor: 'var(--portal-surface, white)', border: '1px solid var(--portal-border, #E9E9E9)' },
				children: [
					t.jsx('div', {
						className: 'p-6',
						style: { borderBottom: '1px solid var(--portal-border, #E9E9E9)' },
						children: t.jsx('h3', {
							className: 'text-base font-medium',
							style: { color: 'var(--portal-text-primary, #09090b)' },
							children: d || 'Usage Quota',
						}),
					}),
					t.jsx('div', {
						className: 'p-6 space-y-4',
						children: a.map((r, o) => {
							var p, l;
							const s = Number(r.current_usage || 0),
								e = r.is_unlimited ? null : r.total_limit ? Number(r.total_limit) : null,
								c = e ? Math.min(Math.ceil((s / e) * 100), 100) : 0,
								m = e && s > e;
							return t.jsxs(
								'div',
								{
									className: 'space-y-2',
									children: [
										t.jsxs('div', {
											className: 'flex items-center justify-between',
											children: [
												t.jsx('span', {
													className: 'text-sm',
													style: { color: 'var(--portal-text-primary, #09090b)' },
													children: ((p = r.feature) == null ? void 0 : p.name) || 'Unknown Feature',
												}),
												t.jsxs('span', {
													className: 'text-sm',
													style: { color: 'var(--portal-text-secondary, #71717a)' },
													children: [n(s.toString()), e ? ` / ${n(e.toString())}` : ' / Unlimited'],
												}),
											],
										}),
										t.jsx(g, {
											value: r.is_unlimited ? 0 : c,
											className: 'h-2',
											indicatorColor: m ? 'bg-gradient-to-r from-red-600 to-red-400' : 'bg-[var(--portal-primary,#6167d9)]',
											backgroundColor: m ? 'bg-red-50' : 'bg-zinc-100',
										}),
									],
								},
								((l = r.feature) == null ? void 0 : l.id) || o,
							);
						}),
					}),
				],
			});
};
f.__docgenInfo = {
	description: '',
	methods: [],
	displayName: 'CurrentUsageWidget',
	props: {
		usageData: { required: !0, tsType: { name: 'Array', elements: [{ name: 'CustomerUsage' }], raw: 'CustomerUsage[]' }, description: '' },
		label: { required: !1, tsType: { name: 'string' }, description: '' },
	},
};
export { f as default };
