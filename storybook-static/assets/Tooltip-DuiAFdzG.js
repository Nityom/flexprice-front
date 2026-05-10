import { j as e } from './jsx-runtime-Cf8x2fCZ.js';
import { T as s, a as p, b as m, c as d } from './tooltip-CkQW4Nnp.js';
import { c as u } from './utils-BLSKlp9E.js';
const c = ({ children: t, content: o, delayDuration: a, side: r = 'top', align: i = 'center', sideOffset: l = 4, className: n }) =>
	e.jsx(s, {
		delayDuration: a,
		children: e.jsxs(p, {
			children: [e.jsx(m, { asChild: !0, children: t }), e.jsx(d, { side: r, align: i, sideOffset: l, className: u(n), children: o })],
		}),
	});
c.__docgenInfo = {
	description: '',
	methods: [],
	displayName: 'Tooltip',
	props: {
		children: { required: !0, tsType: { name: 'ReactNode' }, description: 'The element that triggers the tooltip' },
		content: { required: !0, tsType: { name: 'ReactNode' }, description: 'The content to display in the tooltip' },
		delayDuration: { required: !1, tsType: { name: 'number' }, description: 'Delay before showing tooltip in ms' },
		side: {
			required: !1,
			tsType: {
				name: 'union',
				raw: "'top' | 'right' | 'bottom' | 'left'",
				elements: [
					{ name: 'literal', value: "'top'" },
					{ name: 'literal', value: "'right'" },
					{ name: 'literal', value: "'bottom'" },
					{ name: 'literal', value: "'left'" },
				],
			},
			description: 'Side of the trigger to show tooltip',
			defaultValue: { value: "'top'", computed: !1 },
		},
		align: {
			required: !1,
			tsType: {
				name: 'union',
				raw: "'start' | 'center' | 'end'",
				elements: [
					{ name: 'literal', value: "'start'" },
					{ name: 'literal', value: "'center'" },
					{ name: 'literal', value: "'end'" },
				],
			},
			description: 'Alignment of the tooltip',
			defaultValue: { value: "'center'", computed: !1 },
		},
		sideOffset: {
			required: !1,
			tsType: { name: 'number' },
			description: 'Offset from the trigger',
			defaultValue: { value: '4', computed: !1 },
		},
		className: { required: !1, tsType: { name: 'string' }, description: 'Custom className for the tooltip content' },
	},
};
export { c as T };
