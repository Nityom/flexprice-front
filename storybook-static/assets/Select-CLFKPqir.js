import { j as e } from './jsx-runtime-Cf8x2fCZ.js';
import { S as N, a as v, b as T, c as q, d as h, I as S, e as k, f as I } from './select-1EArqANp.js';
import { c as a } from './utils-BLSKlp9E.js';
import { R } from './index-t5q4d8OJ.js';
import { C as b } from './circle-CnA5Nx1k.js';
const C = R.forwardRef(({ className: r, children: l, ...t }, i) =>
		e.jsxs(S, {
			ref: i,
			className: a(
				'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				r,
			),
			...t,
			children: [
				e.jsxs('span', {
					className: 'absolute left-2 top-[10px] flex h-4 w-4  justify-center',
					children: [
						e.jsx(k, {
							className: 'flex items-center justify-center w-full h-full',
							children: e.jsx(b, { className: 'size-2 text-black fill-current' }),
						}),
						e.jsx(b, { className: 'size-4 text-gray-400 absolute' }),
					],
				}),
				e.jsx(I, { children: l }),
			],
		}),
	),
	V = ({
		disabled: r = !1,
		options: l,
		value: t,
		placeholder: i = 'Select an option',
		label: c = '',
		required: y = !1,
		description: n,
		onChange: d,
		error: o,
		isRadio: j,
		className: u,
		noOptionsText: m,
		defaultOpen: w,
		hideSelectedTick: f = !0,
		trigger: p,
		contentClassName: g,
	}) => {
		var x;
		return e.jsxs('div', {
			className: a('space-y-1 ', u),
			children: [
				c &&
					e.jsxs('label', {
						className: a(' block text-sm font-medium text-zinc break-words', r ? 'text-zinc-500' : 'text-zinc-950'),
						children: [c, y && e.jsx('span', { className: 'text-destructive', children: ' *' })],
					}),
				e.jsxs(N, {
					defaultOpen: w,
					defaultValue: t || '',
					onValueChange: (s) => {
						d && d(s === t ? '' : s);
					},
					value: t,
					disabled: r,
					children: [
						e.jsx(v, {
							className: a(r && 'cursor-not-allowed', u),
							children:
								p ||
								e.jsx('span', {
									className: a('truncate', t ? '' : 'text-muted-foreground'),
									children: t ? ((x = l.find((s) => s.value === t)) == null ? void 0 : x.label.trim()) : i,
								}),
						}),
						e.jsx(T, {
							className: a('w-[var(--radix-select-trigger-width)]', g),
							children: e.jsxs(q, {
								children: [
									l.length > 0 &&
										l.map((s) =>
											j
												? e.jsx(
														C,
														{
															className: a(s.disabled && 'select-none cursor-not-allowed'),
															disabled: s.disabled,
															value: s.value,
															children: e.jsx('div', {
																className: 'flex items-center space-x-2 w-full',
																children: e.jsxs('div', {
																	className: 'flex flex-col mr-2 w-full',
																	children: [
																		e.jsx('span', { className: 'break-words', children: s.label }),
																		s.description &&
																			e.jsx('span', {
																				className: 'text-sm text-gray-500 break-words whitespace-normal',
																				children: s.description,
																			}),
																	],
																}),
															}),
														},
														s.value,
													)
												: e.jsx(
														h,
														{
															className: a(
																'w-full',
																'cursor-pointer',
																s.disabled && 'select-none cursor-not-allowed',
																'flex items-center space-x-2 justify-between w-full',
															),
															disabled: s.disabled,
															value: s.value,
															children: e.jsxs('div', {
																className: a(
																	'flex w-full items-center space-x-2 justify-between',
																	s.disabled && 'opacity-50 pointer-events-none',
																	s.suffixIcon && 'pr-8',
																	f && '!pl-0',
																),
																children: [
																	s.prefixIcon && s.prefixIcon,
																	e.jsxs('div', {
																		className: a('flex flex-col w-full', !f && 'mr-0'),
																		children: [
																			e.jsx('span', { className: 'break-words', children: s.label }),
																			s.description &&
																				e.jsx('span', {
																					className: 'text-sm text-gray-500 break-words whitespace-normal',
																					children: s.description,
																				}),
																		],
																	}),
																	s.suffixIcon &&
																		e.jsx('span', { className: 'absolute right-2 top-1/2 -translate-y-1/2', children: s.suffixIcon }),
																],
															}),
														},
														s.value,
													),
										),
									l.length === 0 &&
										m &&
										e.jsx(h, {
											value: 'no-items',
											disabled: !0,
											children: e.jsx('div', {
												className: 'flex items-center space-x-2 w-full',
												children: e.jsx('div', {
													className: 'flex flex-col mr-2 w-full',
													children: e.jsx('span', { className: 'break-words', children: m }),
												}),
											}),
										}),
								],
							}),
						}),
					],
				}),
				n && e.jsx('p', { className: 'text-sm text-muted-foreground break-words', children: n }),
				o && e.jsx('p', { className: 'text-sm text-destructive break-words', children: o }),
			],
		});
	};
V.__docgenInfo = {
	description: '',
	methods: [],
	displayName: 'FlexPriceSelect',
	props: {
		options: {
			required: !0,
			tsType: { name: 'Array', elements: [{ name: 'SelectOption' }], raw: 'SelectOption[]' },
			description: 'Array of options to select from',
		},
		value: { required: !1, tsType: { name: 'string' }, description: 'Currently selected value' },
		defaultOpen: { required: !1, tsType: { name: 'boolean' }, description: 'Whether the select is open by default' },
		placeholder: {
			required: !1,
			tsType: { name: 'string' },
			description: 'Placeholder text when no option is selected',
			defaultValue: { value: "'Select an option'", computed: !1 },
		},
		label: {
			required: !1,
			tsType: { name: 'string' },
			description: 'Label for the select input',
			defaultValue: { value: "''", computed: !1 },
		},
		required: {
			required: !1,
			tsType: { name: 'boolean' },
			description: 'Whether the select is required',
			defaultValue: { value: 'false', computed: !1 },
		},
		description: { required: !1, tsType: { name: 'string' }, description: 'Helper description text' },
		error: { required: !1, tsType: { name: 'string' }, description: 'Error message to display' },
		onChange: {
			required: !1,
			tsType: {
				name: 'signature',
				type: 'function',
				raw: '(value: string) => void',
				signature: { arguments: [{ type: { name: 'string' }, name: 'value' }], return: { name: 'void' } },
			},
			description: 'Callback when selection changes',
		},
		disabled: {
			required: !1,
			tsType: { name: 'boolean' },
			description: 'Whether the select is disabled',
			defaultValue: { value: 'false', computed: !1 },
		},
		isRadio: { required: !1, tsType: { name: 'boolean' }, description: 'Render as a radio group inside the select dropdown' },
		className: { required: !1, tsType: { name: 'string' }, description: 'Additional CSS classes for the container' },
		noOptionsText: { required: !1, tsType: { name: 'string' }, description: 'Text to show when options array is empty' },
		hideSelectedTick: {
			required: !1,
			tsType: { name: 'boolean' },
			description: 'Hide the checkmark for the selected item',
			defaultValue: { value: 'true', computed: !1 },
		},
		trigger: { required: !1, tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' }, description: 'Custom trigger element' },
		contentClassName: { required: !1, tsType: { name: 'string' }, description: 'Additional CSS classes for the dropdown content' },
	},
};
export { V as F };
