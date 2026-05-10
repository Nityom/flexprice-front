import { j as e } from './jsx-runtime-Cf8x2fCZ.js';
import { c as o } from './utils-BLSKlp9E.js';
import { B as c } from './badge-h_lvg-2o.js';
const m = ({ tiers: r, currency: s = '$', unitName: t = 'unit', model: d = 'graduated', className: i }) =>
	e.jsxs('div', {
		className: o('overflow-hidden rounded-lg border border-border bg-card shadow-sm', i),
		children: [
			e.jsxs('table', {
				className: 'w-full text-left text-sm',
				children: [
					e.jsx('thead', {
						className: 'bg-muted/50 border-b border-border',
						children: e.jsxs('tr', {
							children: [
								e.jsxs('th', { className: 'px-4 py-3 font-semibold text-muted-foreground', children: ['Range (', t, 's)'] }),
								e.jsx('th', { className: 'px-4 py-3 font-semibold text-muted-foreground', children: 'Unit Price' }),
								r.some((a) => a.flatFee !== void 0) &&
									e.jsx('th', { className: 'px-4 py-3 font-semibold text-muted-foreground', children: 'Flat Fee' }),
							],
						}),
					}),
					e.jsx('tbody', {
						className: 'divide-y divide-border',
						children: r.map((a, l) =>
							e.jsxs(
								'tr',
								{
									className: 'hover:bg-accent/30 transition-colors',
									children: [
										e.jsxs('td', {
											className: 'px-4 py-3 font-medium',
											children: [
												a.to === null
													? e.jsxs('span', { children: [a.from.toLocaleString(), '+'] })
													: e.jsxs('span', { children: [a.from.toLocaleString(), ' - ', a.to.toLocaleString()] }),
												l === 0 &&
													d === 'graduated' &&
													e.jsx(c, { variant: 'secondary', className: 'ml-2 text-[10px] h-4 px-1', children: 'Initial' }),
											],
										}),
										e.jsxs('td', {
											className: 'px-4 py-3',
											children: [
												e.jsxs('span', { className: 'font-mono', children: [s, a.unitPrice.toFixed(4)] }),
												e.jsxs('span', { className: 'text-xs text-muted-foreground ml-1', children: ['/ ', t] }),
											],
										}),
										r.some((n) => n.flatFee !== void 0) &&
											e.jsx('td', {
												className: 'px-4 py-3',
												children:
													a.flatFee !== void 0
														? e.jsxs('span', { className: 'font-mono', children: [s, a.flatFee.toLocaleString()] })
														: e.jsx('span', { className: 'text-muted-foreground', children: 'â€”' }),
											}),
									],
								},
								l,
							),
						),
					}),
				],
			}),
			e.jsx('div', {
				className: 'bg-muted/30 px-4 py-2 border-t border-border',
				children: e.jsxs('p', {
					className: 'text-[10px] text-muted-foreground uppercase tracking-wider font-semibold',
					children: ['Pricing Model: ', d],
				}),
			}),
		],
	});
m.__docgenInfo = {
	description: 'An organism for displaying complex pricing tier structures in a clear table format.',
	methods: [],
	displayName: 'PricingTierTable',
	props: {
		tiers: {
			required: !0,
			tsType: { name: 'Array', elements: [{ name: 'PricingTier' }], raw: 'PricingTier[]' },
			description: 'Array of pricing tiers',
		},
		currency: {
			required: !1,
			tsType: { name: 'string' },
			description: 'Currency symbol or code',
			defaultValue: { value: "'$'", computed: !1 },
		},
		unitName: {
			required: !1,
			tsType: { name: 'string' },
			description: "Unit name (e.g., 'API call', 'seat')",
			defaultValue: { value: "'unit'", computed: !1 },
		},
		model: {
			required: !1,
			tsType: {
				name: 'union',
				raw: "'graduated' | 'volume' | 'flat'",
				elements: [
					{ name: 'literal', value: "'graduated'" },
					{ name: 'literal', value: "'volume'" },
					{ name: 'literal', value: "'flat'" },
				],
			},
			description: "Pricing model (e.g., 'graduated', 'volume')",
			defaultValue: { value: "'graduated'", computed: !1 },
		},
		className: { required: !1, tsType: { name: 'string' }, description: 'Additional CSS classes' },
	},
};
export { m as P };
