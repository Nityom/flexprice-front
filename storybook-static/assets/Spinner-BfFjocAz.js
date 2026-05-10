import { j as e } from './jsx-runtime-Cf8x2fCZ.js';
const a = ({ size: s = 24, className: t = '' }) =>
	e.jsxs('svg', {
		className: `animate-spin ${t}`,
		style: { width: s, height: s },
		xmlns: 'http://www.w3.org/2000/svg',
		fill: 'none',
		viewBox: '0 0 24 24',
		children: [
			e.jsx('circle', { className: 'opacity-25', cx: '12', cy: '12', r: '10', stroke: 'currentColor', strokeWidth: '4' }),
			e.jsx('path', {
				className: 'opacity-75',
				fill: 'currentColor',
				d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
			}),
		],
	});
a.__docgenInfo = {
	description: '',
	methods: [],
	displayName: 'Spinner',
	props: {
		size: {
			required: !1,
			tsType: { name: 'number' },
			description: 'The size of the spinner in pixels (width and height)',
			defaultValue: { value: '24', computed: !1 },
		},
		className: {
			required: !1,
			tsType: { name: 'string' },
			description: 'Additional CSS classes to apply to the svg element',
			defaultValue: { value: "''", computed: !1 },
		},
	},
};
export { a as S };
