import { j as t } from './jsx-runtime-Cf8x2fCZ.js';
import { r as e } from './index-t5q4d8OJ.js';
import { s as b, e as c, f as u, W as N, L as v, C as x, c as f, t as T, v as w } from './SortDropdown-kGmZTU_J.js';
import { z as h } from './MetricCard-BUcjj5ur.js';
import './Button-Cf0ayti6.js';
import './Input-Z5ELXsou.js';
import './Chip-D5dGlNj6.js';
import { F as C } from './Select-CLFKPqir.js';
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
const L = () => {
	var p;
	const { limit: i, offset: l } = b(),
		[n, g] = e.useState(''),
		{ data: r, isLoading: E, isError: d } = c({ queryKey: ['portal-wallets'], queryFn: () => u.getWallets() }),
		s = n
			? r == null
				? void 0
				: r.find((o) => o.id === n)
			: (r == null ? void 0 : r.find((o) => o.wallet_status === N.ACTIVE)) || (r == null ? void 0 : r[0]),
		{
			data: a,
			isLoading: y,
			isError: m,
		} = c({
			queryKey: ['portal-wallet-transactions', s == null ? void 0 : s.id, i, l],
			queryFn: () => u.getWalletTransactions({ walletId: s.id, limit: i, offset: l }),
			enabled: !!(s != null && s.id),
		});
	if (
		(e.useEffect(() => {
			d && h.error('Failed to load wallets');
		}, [d]),
		e.useEffect(() => {
			m && h.error('Failed to load transactions');
		}, [m]),
		E)
	)
		return t.jsx('div', { className: 'py-12', children: t.jsx(v, {}) });
	if (!r || r.length === 0)
		return t.jsx(x, {
			className: 'rounded-xl p-6',
			style: { backgroundColor: 'var(--portal-surface, white)', border: '1px solid var(--portal-border, #E9E9E9)' },
			children: t.jsx(f, { title: 'No wallet', description: 'No wallet has been set up for this account' }),
		});
	const j = r.map((o) => ({ value: o.id, label: o.name || `Wallet ${o.id.slice(0, 8)}` }));
	return t.jsxs('div', {
		className: 'space-y-6',
		children: [
			r.length > 1 &&
				t.jsx(C, { value: (s == null ? void 0 : s.id) || '', onChange: (o) => g(o), options: j, className: 'w-full max-w-xs' }),
			t.jsxs(x, {
				className: 'rounded-xl overflow-hidden',
				style: { backgroundColor: 'var(--portal-surface, white)', border: '1px solid var(--portal-border, #E9E9E9)' },
				children: [
					t.jsx('div', {
						className: 'p-6',
						style: { borderBottom: '1px solid var(--portal-border, #E9E9E9)' },
						children: t.jsx('h3', {
							className: 'text-base font-medium',
							style: { color: 'var(--portal-text-primary, #09090b)' },
							children: 'Transaction History',
						}),
					}),
					t.jsx('div', {
						className: 'p-6',
						children: y
							? t.jsx('div', {
									className: 'animate-pulse space-y-3',
									children: [1, 2, 3].map((o) => t.jsx('div', { className: 'h-12 bg-zinc-100 rounded' }, o)),
								})
							: a != null && a.items && a.items.length > 0
								? t.jsxs(t.Fragment, {
										children: [
											t.jsx(T, { data: a.items }),
											t.jsx(w, { unit: 'transactions', totalItems: ((p = a.pagination) == null ? void 0 : p.total) || 0 }),
										],
									})
								: t.jsx(f, { title: 'No transactions', description: 'Your transaction history will appear here' }),
					}),
				],
			}),
		],
	});
};
L.__docgenInfo = { description: '', methods: [], displayName: 'WalletTransactionsWidget' };
export { L as default };
