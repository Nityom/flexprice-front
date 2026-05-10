import { j as e } from './jsx-runtime-Cf8x2fCZ.js';
import { r as a } from './index-t5q4d8OJ.js';
import { u as F, e as U, p as z, f, n as M, C as y, c as I, I as V, o as q, D as Q, q as W } from './SortDropdown-kGmZTU_J.js';
import { z as l, g as K, f as E, I as h } from './MetricCard-BUcjj5ur.js';
import { L as R } from './Button-Cf0ayti6.js';
import { f as $ } from './Input-Z5ELXsou.js';
import { C as m } from './Chip-D5dGlNj6.js';
import './Select-CLFKPqir.js';
import './Spinner-BfFjocAz.js';
import './index-Ds86VQ4X.js';
import './SidebarNav-DSU81IN1.js';
import './badge-h_lvg-2o.js';
import './popover-DCybn2PX.js';
import './select-1EArqANp.js';
import './tooltip-CkQW4Nnp.js';
import './Tooltip-DuiAFdzG.js';
import { S as Y } from './x-BDoriEd4.js';
import './index-yBjzXJbu.js';
import './utils-BLSKlp9E.js';
import './createLucideIcon-DYb0enIN.js';
import './circle-CnA5Nx1k.js';
import './circle-x-6f_XFf-A.js';
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
const Z = (o) =>
		o.payment_status === W.SUCCEEDED
			? e.jsx(m, { label: 'Paid', variant: 'success' })
			: o.invoice_status === h.VOIDED
				? e.jsx(m, { label: 'Voided', variant: 'default' })
				: o.invoice_status === h.DRAFT
					? e.jsx(m, { label: 'Draft', variant: 'default' })
					: new Date(o.due_date) < new Date()
						? e.jsx(m, { label: 'Overdue', variant: 'failed' })
						: e.jsx(m, { label: 'Pending', variant: 'warning' }),
	B = ({ invoices: o, currencySymbol: p, onOpenDownloadFormat: s, downloadPendingId: n, hasTheme: u }) =>
		e.jsxs('div', {
			className: 'overflow-x-auto',
			children: [
				e.jsxs('table', {
					className: 'w-full',
					children: [
						e.jsx('thead', {
							children: e.jsx('tr', {
								className: 'border-b',
								style: { backgroundColor: 'var(--portal-surface, #f9fafb)', borderColor: 'var(--portal-border, #E9E9E9)' },
								children: ['DATE', 'INVOICE #', 'STATUS', 'AMOUNT', 'DOWNLOAD'].map((r) =>
									e.jsx(
										'th',
										{
											className: `px-4 py-3 text-xs font-medium uppercase tracking-wider ${r === 'AMOUNT' ? 'text-right' : r === 'DOWNLOAD' ? 'text-center' : 'text-left'}`,
											style: { color: 'var(--portal-text-secondary, #71717a)' },
											children: r,
										},
										r,
									),
								),
							}),
						}),
						e.jsx('tbody', {
							className: 'divide-y',
							style: { borderColor: 'var(--portal-border, #E9E9E9)' },
							children: o.map((r) =>
								e.jsxs(
									'tr',
									{
										className: 'transition-colors',
										style: { backgroundColor: 'var(--portal-surface, white)' },
										children: [
											e.jsx('td', {
												className: 'px-4 py-3 text-sm',
												style: { color: 'var(--portal-text-secondary, #71717a)' },
												children: r.finalized_at ? E(r.finalized_at) : E(r.created_at),
											}),
											e.jsx('td', {
												className: 'px-4 py-3 text-sm font-medium',
												style: { color: 'var(--portal-text-primary, #09090b)' },
												children: r.invoice_number || `INV-${r.id.slice(0, 8)}`,
											}),
											e.jsx('td', { className: 'px-4 py-3', children: Z(r) }),
											e.jsxs('td', {
												className: 'px-4 py-3 text-sm text-right font-medium',
												style: { color: 'var(--portal-text-primary, #09090b)' },
												children: [p, $(String(r.total ?? 0))],
											}),
											e.jsx('td', {
												className: 'px-4 py-3 text-center',
												children:
													r.invoice_status === h.FINALIZED &&
													e.jsx('button', {
														onClick: () => s(r),
														disabled: n !== null,
														className: 'p-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
														style: u ? { backgroundColor: 'var(--portal-primary)', color: 'white' } : { color: '#71717a' },
														children: n === r.id ? e.jsx(R, { className: 'h-4 w-4 animate-spin' }) : e.jsx(Q, { className: 'h-4 w-4' }),
													}),
											}),
										],
									},
									r.id,
								),
							),
						}),
					],
				}),
				o.length === 0 &&
					e.jsx('div', {
						className: 'py-8',
						children: e.jsx(I, { title: 'No invoices found', description: 'No invoices match your search criteria' }),
					}),
			],
		}),
	G = () => {
		var w;
		const [o, p] = a.useState(''),
			[s, n] = a.useState(null),
			[u, r] = a.useState(!1),
			[v, b] = a.useState(!1),
			{ config: D } = F(),
			S = !!D.theme,
			{ data: i, isLoading: _, isError: g } = U({ queryKey: z, queryFn: () => f.getInvoices({ limit: 100, offset: 0 }) }),
			{ mutateAsync: O, isPending: N } = M({
				mutationFn: (t) => f.downloadInvoicePdf(t),
				onSuccess: () => l.success('Invoice downloaded'),
				onError: () => l.error('Failed to download invoice'),
			});
		a.useEffect(() => {
			g && l.error('Failed to load invoices');
		}, [g]);
		const d = a.useMemo(() => (i == null ? void 0 : i.items) ?? [], [i == null ? void 0 : i.items]),
			A = a.useMemo(() => {
				if (!o) return d;
				const t = o.toLowerCase();
				return d.filter((c) => {
					var x, j, C;
					return (
						((x = c.invoice_number) == null ? void 0 : x.toLowerCase().includes(t)) ||
						((j = c.invoice_status) == null ? void 0 : j.toLowerCase().includes(t)) ||
						((C = c.payment_status) == null ? void 0 : C.toLowerCase().includes(t))
					);
				});
			}, [d, o]),
			P = (t) => {
				(n(t), r(!0));
			},
			T = N || v ? ((s == null ? void 0 : s.id) ?? null) : null;
		if (_)
			return e.jsxs('div', {
				className: 'space-y-6',
				children: [
					e.jsx('div', { className: 'h-10 bg-zinc-100 animate-pulse rounded-md' }),
					e.jsx(y, {
						className: 'rounded-xl p-4',
						style: { backgroundColor: 'var(--portal-surface, white)', border: '1px solid var(--portal-border, #E9E9E9)' },
						children: e.jsx('div', {
							className: 'animate-pulse space-y-3',
							children: [1, 2, 3, 4].map((t) => e.jsx('div', { className: 'h-12 bg-zinc-100 rounded' }, t)),
						}),
					}),
				],
			});
		const L = ((w = d[0]) == null ? void 0 : w.currency) || 'USD',
			k = K(L);
		return d.length === 0
			? e.jsx(y, {
					className: 'rounded-xl p-6',
					style: { backgroundColor: 'var(--portal-surface, white)', border: '1px solid var(--portal-border, #E9E9E9)' },
					children: e.jsx(I, { title: 'No invoices', description: 'No invoices have been generated yet' }),
				})
			: e.jsxs('div', {
					className: 'space-y-6',
					children: [
						e.jsx(V, {
							open: u,
							onOpenChange: (t) => {
								(r(t), t || n(null));
							},
							isPdfPending: N,
							isCsvPending: v,
							onSelectPdf: async () => {
								s && (await O(s.id));
							},
							onSelectCsv: async () => {
								var t;
								if (s) {
									b(!0);
									try {
										const c = (t = s.line_items) != null && t.length ? s : await f.getInvoice(s.id);
										q(c) === 0 ? l.error('No billable line items to export') : l.success('Invoice CSV downloaded');
									} catch {
										l.error('Failed to export invoice');
									} finally {
										b(!1);
									}
								}
							},
						}),
						e.jsxs('div', {
							className: 'relative',
							children: [
								e.jsx(Y, {
									className: 'absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4',
									style: { color: 'var(--portal-text-secondary, #a1a1aa)' },
								}),
								e.jsx('input', {
									type: 'text',
									placeholder: 'Search invoices...',
									value: o,
									onChange: (t) => p(t.target.value),
									className: 'w-full pl-10 pr-4 py-2.5 text-sm rounded-lg outline-none focus:ring-1 transition-colors',
									style: {
										backgroundColor: 'var(--portal-surface, white)',
										border: '1px solid var(--portal-border, #E9E9E9)',
										color: 'var(--portal-text-primary, #09090b)',
									},
								}),
							],
						}),
						e.jsx(y, {
							className: 'rounded-xl overflow-hidden',
							style: { backgroundColor: 'var(--portal-surface, white)', border: '1px solid var(--portal-border, #E9E9E9)' },
							children: e.jsx(B, { invoices: A, currencySymbol: k, onOpenDownloadFormat: P, downloadPendingId: T, hasTheme: S }),
						}),
					],
				});
	};
G.__docgenInfo = { description: '', methods: [], displayName: 'InvoicesWidget' };
export { G as default };
