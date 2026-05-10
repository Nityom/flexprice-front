import { j as e } from './jsx-runtime-Cf8x2fCZ.js';
import { r as f } from './index-t5q4d8OJ.js';
import { S as m } from './index-BNNQlCw5.js';
import { c as x } from './index-1evVQkiP.js';
import { c as b } from './utils-BLSKlp9E.js';
import { c as h } from './createLucideIcon-DYb0enIN.js';
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g = h('LoaderCircle', [['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }]]),
	v = x(
		'inline-flex !py-0 !my-0 items-center justify-center gap-2 whitespace-nowrap rounded-[7px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
		{
			variants: {
				variant: {
					default: 'bg-[#092E44] text-white shadow hover:opacity-90 border-[#092E44]',
					black: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
					destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
					outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
					secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
					ghost: 'hover:bg-accent hover:text-accent-foreground',
					link: 'text-primary underline-offset-4 hover:underline',
				},
				size: {
					default: 'h-8 p-[10px] !py-[15px] !px-[12px] border rounded-[7px]',
					sm: 'h-8 rounded-[7px] px-3 text-xs',
					lg: 'h-10 rounded-[7px] px-3',
					icon: 'h-9 w-9',
					xs: 'h-6 rounded-[7px] px-3 text-xs',
				},
			},
			defaultVariants: { variant: 'default', size: 'default' },
		},
	),
	r = f.forwardRef(
		({ className: s, variant: a, size: n, asChild: i = !1, isLoading: t = !1, children: d, suffixIcon: c, prefixIcon: l, ...o }, p) => {
			const u = i ? m : 'button';
			return e.jsx(u, {
				className: b(v({ variant: a, size: n, className: s })),
				ref: p,
				disabled: t || o.disabled,
				...o,
				children: t
					? e.jsx(g, { className: 'size-4 animate-spin', 'data-testid': 'button-loading-spinner' })
					: e.jsxs('div', { className: 'flex items-center gap-[5px]', children: [l, d, c] }),
			});
		},
	);
r.displayName = 'Button';
r.__docgenInfo = {
	description: `Primary UI component for user interaction.
Supports multiple variants, sizes, and states like loading or disabled.`,
	methods: [],
	displayName: 'Button',
	props: {
		asChild: {
			required: !1,
			tsType: { name: 'boolean' },
			description: 'If true, the button will render as a child slot for composability',
			defaultValue: { value: 'false', computed: !1 },
		},
		isLoading: {
			required: !1,
			tsType: { name: 'boolean' },
			description: 'If true, shows a loading spinner and disables the button',
			defaultValue: { value: 'false', computed: !1 },
		},
		suffixIcon: { required: !1, tsType: { name: 'ReactNode' }, description: 'Optional icon to render after the button text' },
		prefixIcon: { required: !1, tsType: { name: 'ReactNode' }, description: 'Optional icon to render before the button text' },
	},
	composes: ['VariantProps'],
};
export { r as B, g as L };
