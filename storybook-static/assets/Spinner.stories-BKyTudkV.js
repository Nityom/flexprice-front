import { S as C } from './Spinner-BfFjocAz.js';
import './jsx-runtime-Cf8x2fCZ.js';
import './index-yBjzXJbu.js';
const A = {
		title: 'Atoms/Spinner',
		component: C,
		parameters: { layout: 'centered' },
		tags: ['autodocs'],
		argTypes: {
			size: { control: { type: 'number', min: 12, max: 100, step: 4 }, description: 'The size of the spinner in pixels' },
			className: { control: 'text', description: 'Additional CSS classes for styling (e.g., text-blue-500)' },
		},
		args: { size: 24 },
	},
	e = { args: { size: 24 } },
	s = { args: { size: 16 } },
	r = { args: { size: 48 } },
	a = { args: { size: 32, className: 'text-blue-600' } },
	o = { args: { size: 32, className: 'text-zinc-950' } };
var t, n, c;
e.parameters = {
	...e.parameters,
	docs: {
		...((t = e.parameters) == null ? void 0 : t.docs),
		source: {
			originalSource: `{
  args: {
    size: 24
  }
}`,
			...((c = (n = e.parameters) == null ? void 0 : n.docs) == null ? void 0 : c.source),
		},
	},
};
var i, m, p;
s.parameters = {
	...s.parameters,
	docs: {
		...((i = s.parameters) == null ? void 0 : i.docs),
		source: {
			originalSource: `{
  args: {
    size: 16
  }
}`,
			...((p = (m = s.parameters) == null ? void 0 : m.docs) == null ? void 0 : p.source),
		},
	},
};
var l, d, u;
r.parameters = {
	...r.parameters,
	docs: {
		...((l = r.parameters) == null ? void 0 : l.docs),
		source: {
			originalSource: `{
  args: {
    size: 48
  }
}`,
			...((u = (d = r.parameters) == null ? void 0 : d.docs) == null ? void 0 : u.source),
		},
	},
};
var g, z, S;
a.parameters = {
	...a.parameters,
	docs: {
		...((g = a.parameters) == null ? void 0 : g.docs),
		source: {
			originalSource: `{
  args: {
    size: 32,
    className: 'text-blue-600'
  }
}`,
			...((S = (z = a.parameters) == null ? void 0 : z.docs) == null ? void 0 : S.source),
		},
	},
};
var x, f, y;
o.parameters = {
	...o.parameters,
	docs: {
		...((x = o.parameters) == null ? void 0 : x.docs),
		source: {
			originalSource: `{
  args: {
    size: 32,
    className: 'text-zinc-950'
  }
}`,
			...((y = (f = o.parameters) == null ? void 0 : f.docs) == null ? void 0 : y.source),
		},
	},
};
const B = ['Default', 'Small', 'Large', 'CustomColor', 'BrandPrimary'];
export { o as BrandPrimary, a as CustomColor, e as Default, r as Large, s as Small, B as __namedExportsOrder, A as default };
