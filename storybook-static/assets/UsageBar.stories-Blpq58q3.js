import { j as e } from './jsx-runtime-Cf8x2fCZ.js';
import { c as d } from './utils-BLSKlp9E.js';
import './index-yBjzXJbu.js';
const r = ({
	value: i,
	max: u,
	unit: C = '',
	warningThreshold: U = 80,
	dangerThreshold: m = 95,
	showPercentage: P = !0,
	showFraction: V = !0,
	className: A,
}) => {
	const a = Math.min(Math.max((i / u) * 100, 0), 100);
	let c = 'bg-success';
	return (
		a >= m ? (c = 'bg-destructive') : a >= U && (c = 'bg-warning'),
		e.jsxs('div', {
			className: d('w-full space-y-2', A),
			children: [
				e.jsxs('div', {
					className: 'flex justify-between items-end',
					children: [
						V &&
							e.jsxs('span', {
								className: 'text-sm font-medium text-foreground',
								children: [i.toLocaleString(), ' / ', u.toLocaleString(), ' ', C],
							}),
						P &&
							e.jsxs('span', {
								className: d('text-xs font-semibold', a >= m ? 'text-destructive' : 'text-muted-foreground'),
								children: [Math.round(a), '%'],
							}),
					],
				}),
				e.jsx('div', {
					className: 'h-2 w-full bg-secondary rounded-full overflow-hidden',
					children: e.jsx('div', {
						className: d('h-full transition-all duration-500 ease-out', c),
						style: { width: `${a}%` },
						role: 'progressbar',
						'aria-valuenow': i,
						'aria-valuemin': 0,
						'aria-valuemax': u,
					}),
				}),
			],
		})
	);
};
r.__docgenInfo = {
	description: `A progress bar component specifically designed to show usage against a limit.
Changes color based on the percentage of usage.`,
	methods: [],
	displayName: 'UsageBar',
	props: {
		value: { required: !0, tsType: { name: 'number' }, description: 'The current usage value' },
		max: { required: !0, tsType: { name: 'number' }, description: 'The maximum allowed value (limit)' },
		unit: {
			required: !1,
			tsType: { name: 'string' },
			description: "Optional unit label (e.g., 'API calls', 'credits')",
			defaultValue: { value: "''", computed: !1 },
		},
		warningThreshold: {
			required: !1,
			tsType: { name: 'number' },
			description: "Threshold percentage after which the bar turns 'warning' color (default 80)",
			defaultValue: { value: '80', computed: !1 },
		},
		dangerThreshold: {
			required: !1,
			tsType: { name: 'number' },
			description: "Threshold percentage after which the bar turns 'danger' color (default 95)",
			defaultValue: { value: '95', computed: !1 },
		},
		showPercentage: {
			required: !1,
			tsType: { name: 'boolean' },
			description: 'Whether to show the percentage text',
			defaultValue: { value: 'true', computed: !1 },
		},
		showFraction: {
			required: !1,
			tsType: { name: 'boolean' },
			description: 'Whether to show the fraction (e.g., "50 / 100")',
			defaultValue: { value: 'true', computed: !1 },
		},
		className: { required: !1, tsType: { name: 'string' }, description: 'Additional CSS classes for the container' },
	},
};
const _ = {
		title: 'Molecules/UsageBar',
		component: r,
		parameters: { layout: 'padded' },
		tags: ['autodocs'],
		argTypes: { value: { control: { type: 'number', min: 0 } }, max: { control: { type: 'number', min: 1 } } },
		args: { value: 450, max: 1e3, unit: 'API Calls' },
	},
	s = { args: { value: 450, max: 1e3 } },
	t = { args: { value: 850, max: 1e3 } },
	n = { args: { value: 980, max: 1e3 } },
	o = { args: { value: 300, max: 1e3, showPercentage: !1, showFraction: !1 } },
	l = {
		render: () =>
			e.jsxs('div', {
				className: 'space-y-6 max-w-md',
				children: [
					e.jsx(r, { title: 'Storage', value: 20, max: 100, unit: 'GB' }),
					e.jsx(r, { title: 'Bandwidth', value: 85, max: 100, unit: 'TB' }),
					e.jsx(r, { title: 'Compute', value: 97, max: 100, unit: 'hrs' }),
				],
			}),
	};
var p, g, h;
s.parameters = {
	...s.parameters,
	docs: {
		...((p = s.parameters) == null ? void 0 : p.docs),
		source: {
			originalSource: `{
  args: {
    value: 450,
    max: 1000
  }
}`,
			...((h = (g = s.parameters) == null ? void 0 : g.docs) == null ? void 0 : h.source),
		},
	},
};
var f, x, v;
t.parameters = {
	...t.parameters,
	docs: {
		...((f = t.parameters) == null ? void 0 : f.docs),
		source: {
			originalSource: `{
  args: {
    value: 850,
    max: 1000
  }
}`,
			...((v = (x = t.parameters) == null ? void 0 : x.docs) == null ? void 0 : v.source),
		},
	},
};
var w, b, y;
n.parameters = {
	...n.parameters,
	docs: {
		...((w = n.parameters) == null ? void 0 : w.docs),
		source: {
			originalSource: `{
  args: {
    value: 980,
    max: 1000
  }
}`,
			...((y = (b = n.parameters) == null ? void 0 : b.docs) == null ? void 0 : y.source),
		},
	},
};
var T, j, S;
o.parameters = {
	...o.parameters,
	docs: {
		...((T = o.parameters) == null ? void 0 : T.docs),
		source: {
			originalSource: `{
  args: {
    value: 300,
    max: 1000,
    showPercentage: false,
    showFraction: false
  }
}`,
			...((S = (j = o.parameters) == null ? void 0 : j.docs) == null ? void 0 : S.source),
		},
	},
};
var B, N, q;
l.parameters = {
	...l.parameters,
	docs: {
		...((B = l.parameters) == null ? void 0 : B.docs),
		source: {
			originalSource: `{
  render: () => <div className="space-y-6 max-w-md">
      <UsageBar title="Storage" value={20} max={100} unit="GB" />
      <UsageBar title="Bandwidth" value={85} max={100} unit="TB" />
      <UsageBar title="Compute" value={97} max={100} unit="hrs" />
    </div>
}`,
			...((q = (N = l.parameters) == null ? void 0 : N.docs) == null ? void 0 : q.source),
		},
	},
};
const F = ['Default', 'Warning', 'Critical', 'NoLabels', 'Stacked'];
export { n as Critical, s as Default, o as NoLabels, l as Stacked, t as Warning, F as __namedExportsOrder, _ as default };
