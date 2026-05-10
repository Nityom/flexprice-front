import { c as s } from './createLucideIcon-DYb0enIN.js';
import { j as o } from './jsx-runtime-Cf8x2fCZ.js';
import { c as i } from './utils-BLSKlp9E.js';
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v = s('CircleAlert', [
	['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
	['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
	['line', { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E = s('CircleCheckBig', [
		['path', { d: 'M21.801 10A10 10 0 1 1 17 3.335', key: 'yps3ct' }],
		['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
	]),
	x = {
		success: { bgColor: '#ECFBE4', textColor: '#377E6A', borderColor: '#d1e9ca' },
		default: { bgColor: '#F0F2F5', textColor: '#57646E', borderColor: '#F0F2F5' },
		failed: { bgColor: '#FEE2E2', textColor: '#DC2626', borderColor: '#FEE2E2' },
		info: { bgColor: '#EFF8FF', textColor: '#2F6FE2', borderColor: '#EFF8FF' },
		warning: { bgColor: '#FFF7ED', textColor: '#C2410C', borderColor: '#FFF7ED' },
	},
	g = ({
		label: n,
		variant: d = 'default',
		textColor: c,
		bgColor: p,
		onClick: r,
		icon: t,
		childrenAfter: a,
		className: u,
		disabled: e = !1,
		borderColor: f,
	}) => {
		const { bgColor: m, textColor: C, borderColor: y } = x[d];
		return o.jsxs('span', {
			role: 'button',
			tabIndex: r && !e ? 0 : void 0,
			onClick: e ? void 0 : r,
			onKeyDown: (l) => {
				r && !e && (l.key === 'Enter' || l.key === ' ') && (l.preventDefault(), r());
			},
			className: i(
				'inline-flex items-center justify-center px-2 py-0.5 rounded-[8px] select-none font-normal transition-all',
				r && !e && 'cursor-pointer hover:opacity-90 active:scale-95',
				e && 'opacity-50 cursor-not-allowed',
				u,
			),
			style: { backgroundColor: p ?? m, color: c ?? C, border: `1px solid ${f ?? y}` },
			'aria-disabled': e,
			children: [
				t && o.jsx('span', { className: 'flex items-center text-[16px] leading-none', children: t }),
				n && o.jsx('span', { className: i('leading-none text-[14px]', t ? 'ml-1.5' : '', a ? 'mr-1.5' : ''), children: n }),
				a && o.jsx('span', { className: 'flex items-center text-[16px] leading-none', children: a }),
			],
		});
	};
g.__docgenInfo = {
	description: '',
	methods: [],
	displayName: 'Chip',
	props: {
		label: { required: !1, tsType: { name: 'ReactNode' }, description: 'The main content of the chip' },
		variant: {
			required: !1,
			tsType: {
				name: 'union',
				raw: "'default' | 'success' | 'warning' | 'failed' | 'info'",
				elements: [
					{ name: 'literal', value: "'default'" },
					{ name: 'literal', value: "'success'" },
					{ name: 'literal', value: "'warning'" },
					{ name: 'literal', value: "'failed'" },
					{ name: 'literal', value: "'info'" },
				],
			},
			description: 'Visual style variant of the chip',
			defaultValue: { value: "'default'", computed: !1 },
		},
		textColor: { required: !1, tsType: { name: 'string' }, description: 'Custom text color (overrides variant)' },
		bgColor: { required: !1, tsType: { name: 'string' }, description: 'Custom background color (overrides variant)' },
		onClick: {
			required: !1,
			tsType: { name: 'signature', type: 'function', raw: '() => void', signature: { arguments: [], return: { name: 'void' } } },
			description: 'Click handler for the chip',
		},
		icon: { required: !1, tsType: { name: 'ReactNode' }, description: 'Icon to display before the label' },
		childrenAfter: { required: !1, tsType: { name: 'ReactNode' }, description: 'Additional content to display after the label' },
		className: { required: !1, tsType: { name: 'string' }, description: 'Additional CSS classes' },
		disabled: {
			required: !1,
			tsType: { name: 'boolean' },
			description: 'Whether the chip is disabled',
			defaultValue: { value: 'false', computed: !1 },
		},
		borderColor: { required: !1, tsType: { name: 'string' }, description: '' },
	},
};
export { g as C, E as a, v as b };
