import { j as r } from './jsx-runtime-Cf8x2fCZ.js';
import './Button-Cf0ayti6.js';
import { C as p, c as d } from './SortDropdown-kGmZTU_J.js';
import './Input-Z5ELXsou.js';
import { C as c } from './Chip-D5dGlNj6.js';
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
import { S as e, f as i } from './MetricCard-BUcjj5ur.js';
import { C as x } from './calendar-BmUthEcD.js';
import { C as m } from './file-text-BxZ8c0aT.js';
import './index-yBjzXJbu.js';
import './index-BNNQlCw5.js';
import './index-BEq13kdC.js';
import './index-1evVQkiP.js';
import './utils-BLSKlp9E.js';
import './createLucideIcon-DYb0enIN.js';
import './circle-CnA5Nx1k.js';
import './circle-x-6f_XFf-A.js';
import './x-BDoriEd4.js';
import './mail-BlZkHQOZ.js';
import './tiny-invariant-CopsF_GD.js';
import './info-DvlYBrLq.js';
import './iframe-HHtQTssW.js';
import './PricingTierTable-D019JJFH.js';
import './VirtualizedTable-PBrJeUrY.js';
import './index-BLHw34Di.js';
import './index-vJvtiM9z.js';
import './index-MpCb0xCw.js';
const f = (a) => {
		const s = {
			[e.ACTIVE]: { label: 'Active', variant: 'success' },
			[e.TRIALING]: { label: 'Trialing', variant: 'info' },
			[e.CANCELLED]: { label: 'Cancelled', variant: 'failed' },
			[e.INCOMPLETE]: { label: 'Incomplete', variant: 'warning' },
			[e.DRAFT]: { label: 'Draft', variant: 'default' },
		}[a] || { label: a, variant: 'default' };
		return r.jsx(c, { label: s.label, variant: s.variant });
	},
	v = ({ subscriptions: a, label: o }) => {
		const s = (a == null ? void 0 : a.filter((t) => t.subscription_status === e.ACTIVE || t.subscription_status === e.TRIALING)) || [];
		return s.length === 0
			? r.jsx(p, {
					className: 'rounded-xl p-6',
					style: { backgroundColor: 'var(--portal-surface, white)', border: '1px solid var(--portal-border, #E9E9E9)' },
					children: r.jsx(d, { title: 'No active subscriptions', description: 'You do not have any active subscriptions at the moment' }),
				})
			: r.jsxs(p, {
					className: 'rounded-xl overflow-hidden',
					style: { backgroundColor: 'var(--portal-surface, white)', border: '1px solid var(--portal-border, #E9E9E9)' },
					children: [
						r.jsx('div', {
							className: 'p-6',
							style: { borderBottom: '1px solid var(--portal-border, #E9E9E9)' },
							children: r.jsx('h3', {
								className: 'text-base font-medium',
								style: { color: 'var(--portal-text-primary, #09090b)' },
								children: o || 'Subscriptions',
							}),
						}),
						r.jsx('div', {
							className: 'p-6 space-y-4',
							children: s.map((t) => {
								var l, n;
								return r.jsxs(
									'div',
									{
										className: 'rounded-lg p-4 transition-colors',
										style: { border: '1px solid var(--portal-border, #E9E9E9)' },
										children: [
											r.jsxs('div', {
												className: 'flex items-start justify-between mb-3',
												children: [
													r.jsxs('div', {
														children: [
															r.jsx('h4', {
																className: 'text-sm font-medium',
																style: { color: 'var(--portal-text-primary, #09090b)' },
																children: ((l = t.plan) == null ? void 0 : l.name) || 'Unknown Plan',
															}),
															((n = t.plan) == null ? void 0 : n.description) &&
																r.jsx('p', {
																	className: 'text-xs mt-0.5 line-clamp-1',
																	style: { color: 'var(--portal-text-secondary, #71717a)' },
																	children: t.plan.description,
																}),
														],
													}),
													f(t.subscription_status),
												],
											}),
											r.jsxs('div', {
												className: 'flex flex-wrap gap-4 text-xs',
												style: { color: 'var(--portal-text-secondary, #71717a)' },
												children: [
													r.jsxs('div', {
														className: 'flex items-center gap-1.5',
														children: [
															r.jsx(x, { className: 'h-3.5 w-3.5' }),
															r.jsxs('span', { children: [i(t.current_period_start), ' - ', i(t.current_period_end)] }),
														],
													}),
													t.subscription_status === e.ACTIVE &&
														r.jsxs('div', {
															className: 'flex items-center gap-1.5',
															children: [
																r.jsx(m, { className: 'h-3.5 w-3.5' }),
																r.jsxs('span', { children: ['Next billing: ', i(t.current_period_end)] }),
															],
														}),
													t.subscription_status === e.TRIALING &&
														t.trial_end &&
														r.jsxs('div', {
															className: 'flex items-center gap-1.5 text-blue-600',
															children: [
																r.jsx(m, { className: 'h-3.5 w-3.5' }),
																r.jsxs('span', { children: ['Trial ends: ', i(t.trial_end)] }),
															],
														}),
												],
											}),
										],
									},
									t.id,
								);
							}),
						}),
					],
				});
	};
v.__docgenInfo = {
	description: '',
	methods: [],
	displayName: 'SubscriptionsWidget',
	props: {
		subscriptions: {
			required: !0,
			tsType: { name: 'Array', elements: [{ name: 'Subscription' }], raw: 'Subscription[]' },
			description: '',
		},
		label: { required: !1, tsType: { name: 'string' }, description: '' },
	},
};
export { v as default };
