import { j as s } from './jsx-runtime-Cf8x2fCZ.js';
import { r as h } from './index-t5q4d8OJ.js';
import { c as N } from './utils-BLSKlp9E.js';
const A = ({ label: e, disabled: n, labelClassName: t, children: a, htmlFor: r, ...i }) =>
	s.jsx('label', {
		...i,
		htmlFor: r,
		className: N(' block text-sm font-medium', n ? 'text-zinc-500' : 'text-zinc-950', t),
		children: e || a,
	});
A.__docgenInfo = {
	description: '',
	methods: [],
	displayName: 'Label',
	props: {
		label: { required: !0, tsType: { name: 'string' }, description: '' },
		disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
		labelClassName: { required: !1, tsType: { name: 'string' }, description: '' },
		children: { required: !1, tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' }, description: '' },
	},
};
const v = {
		xs: { height: 'h-6', padding: 'px-2 py-1', text: 'text-xs', display: '' },
		sm: { height: 'h-8', padding: 'px-2 py-1.5', text: 'text-xs', display: '' },
		default: { height: 'h-10', padding: 'px-3 py-2', text: 'text-sm', display: '' },
		lg: { height: 'h-12', padding: 'px-4 py-2.5', text: 'text-base', display: '' },
		icon: { height: 'h-9 w-9', padding: 'p-2', text: 'text-sm', display: 'flex items-center justify-center' },
	},
	d = { allowNegative: !1, allowDecimals: !0, thousandSeparator: ',', decimalSeparator: '.' },
	j = (e, n = d) => {
		if (!e) return '';
		const { allowNegative: t, allowDecimals: a, thousandSeparator: r, decimalSeparator: i } = { ...d, ...n },
			l = t && e.startsWith('-'),
			p = (l ? e.slice(1) : e).split(i),
			x = p[0] || '',
			o = p[1];
		let m = x.replace(/\B(?=(\d{3})+(?!\d))/g, r);
		return (a && o !== void 0 && (m += i + o), l ? '-' + m : m);
	},
	z = (e, n = d) => {
		const { thousandSeparator: t } = { ...d, ...n },
			a = t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		return e.replace(new RegExp(a, 'g'), '');
	},
	M = (e, n = d) => {
		const { allowNegative: t, allowDecimals: a, decimalSeparator: r } = { ...d, ...n };
		switch (e) {
			case 'integer':
				return t ? /^-?\d*$/ : /^\d*$/;
			case 'number':
			case 'formatted-number':
				return t ? new RegExp(`^-?\\d*${a ? `\\${r}?\\d*` : ''}$`) : new RegExp(`^\\d*${a ? `\\${r}?\\d*` : ''}$`);
			default:
				return /.*/;
		}
	},
	F = h.forwardRef(
		(
			{
				className: e,
				type: n,
				label: t,
				description: a,
				error: r,
				onChange: i,
				disabled: l,
				placeholder: I,
				suffix: p,
				id: x,
				value: o,
				inputPrefix: T,
				labelClassName: m,
				variant: u = 'text',
				size: y = 'default',
				formatOptions: f = d,
				...$
			},
			b,
		) => {
			const R = h.useRef(null),
				[w, S] = h.useState(null),
				q = u === 'formatted-number' || u === 'integer',
				E = h.useMemo(() => M(u, f), [u, f]);
			h.useEffect(() => {
				w !== null && R.current && (R.current.setSelectionRange(w, w), S(null));
			}, [w]);
			const L = (c) => {
					let g = c.target.value;
					const D = o || '',
						C = c.target.selectionStart || 0;
					if (u !== 'text') {
						if ((q && (g = z(g, f)), !E.test(g))) return;
						if (q) {
							const V = (D.slice(0, C).match(/,/g) || []).length,
								k = (j(g, f).slice(0, C).match(/,/g) || []).length - V;
							S(C + k);
						}
					}
					i && i(g);
				},
				P = () => (q && o ? j(o, { ...f, allowDecimals: u !== 'integer' }) : o);
			return s.jsxs('div', {
				className: 'space-y-1 w-full flex flex-col',
				children: [
					t && s.jsx(A, { label: t, disabled: l, labelClassName: m, htmlFor: x }),
					s.jsxs('div', {
						className: N(
							v[y].height,
							v[y].padding,
							v[y].text,
							v[y].display,
							'w-full flex h-full group items-center rounded-[6px] border bg-background ring-offset-background placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed',
							r ? 'border-destructive' : 'border-input focus-within:ring-ring focus-within:ring-offset-2',
							'focus-within:border-black',
							e,
						),
						children: [
							T && s.jsx('div', { className: 'mr-2', children: T }),
							s.jsx('input', {
								...$,
								id: x,
								type: n,
								value: P(),
								disabled: l,
								placeholder: I,
								className: N(
									'peer relative min-h-0 min-w-0 flex-1 bg-transparent outline-none ring-0 focus:outline-none placeholder:text-muted-foreground',
									l && 'text-zinc-500',
									e,
								),
								onChange: L,
								ref: (c) => {
									((R.current = c), typeof b == 'function' ? b(c) : b && (b.current = c));
								},
							}),
							p &&
								s.jsx('div', {
									className: 'ml-2 flex shrink-0 items-center self-stretch pl-2 text-sm tabular-nums leading-none text-muted-foreground',
									children: p,
								}),
						],
					}),
					a && s.jsx('p', { className: N('text-sm', l ? 'text-zinc-500' : 'text-muted-foreground'), children: a }),
					r && s.jsx('p', { className: 'text-sm text-destructive', children: r }),
				],
			});
		},
	);
F.displayName = 'Input';
F.__docgenInfo = {
	description: '',
	methods: [],
	displayName: 'Input',
	props: {
		label: { required: !1, tsType: { name: 'string' }, description: 'Optional label to display above the input' },
		description: {
			required: !1,
			tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
			description: 'Optional description text to display below the input',
		},
		error: {
			required: !1,
			tsType: { name: 'string' },
			description: 'Error message to display. Also styles the input with a red border if present.',
		},
		type: {
			required: !1,
			tsType: { name: 'ReactHTMLInputTypeAttribute', raw: 'React.HTMLInputTypeAttribute' },
			description: 'HTML input type attribute',
		},
		onChange: {
			required: !1,
			tsType: {
				name: 'signature',
				type: 'function',
				raw: '(value: string) => void',
				signature: { arguments: [{ type: { name: 'string' }, name: 'value' }], return: { name: 'void' } },
			},
			description: 'Custom onChange handler returning the string value directly',
		},
		disabled: { required: !1, tsType: { name: 'boolean' }, description: 'Whether the input is disabled' },
		suffix: {
			required: !1,
			tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
			description: 'Optional content to display at the end of the input (inside the border)',
		},
		className: { required: !1, tsType: { name: 'string' }, description: 'Additional classes for the input container' },
		placeholder: { required: !1, tsType: { name: 'string' }, description: 'Placeholder text for the input' },
		id: { required: !1, tsType: { name: 'string' }, description: 'HTML ID for the input element' },
		inputPrefix: {
			required: !1,
			tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
			description: 'Optional content to display at the start of the input (inside the border)',
		},
		labelClassName: { required: !1, tsType: { name: 'string' }, description: 'Additional classes for the label element' },
		variant: {
			required: !1,
			tsType: {
				name: 'union',
				raw: "'text' | 'number' | 'formatted-number' | 'integer'",
				elements: [
					{ name: 'literal', value: "'text'" },
					{ name: 'literal', value: "'number'" },
					{ name: 'literal', value: "'formatted-number'" },
					{ name: 'literal', value: "'integer'" },
				],
			},
			description: 'Input variant for specialized formatting (e.g. number formatting)',
			defaultValue: { value: "'text'", computed: !1 },
		},
		formatOptions: {
			required: !1,
			tsType: { name: 'NumberFormatOptions' },
			description: "Formatting options used when variant is 'number', 'formatted-number', or 'integer'",
			defaultValue: {
				value: `{
	allowNegative: false,
	allowDecimals: true,
	thousandSeparator: ',',
	decimalSeparator: '.',
}`,
				computed: !1,
			},
		},
		size: {
			required: !1,
			tsType: {
				name: 'union',
				raw: 'keyof typeof sizes',
				elements: [
					{ name: 'literal', value: 'xs' },
					{ name: 'literal', value: 'sm' },
					{ name: 'literal', value: 'default' },
					{ name: 'literal', value: 'lg' },
					{ name: 'literal', value: 'icon' },
				],
			},
			description: 'Size variant of the input',
			defaultValue: { value: "'default'", computed: !1 },
		},
	},
	composes: ['Omit'],
};
export { F as I, A as L, j as f, z as r };
