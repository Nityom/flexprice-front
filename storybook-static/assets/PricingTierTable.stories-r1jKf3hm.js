import { P as d } from './PricingTierTable-D019JJFH.js';
import './jsx-runtime-Cf8x2fCZ.js';
import './index-yBjzXJbu.js';
import './utils-BLSKlp9E.js';
import './badge-h_lvg-2o.js';
import './index-1evVQkiP.js';
const N = { title: 'Organisms/PricingTierTable', component: d, parameters: { layout: 'centered' }, tags: ['autodocs'] },
	r = {
		args: {
			unitName: 'API Call',
			currency: '$',
			model: 'graduated',
			tiers: [
				{ from: 0, to: 1e3, unitPrice: 0.05 },
				{ from: 1001, to: 1e4, unitPrice: 0.03 },
				{ from: 10001, to: 1e5, unitPrice: 0.01 },
				{ from: 100001, to: null, unitPrice: 0.005 },
			],
		},
	},
	n = {
		args: {
			unitName: 'Seat',
			currency: '$',
			model: 'volume',
			tiers: [
				{ from: 1, to: 10, unitPrice: 20, flatFee: 50 },
				{ from: 11, to: 50, unitPrice: 15, flatFee: 100 },
				{ from: 51, to: null, unitPrice: 10, flatFee: 200 },
			],
		},
	},
	e = {
		args: {
			unitName: 'Unit',
			currency: 'â‚¹',
			tiers: [
				{ from: 0, to: 100, unitPrice: 10 },
				{ from: 101, to: 500, unitPrice: 8.5 },
				{ from: 501, to: null, unitPrice: 7 },
			],
		},
	};
var t, o, i;
r.parameters = {
	...r.parameters,
	docs: {
		...((t = r.parameters) == null ? void 0 : t.docs),
		source: {
			originalSource: `{
  args: {
    unitName: 'API Call',
    currency: '$',
    model: 'graduated',
    tiers: [{
      from: 0,
      to: 1000,
      unitPrice: 0.05
    }, {
      from: 1001,
      to: 10000,
      unitPrice: 0.03
    }, {
      from: 10001,
      to: 100000,
      unitPrice: 0.01
    }, {
      from: 100001,
      to: null,
      unitPrice: 0.005
    }]
  }
}`,
			...((i = (o = r.parameters) == null ? void 0 : o.docs) == null ? void 0 : i.source),
		},
	},
};
var a, c, m;
n.parameters = {
	...n.parameters,
	docs: {
		...((a = n.parameters) == null ? void 0 : a.docs),
		source: {
			originalSource: `{
  args: {
    unitName: 'Seat',
    currency: '$',
    model: 'volume',
    tiers: [{
      from: 1,
      to: 10,
      unitPrice: 20,
      flatFee: 50
    }, {
      from: 11,
      to: 50,
      unitPrice: 15,
      flatFee: 100
    }, {
      from: 51,
      to: null,
      unitPrice: 10,
      flatFee: 200
    }]
  }
}`,
			...((m = (c = n.parameters) == null ? void 0 : c.docs) == null ? void 0 : m.source),
		},
	},
};
var u, s, l;
e.parameters = {
	...e.parameters,
	docs: {
		...((u = e.parameters) == null ? void 0 : u.docs),
		source: {
			originalSource: `{
  args: {
    unitName: 'Unit',
    currency: 'â‚¹',
    tiers: [{
      from: 0,
      to: 100,
      unitPrice: 10.00
    }, {
      from: 101,
      to: 500,
      unitPrice: 8.50
    }, {
      from: 501,
      to: null,
      unitPrice: 7.00
    }]
  }
}`,
			...((l = (s = e.parameters) == null ? void 0 : s.docs) == null ? void 0 : l.source),
		},
	},
};
const S = ['Graduated', 'WithFlatFee', 'IndiaPricing'];
export { r as Graduated, e as IndiaPricing, n as WithFlatFee, S as __namedExportsOrder, N as default };
