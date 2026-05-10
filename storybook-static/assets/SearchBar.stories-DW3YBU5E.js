import { j as e } from './jsx-runtime-Cf8x2fCZ.js';
import { r } from './index-t5q4d8OJ.js';
import { I as D } from './Input-Z5ELXsou.js';
import { c as w } from './utils-BLSKlp9E.js';
import { X as C, S as E } from './x-BDoriEd4.js';
import './index-yBjzXJbu.js';
import './createLucideIcon-DYb0enIN.js';
const u = ({ value: a = '', onSearch: s, placeholder: l = 'Search...', debounceMs: d = 300, disabled: m = !1, className: N }) => {
	const [t, i] = r.useState(a);
	(r.useEffect(() => {
		i(a);
	}, [a]),
		r.useEffect(() => {
			const T = setTimeout(() => {
				s && s(t);
			}, d);
			return () => clearTimeout(T);
		}, [t, s, d]));
	const j = r.useCallback(() => {
		i('');
	}, []);
	return e.jsx('div', {
		className: w('relative w-full max-w-sm', N),
		children: e.jsx(D, {
			value: t,
			onChange: i,
			placeholder: l,
			disabled: m,
			inputPrefix: e.jsx(E, { className: 'text-muted-foreground h-4 w-4' }),
			suffix:
				t && !m
					? e.jsx('button', {
							onClick: j,
							className: 'hover:bg-accent rounded-full p-0.5 transition-colors',
							'aria-label': 'Clear search',
							children: e.jsx(C, { className: 'h-3.5 w-3.5 text-muted-foreground' }),
						})
					: null,
			className: 'pr-8',
		}),
	});
};
u.__docgenInfo = {
	description: 'A specialized search input component with built-in debouncing and search icons.',
	methods: [],
	displayName: 'SearchBar',
	props: {
		value: { required: !1, tsType: { name: 'string' }, description: 'Initial search value', defaultValue: { value: "''", computed: !1 } },
		onSearch: {
			required: !1,
			tsType: {
				name: 'signature',
				type: 'function',
				raw: '(value: string) => void',
				signature: { arguments: [{ type: { name: 'string' }, name: 'value' }], return: { name: 'void' } },
			},
			description: 'Callback when the search value changes (debounced)',
		},
		placeholder: {
			required: !1,
			tsType: { name: 'string' },
			description: 'Placeholder text',
			defaultValue: { value: "'Search...'", computed: !1 },
		},
		debounceMs: {
			required: !1,
			tsType: { name: 'number' },
			description: 'Delay in milliseconds for debouncing (default 300)',
			defaultValue: { value: '300', computed: !1 },
		},
		disabled: {
			required: !1,
			tsType: { name: 'boolean' },
			description: 'Whether the search bar is disabled',
			defaultValue: { value: 'false', computed: !1 },
		},
		className: { required: !1, tsType: { name: 'string' }, description: 'Additional CSS classes' },
	},
};
const A = {
		title: 'Molecules/SearchBar',
		component: u,
		parameters: { layout: 'centered' },
		tags: ['autodocs'],
		argTypes: {
			debounceMs: { control: { type: 'range', min: 0, max: 2e3, step: 100 }, description: 'Delay in ms before triggering onSearch' },
		},
	},
	o = {
		render: (a) => {
			const [s, l] = r.useState('');
			return e.jsxs('div', {
				className: 'w-[400px] space-y-4',
				children: [
					e.jsx(u, { ...a, onSearch: l }),
					e.jsxs('p', {
						className: 'text-sm text-muted-foreground',
						children: [
							'Debounced Search Term: ',
							e.jsx('span', { className: 'font-mono font-bold text-foreground', children: s || 'None' }),
						],
					}),
				],
			});
		},
		args: { placeholder: 'Search invoices, customers...' },
	},
	n = { args: { placeholder: 'Fast debounce (100ms)', debounceMs: 100 } },
	c = { args: { disabled: !0, value: 'Existing search' } };
var p, h, f;
o.parameters = {
	...o.parameters,
	docs: {
		...((p = o.parameters) == null ? void 0 : p.docs),
		source: {
			originalSource: `{
  render: args => {
    const [search, setSearch] = useState('');
    return <div className="w-[400px] space-y-4">
        <SearchBar {...args} onSearch={setSearch} />
        <p className="text-sm text-muted-foreground">
          Debounced Search Term: <span className="font-mono font-bold text-foreground">{search || 'None'}</span>
        </p>
      </div>;
  },
  args: {
    placeholder: 'Search invoices, customers...'
  }
}`,
			...((f = (h = o.parameters) == null ? void 0 : h.docs) == null ? void 0 : f.source),
		},
	},
};
var g, x, b;
n.parameters = {
	...n.parameters,
	docs: {
		...((g = n.parameters) == null ? void 0 : g.docs),
		source: {
			originalSource: `{
  args: {
    placeholder: 'Fast debounce (100ms)',
    debounceMs: 100
  }
}`,
			...((b = (x = n.parameters) == null ? void 0 : x.docs) == null ? void 0 : b.source),
		},
	},
};
var S, v, y;
c.parameters = {
	...c.parameters,
	docs: {
		...((S = c.parameters) == null ? void 0 : S.docs),
		source: {
			originalSource: `{
  args: {
    disabled: true,
    value: 'Existing search'
  }
}`,
			...((y = (v = c.parameters) == null ? void 0 : v.docs) == null ? void 0 : y.source),
		},
	},
};
const F = ['Default', 'CustomDebounce', 'Disabled'];
export { n as CustomDebounce, o as Default, c as Disabled, F as __namedExportsOrder, A as default };
