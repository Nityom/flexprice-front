import { j as r } from './jsx-runtime-Cf8x2fCZ.js';
import { r as v } from './index-t5q4d8OJ.js';
import { e as c, f as m, W as o, C as i, c as f, r as h } from './SortDropdown-kGmZTU_J.js';
import { z as y, g as j } from './MetricCard-BUcjj5ur.js';
import './Button-Cf0ayti6.js';
import { f as p } from './Input-Z5ELXsou.js';
import { C as g } from './Chip-D5dGlNj6.js';
import './Select-CLFKPqir.js';
import './Spinner-BfFjocAz.js';
import './index-Ds86VQ4X.js';
import './SidebarNav-DSU81IN1.js';
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
const N = (a) => {
		const s = {
			[o.ACTIVE]: { label: 'Active', variant: 'success' },
			[o.FROZEN]: { label: 'Frozen', variant: 'warning' },
			[o.CLOSED]: { label: 'Closed', variant: 'failed' },
		}[a] || { label: a, variant: 'default' };
		return r.jsx(g, { label: s.label, variant: s.variant });
	},
	E = () => {
		var n, d;
		const { data: a, isLoading: l, isError: s } = c({ queryKey: ['portal-wallets'], queryFn: () => m.getWallets() }),
			e = (a == null ? void 0 : a.find((b) => b.wallet_status === o.ACTIVE)) || (a == null ? void 0 : a[0]),
			{ data: t, isLoading: u } = c({
				queryKey: ['portal-wallet-balance', e == null ? void 0 : e.id],
				queryFn: () => m.getWalletBalance(e.id),
				enabled: !!(e != null && e.id),
			});
		if (
			(v.useEffect(() => {
				s && y.error('Failed to load wallet');
			}, [s]),
			s)
		)
			return null;
		if (l)
			return r.jsxs(i, {
				className: 'rounded-xl overflow-hidden',
				style: { backgroundColor: 'var(--portal-surface, white)', border: '1px solid var(--portal-border, #E9E9E9)' },
				children: [
					r.jsx('div', {
						className: 'p-6',
						style: { borderBottom: '1px solid var(--portal-border, #E9E9E9)' },
						children: r.jsx('div', { className: 'h-5 w-32 bg-zinc-100 animate-pulse rounded' }),
					}),
					r.jsx('div', {
						className: 'p-6',
						children: r.jsxs('div', {
							className: 'animate-pulse space-y-3',
							children: [
								r.jsx('div', { className: 'h-4 bg-zinc-100 rounded w-20' }),
								r.jsx('div', { className: 'h-10 bg-zinc-100 rounded w-32' }),
							],
						}),
					}),
				],
			});
		if (!e)
			return r.jsx(i, {
				className: 'rounded-xl p-6',
				style: { backgroundColor: 'var(--portal-surface, white)', border: '1px solid var(--portal-border, #E9E9E9)' },
				children: r.jsx(f, { title: 'No wallet', description: 'No wallet has been set up for this account' }),
			});
		const x = j((t == null ? void 0 : t.currency) ?? e.currency ?? 'USD');
		return r.jsxs(i, {
			className: 'rounded-xl overflow-hidden',
			style: { backgroundColor: 'var(--portal-surface, white)', border: '1px solid var(--portal-border, #E9E9E9)' },
			children: [
				r.jsx('div', {
					className: 'p-6',
					style: { borderBottom: '1px solid var(--portal-border, #E9E9E9)' },
					children: r.jsxs('div', {
						className: 'flex items-center gap-3',
						children: [
							r.jsx('div', {
								className: 'h-10 w-10 rounded-full flex items-center justify-center',
								style: { backgroundColor: 'var(--portal-primary, #eff6ff)' },
								children: r.jsx(h, { className: 'h-5 w-5', style: { color: 'var(--portal-text-primary, #2563eb)' } }),
							}),
							r.jsxs('div', {
								children: [
									r.jsx('h3', {
										className: 'text-base font-medium',
										style: { color: 'var(--portal-text-primary, #09090b)' },
										children: e.name || 'Wallet',
									}),
									e.wallet_status && N(e.wallet_status),
								],
							}),
						],
					}),
				}),
				r.jsx('div', {
					className: 'p-6',
					children: u
						? r.jsxs('div', {
								className: 'animate-pulse space-y-3',
								children: [
									r.jsx('div', { className: 'h-4 bg-zinc-100 rounded w-20' }),
									r.jsx('div', { className: 'h-10 bg-zinc-100 rounded w-32' }),
								],
							})
						: r.jsxs('div', {
								children: [
									r.jsx('span', {
										className: 'text-sm block mb-2',
										style: { color: 'var(--portal-text-secondary, #71717a)' },
										children: 'Balance',
									}),
									r.jsxs('div', {
										className: 'flex items-baseline gap-2',
										children: [
											r.jsx('span', {
												className: 'text-4xl font-semibold',
												style: { color: 'var(--portal-text-primary, #09090b)' },
												children: p(
													(t == null ? void 0 : t.real_time_credit_balance) ??
														((n = e.credit_balance) == null ? void 0 : n.toString()) ??
														'0',
												),
											}),
											r.jsx('span', {
												className: 'text-base font-normal',
												style: { color: 'var(--portal-text-secondary, #71717a)' },
												children: 'credits',
											}),
										],
									}),
									r.jsxs('p', {
										className: 'text-sm mt-1',
										style: { color: 'var(--portal-text-secondary, #71717a)' },
										children: [
											x,
											p((t == null ? void 0 : t.real_time_balance) ?? ((d = e.balance) == null ? void 0 : d.toString()) ?? '0'),
											' value',
										],
									}),
								],
							}),
				}),
			],
		});
	};
E.__docgenInfo = {
	description: `Shows real-time balance for the first active wallet.
Used as a summary card on the Overview section.`,
	methods: [],
	displayName: 'WalletBalanceWidget',
};
export { E as default };
