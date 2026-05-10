import { j as a } from './jsx-runtime-Cf8x2fCZ.js';
import { r as y } from './index-t5q4d8OJ.js';
import { c } from './utils-BLSKlp9E.js';
import { P as C, a as P, B as R, f as i, b as k, C as S, c as w } from './popover-DCybn2PX.js';
import { C as L } from './calendar-BmUthEcD.js';
import './index-yBjzXJbu.js';
import './index-BNNQlCw5.js';
import './index-BEq13kdC.js';
import './index-1evVQkiP.js';
import './select-1EArqANp.js';
import './index-Ds86VQ4X.js';
import './index-BLHw34Di.js';
import './index-vJvtiM9z.js';
import './createLucideIcon-DYb0enIN.js';
import './index-MpCb0xCw.js';
function d({ className: t, value: e, onChange: r, placeholder: j = 'Pick a date range', disabled: b = !1 }) {
	return a.jsx('div', {
		className: c('grid gap-2', t),
		children: a.jsxs(C, {
			children: [
				a.jsx(P, {
					asChild: !0,
					children: a.jsxs(R, {
						id: 'date',
						variant: 'outline',
						size: 'sm',
						disabled: b,
						className: c('w-[300px] justify-start text-left font-normal h-9 px-3', !e && 'text-muted-foreground'),
						children: [
							a.jsx(L, { className: 'mr-2 h-4 w-4' }),
							e != null && e.from
								? e.to
									? a.jsxs(a.Fragment, { children: [i(e.from, 'LLL dd, y'), ' -', ' ', i(e.to, 'LLL dd, y')] })
									: i(e.from, 'LLL dd, y')
								: a.jsx('span', { children: j }),
						],
					}),
				}),
				a.jsx(k, {
					className: 'w-auto p-0',
					align: 'start',
					children: a.jsx(S, {
						initialFocus: !0,
						mode: 'range',
						defaultMonth: e == null ? void 0 : e.from,
						selected: e,
						onSelect: r,
						numberOfMonths: 2,
					}),
				}),
			],
		}),
	});
}
d.__docgenInfo = {
	description: `A composite component that allows users to select a range of dates.
Uses Radix Popover and react-day-picker.`,
	methods: [],
	displayName: 'DateRangePicker',
	props: {
		value: { required: !1, tsType: { name: 'DateRange' }, description: 'Initial date range' },
		onChange: {
			required: !1,
			tsType: {
				name: 'signature',
				type: 'function',
				raw: '(range: DateRange | undefined) => void',
				signature: {
					arguments: [
						{
							type: { name: 'union', raw: 'DateRange | undefined', elements: [{ name: 'DateRange' }, { name: 'undefined' }] },
							name: 'range',
						},
					],
					return: { name: 'void' },
				},
			},
			description: 'Callback when the range changes',
		},
		placeholder: {
			required: !1,
			tsType: { name: 'string' },
			description: 'Placeholder text when no range is selected',
			defaultValue: { value: "'Pick a date range'", computed: !1 },
		},
		className: { required: !1, tsType: { name: 'string' }, description: 'Additional CSS classes for the trigger button' },
		disabled: {
			required: !1,
			tsType: { name: 'boolean' },
			description: 'Whether the picker is disabled',
			defaultValue: { value: 'false', computed: !1 },
		},
	},
};
const W = {
		title: 'Molecules/DateRangePicker',
		component: d,
		parameters: { layout: 'centered' },
		tags: ['autodocs'],
		argTypes: { disabled: { control: 'boolean' } },
	},
	n = {
		render: (t) => {
			const [e, r] = y.useState({ from: new Date(2024, 0, 1), to: w(new Date(2024, 0, 1), 20) });
			return a.jsx(d, { ...t, value: e, onChange: r });
		},
	},
	s = {
		render: (t) => {
			const [e, r] = y.useState(void 0);
			return a.jsx(d, { ...t, value: e, onChange: r });
		},
	},
	o = { args: { disabled: !0, value: { from: new Date(), to: w(new Date(), 7) } } };
var m, p, l;
n.parameters = {
	...n.parameters,
	docs: {
		...((m = n.parameters) == null ? void 0 : m.docs),
		source: {
			originalSource: `{
  render: args => {
    const [date, setDate] = useState<DateRange | undefined>({
      from: new Date(2024, 0, 1),
      to: addDays(new Date(2024, 0, 1), 20)
    });
    return <DateRangePicker {...args} value={date} onChange={setDate} />;
  }
}`,
			...((l = (p = n.parameters) == null ? void 0 : p.docs) == null ? void 0 : l.source),
		},
	},
};
var u, g, f;
s.parameters = {
	...s.parameters,
	docs: {
		...((u = s.parameters) == null ? void 0 : u.docs),
		source: {
			originalSource: `{
  render: args => {
    const [date, setDate] = useState<DateRange | undefined>(undefined);
    return <DateRangePicker {...args} value={date} onChange={setDate} />;
  }
}`,
			...((f = (g = s.parameters) == null ? void 0 : g.docs) == null ? void 0 : f.source),
		},
	},
};
var D, h, x;
o.parameters = {
	...o.parameters,
	docs: {
		...((D = o.parameters) == null ? void 0 : D.docs),
		source: {
			originalSource: `{
  args: {
    disabled: true,
    value: {
      from: new Date(),
      to: addDays(new Date(), 7)
    }
  }
}`,
			...((x = (h = o.parameters) == null ? void 0 : h.docs) == null ? void 0 : x.source),
		},
	},
};
const $ = ['Default', 'Empty', 'Disabled'];
export { n as Default, o as Disabled, s as Empty, $ as __namedExportsOrder, W as default };
