import { j as m } from './jsx-runtime-Cf8x2fCZ.js';
import { r as a, R as ne } from './index-t5q4d8OJ.js';
import { I as vn, r as ut } from './index-Ds86VQ4X.js';
import {
	e as dt,
	h as Ve,
	P as M,
	u as Y,
	b as Ze,
	R as hn,
	a as Ge,
	d as ft,
	V as gn,
	A as Sn,
	c as A,
	D as yn,
	C as wn,
	g as xn,
} from './index-vJvtiM9z.js';
import { c as pt, u as D } from './index-BEq13kdC.js';
import { c as Z } from './utils-BLSKlp9E.js';
import { c as Ye } from './createLucideIcon-DYb0enIN.js';
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cn = Ye('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mt = Ye('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bn = Ye('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
function Qe(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
function Je(e) {
	const t = En(e),
		n = a.forwardRef((r, o) => {
			const { children: s, ...l } = r,
				c = a.Children.toArray(s),
				u = c.find(Rn);
			if (u) {
				const d = u.props.children,
					g = c.map((h) =>
						h === u ? (a.Children.count(d) > 1 ? a.Children.only(null) : a.isValidElement(d) ? d.props.children : null) : h,
					);
				return m.jsx(t, { ...l, ref: o, children: a.isValidElement(d) ? a.cloneElement(d, void 0, g) : null });
			}
			return m.jsx(t, { ...l, ref: o, children: s });
		});
	return ((n.displayName = `${e}.Slot`), n);
}
function En(e) {
	const t = a.forwardRef((n, r) => {
		const { children: o, ...s } = n;
		if (a.isValidElement(o)) {
			const l = Nn(o),
				c = Tn(s, o.props);
			return (o.type !== a.Fragment && (c.ref = r ? pt(r, l) : l), a.cloneElement(o, c));
		}
		return a.Children.count(o) > 1 ? a.Children.only(null) : null;
	});
	return ((t.displayName = `${e}.SlotClone`), t);
}
var In = Symbol('radix.slottable');
function Rn(e) {
	return a.isValidElement(e) && typeof e.type == 'function' && '__radixId' in e.type && e.type.__radixId === In;
}
function Tn(e, t) {
	const n = { ...t };
	for (const r in t) {
		const o = e[r],
			s = t[r];
		/^on[A-Z]/.test(r)
			? o && s
				? (n[r] = (...c) => {
						const u = s(...c);
						return (o(...c), u);
					})
				: o && (n[r] = o)
			: r === 'style'
				? (n[r] = { ...o, ...s })
				: r === 'className' && (n[r] = [o, s].filter(Boolean).join(' '));
	}
	return { ...e, ...n };
}
function Nn(e) {
	var r, o;
	let t = (r = Object.getOwnPropertyDescriptor(e.props, 'ref')) == null ? void 0 : r.get,
		n = t && 'isReactWarning' in t && t.isReactWarning;
	return n
		? e.ref
		: ((t = (o = Object.getOwnPropertyDescriptor(e, 'ref')) == null ? void 0 : o.get),
			(n = t && 'isReactWarning' in t && t.isReactWarning),
			n ? e.props.ref : e.props.ref || e.ref);
}
function Pn(e) {
	const t = e + 'CollectionProvider',
		[n, r] = dt(t),
		[o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
		l = (i) => {
			const { scope: p, children: S } = i,
				f = ne.useRef(null),
				v = ne.useRef(new Map()).current;
			return m.jsx(o, { scope: p, itemMap: v, collectionRef: f, children: S });
		};
	l.displayName = t;
	const c = e + 'CollectionSlot',
		u = Je(c),
		d = ne.forwardRef((i, p) => {
			const { scope: S, children: f } = i,
				v = s(c, S),
				C = D(p, v.collectionRef);
			return m.jsx(u, { ref: C, children: f });
		});
	d.displayName = c;
	const g = e + 'CollectionItemSlot',
		h = 'data-radix-collection-item',
		y = Je(g),
		w = ne.forwardRef((i, p) => {
			const { scope: S, children: f, ...v } = i,
				C = ne.useRef(null),
				E = D(p, C),
				_ = s(g, S);
			return (
				ne.useEffect(() => (_.itemMap.set(C, { ref: C, ...v }), () => void _.itemMap.delete(C))),
				m.jsx(y, { [h]: '', ref: E, children: f })
			);
		});
	w.displayName = g;
	function b(i) {
		const p = s(e + 'CollectionConsumer', i);
		return ne.useCallback(() => {
			const f = p.collectionRef.current;
			if (!f) return [];
			const v = Array.from(f.querySelectorAll(`[${h}]`));
			return Array.from(p.itemMap.values()).sort((_, I) => v.indexOf(_.ref.current) - v.indexOf(I.ref.current));
		}, [p.collectionRef, p.itemMap]);
	}
	return [{ Provider: l, Slot: d, ItemSlot: w }, b, r];
}
var _n = a.createContext(void 0);
function An(e) {
	const t = a.useContext(_n);
	return e || t || 'ltr';
}
var Me = 0;
function Mn() {
	a.useEffect(() => {
		const e = document.querySelectorAll('[data-radix-focus-guard]');
		return (
			document.body.insertAdjacentElement('afterbegin', e[0] ?? et()),
			document.body.insertAdjacentElement('beforeend', e[1] ?? et()),
			Me++,
			() => {
				(Me === 1 && document.querySelectorAll('[data-radix-focus-guard]').forEach((t) => t.remove()), Me--);
			}
		);
	}, []);
}
function et() {
	const e = document.createElement('span');
	return (
		e.setAttribute('data-radix-focus-guard', ''),
		(e.tabIndex = 0),
		(e.style.outline = 'none'),
		(e.style.opacity = '0'),
		(e.style.position = 'fixed'),
		(e.style.pointerEvents = 'none'),
		e
	);
}
var Oe = 'focusScope.autoFocusOnMount',
	je = 'focusScope.autoFocusOnUnmount',
	tt = { bubbles: !1, cancelable: !0 },
	On = 'FocusScope',
	vt = a.forwardRef((e, t) => {
		const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...l } = e,
			[c, u] = a.useState(null),
			d = Ve(o),
			g = Ve(s),
			h = a.useRef(null),
			y = D(t, (i) => u(i)),
			w = a.useRef({
				paused: !1,
				pause() {
					this.paused = !0;
				},
				resume() {
					this.paused = !1;
				},
			}).current;
		(a.useEffect(() => {
			if (r) {
				let i = function (v) {
						if (w.paused || !c) return;
						const C = v.target;
						c.contains(C) ? (h.current = C) : q(h.current, { select: !0 });
					},
					p = function (v) {
						if (w.paused || !c) return;
						const C = v.relatedTarget;
						C !== null && (c.contains(C) || q(h.current, { select: !0 }));
					},
					S = function (v) {
						if (document.activeElement === document.body) for (const E of v) E.removedNodes.length > 0 && q(c);
					};
				(document.addEventListener('focusin', i), document.addEventListener('focusout', p));
				const f = new MutationObserver(S);
				return (
					c && f.observe(c, { childList: !0, subtree: !0 }),
					() => {
						(document.removeEventListener('focusin', i), document.removeEventListener('focusout', p), f.disconnect());
					}
				);
			}
		}, [r, c, w.paused]),
			a.useEffect(() => {
				if (c) {
					rt.add(w);
					const i = document.activeElement;
					if (!c.contains(i)) {
						const S = new CustomEvent(Oe, tt);
						(c.addEventListener(Oe, d),
							c.dispatchEvent(S),
							S.defaultPrevented || (jn(Vn(ht(c)), { select: !0 }), document.activeElement === i && q(c)));
					}
					return () => {
						(c.removeEventListener(Oe, d),
							setTimeout(() => {
								const S = new CustomEvent(je, tt);
								(c.addEventListener(je, g),
									c.dispatchEvent(S),
									S.defaultPrevented || q(i ?? document.body, { select: !0 }),
									c.removeEventListener(je, g),
									rt.remove(w));
							}, 0));
					};
				}
			}, [c, d, g, w]));
		const b = a.useCallback(
			(i) => {
				if ((!n && !r) || w.paused) return;
				const p = i.key === 'Tab' && !i.altKey && !i.ctrlKey && !i.metaKey,
					S = document.activeElement;
				if (p && S) {
					const f = i.currentTarget,
						[v, C] = kn(f);
					v && C
						? !i.shiftKey && S === C
							? (i.preventDefault(), n && q(v, { select: !0 }))
							: i.shiftKey && S === v && (i.preventDefault(), n && q(C, { select: !0 }))
						: S === f && i.preventDefault();
				}
			},
			[n, r, w.paused],
		);
		return m.jsx(M.div, { tabIndex: -1, ...l, ref: y, onKeyDown: b });
	});
vt.displayName = On;
function jn(e, { select: t = !1 } = {}) {
	const n = document.activeElement;
	for (const r of e) if ((q(r, { select: t }), document.activeElement !== n)) return;
}
function kn(e) {
	const t = ht(e),
		n = nt(t, e),
		r = nt(t.reverse(), e);
	return [n, r];
}
function ht(e) {
	const t = [],
		n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
			acceptNode: (r) => {
				const o = r.tagName === 'INPUT' && r.type === 'hidden';
				return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
			},
		});
	for (; n.nextNode(); ) t.push(n.currentNode);
	return t;
}
function nt(e, t) {
	for (const n of e) if (!Ln(n, { upTo: t })) return n;
}
function Ln(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === 'hidden') return !0;
	for (; e; ) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === 'none') return !0;
		e = e.parentElement;
	}
	return !1;
}
function Dn(e) {
	return e instanceof HTMLInputElement && 'select' in e;
}
function q(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		const n = document.activeElement;
		(e.focus({ preventScroll: !0 }), e !== n && Dn(e) && t && e.select());
	}
}
var rt = Bn();
function Bn() {
	let e = [];
	return {
		add(t) {
			const n = e[0];
			(t !== n && (n == null || n.pause()), (e = ot(e, t)), e.unshift(t));
		},
		remove(t) {
			var n;
			((e = ot(e, t)), (n = e[0]) == null || n.resume());
		},
	};
}
function ot(e, t) {
	const n = [...e],
		r = n.indexOf(t);
	return (r !== -1 && n.splice(r, 1), n);
}
function Vn(e) {
	return e.filter((t) => t.tagName !== 'A');
}
var Fn = 'Portal',
	gt = a.forwardRef((e, t) => {
		var c;
		const { container: n, ...r } = e,
			[o, s] = a.useState(!1);
		Y(() => s(!0), []);
		const l = n || (o && ((c = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : c.body));
		return l ? vn.createPortal(m.jsx(M.div, { ...r, ref: t }), l) : null;
	});
gt.displayName = Fn;
function Wn(e) {
	const t = Hn(e),
		n = a.forwardRef((r, o) => {
			const { children: s, ...l } = r,
				c = a.Children.toArray(s),
				u = c.find(Kn);
			if (u) {
				const d = u.props.children,
					g = c.map((h) =>
						h === u ? (a.Children.count(d) > 1 ? a.Children.only(null) : a.isValidElement(d) ? d.props.children : null) : h,
					);
				return m.jsx(t, { ...l, ref: o, children: a.isValidElement(d) ? a.cloneElement(d, void 0, g) : null });
			}
			return m.jsx(t, { ...l, ref: o, children: s });
		});
	return ((n.displayName = `${e}.Slot`), n);
}
function Hn(e) {
	const t = a.forwardRef((n, r) => {
		const { children: o, ...s } = n;
		if (a.isValidElement(o)) {
			const l = Gn(o),
				c = $n(s, o.props);
			return (o.type !== a.Fragment && (c.ref = r ? pt(r, l) : l), a.cloneElement(o, c));
		}
		return a.Children.count(o) > 1 ? a.Children.only(null) : null;
	});
	return ((t.displayName = `${e}.SlotClone`), t);
}
var Un = Symbol('radix.slottable');
function Kn(e) {
	return a.isValidElement(e) && typeof e.type == 'function' && '__radixId' in e.type && e.type.__radixId === Un;
}
function $n(e, t) {
	const n = { ...t };
	for (const r in t) {
		const o = e[r],
			s = t[r];
		/^on[A-Z]/.test(r)
			? o && s
				? (n[r] = (...c) => {
						const u = s(...c);
						return (o(...c), u);
					})
				: o && (n[r] = o)
			: r === 'style'
				? (n[r] = { ...o, ...s })
				: r === 'className' && (n[r] = [o, s].filter(Boolean).join(' '));
	}
	return { ...e, ...n };
}
function Gn(e) {
	var r, o;
	let t = (r = Object.getOwnPropertyDescriptor(e.props, 'ref')) == null ? void 0 : r.get,
		n = t && 'isReactWarning' in t && t.isReactWarning;
	return n
		? e.ref
		: ((t = (o = Object.getOwnPropertyDescriptor(e, 'ref')) == null ? void 0 : o.get),
			(n = t && 'isReactWarning' in t && t.isReactWarning),
			n ? e.props.ref : e.props.ref || e.ref);
}
function Yn(e) {
	const t = a.useRef({ value: e, previous: e });
	return a.useMemo(
		() => (t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)), t.current.previous),
		[e],
	);
}
var zn = function (e) {
		if (typeof document > 'u') return null;
		var t = Array.isArray(e) ? e[0] : e;
		return t.ownerDocument.body;
	},
	ce = new WeakMap(),
	ve = new WeakMap(),
	he = {},
	ke = 0,
	St = function (e) {
		return e && (e.host || St(e.parentNode));
	},
	Xn = function (e, t) {
		return t
			.map(function (n) {
				if (e.contains(n)) return n;
				var r = St(n);
				return r && e.contains(r) ? r : (console.error('aria-hidden', n, 'in not contained inside', e, '. Doing nothing'), null);
			})
			.filter(function (n) {
				return !!n;
			});
	},
	qn = function (e, t, n, r) {
		var o = Xn(t, Array.isArray(e) ? e : [e]);
		he[n] || (he[n] = new WeakMap());
		var s = he[n],
			l = [],
			c = new Set(),
			u = new Set(o),
			d = function (h) {
				!h || c.has(h) || (c.add(h), d(h.parentNode));
			};
		o.forEach(d);
		var g = function (h) {
			!h ||
				u.has(h) ||
				Array.prototype.forEach.call(h.children, function (y) {
					if (c.has(y)) g(y);
					else
						try {
							var w = y.getAttribute(r),
								b = w !== null && w !== 'false',
								i = (ce.get(y) || 0) + 1,
								p = (s.get(y) || 0) + 1;
							(ce.set(y, i),
								s.set(y, p),
								l.push(y),
								i === 1 && b && ve.set(y, !0),
								p === 1 && y.setAttribute(n, 'true'),
								b || y.setAttribute(r, 'true'));
						} catch (S) {
							console.error('aria-hidden: cannot operate on ', y, S);
						}
				});
		};
		return (
			g(t),
			c.clear(),
			ke++,
			function () {
				(l.forEach(function (h) {
					var y = ce.get(h) - 1,
						w = s.get(h) - 1;
					(ce.set(h, y), s.set(h, w), y || (ve.has(h) || h.removeAttribute(r), ve.delete(h)), w || h.removeAttribute(n));
				}),
					ke--,
					ke || ((ce = new WeakMap()), (ce = new WeakMap()), (ve = new WeakMap()), (he = {})));
			}
		);
	},
	Zn = function (e, t, n) {
		n === void 0 && (n = 'data-aria-hidden');
		var r = Array.from(Array.isArray(e) ? e : [e]),
			o = zn(e);
		return o
			? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live], script'))), qn(r, o, n, 'aria-hidden'))
			: function () {
					return null;
				};
	},
	H = function () {
		return (
			(H =
				Object.assign ||
				function (t) {
					for (var n, r = 1, o = arguments.length; r < o; r++) {
						n = arguments[r];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
					}
					return t;
				}),
			H.apply(this, arguments)
		);
	};
function yt(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == 'function')
		for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
			t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
	return n;
}
function ho(e, t, n, r) {
	function o(s) {
		return s instanceof n
			? s
			: new n(function (l) {
					l(s);
				});
	}
	return new (n || (n = Promise))(function (s, l) {
		function c(g) {
			try {
				d(r.next(g));
			} catch (h) {
				l(h);
			}
		}
		function u(g) {
			try {
				d(r.throw(g));
			} catch (h) {
				l(h);
			}
		}
		function d(g) {
			g.done ? s(g.value) : o(g.value).then(c, u);
		}
		d((r = r.apply(e, t || [])).next());
	});
}
function Qn(e, t, n) {
	if (n || arguments.length === 2)
		for (var r = 0, o = t.length, s; r < o; r++) (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
	return e.concat(s || Array.prototype.slice.call(t));
}
var ye = 'right-scroll-bar-position',
	we = 'width-before-scroll-bar',
	Jn = 'with-scroll-bars-hidden',
	er = '--removed-body-scroll-bar-size';
function Le(e, t) {
	return (typeof e == 'function' ? e(t) : e && (e.current = t), e);
}
function tr(e, t) {
	var n = a.useState(function () {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(r) {
					var o = n.value;
					o !== r && ((n.value = r), n.callback(r, o));
				},
			},
		};
	})[0];
	return ((n.callback = t), n.facade);
}
var nr = typeof window < 'u' ? a.useLayoutEffect : a.useEffect,
	at = new WeakMap();
function rr(e, t) {
	var n = tr(null, function (r) {
		return e.forEach(function (o) {
			return Le(o, r);
		});
	});
	return (
		nr(
			function () {
				var r = at.get(n);
				if (r) {
					var o = new Set(r),
						s = new Set(e),
						l = n.current;
					(o.forEach(function (c) {
						s.has(c) || Le(c, null);
					}),
						s.forEach(function (c) {
							o.has(c) || Le(c, l);
						}));
				}
				at.set(n, e);
			},
			[e],
		),
		n
	);
}
function or(e) {
	return e;
}
function ar(e, t) {
	t === void 0 && (t = or);
	var n = [],
		r = !1,
		o = {
			read: function () {
				if (r) throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
				return n.length ? n[n.length - 1] : e;
			},
			useMedium: function (s) {
				var l = t(s, r);
				return (
					n.push(l),
					function () {
						n = n.filter(function (c) {
							return c !== l;
						});
					}
				);
			},
			assignSyncMedium: function (s) {
				for (r = !0; n.length; ) {
					var l = n;
					((n = []), l.forEach(s));
				}
				n = {
					push: function (c) {
						return s(c);
					},
					filter: function () {
						return n;
					},
				};
			},
			assignMedium: function (s) {
				r = !0;
				var l = [];
				if (n.length) {
					var c = n;
					((n = []), c.forEach(s), (l = n));
				}
				var u = function () {
						var g = l;
						((l = []), g.forEach(s));
					},
					d = function () {
						return Promise.resolve().then(u);
					};
				(d(),
					(n = {
						push: function (g) {
							(l.push(g), d());
						},
						filter: function (g) {
							return ((l = l.filter(g)), n);
						},
					}));
			},
		};
	return o;
}
function cr(e) {
	e === void 0 && (e = {});
	var t = ar(null);
	return ((t.options = H({ async: !0, ssr: !1 }, e)), t);
}
var wt = function (e) {
	var t = e.sideCar,
		n = yt(e, ['sideCar']);
	if (!t) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
	var r = t.read();
	if (!r) throw new Error('Sidecar medium not found');
	return a.createElement(r, H({}, n));
};
wt.isSideCarExport = !0;
function sr(e, t) {
	return (e.useMedium(t), wt);
}
var xt = cr(),
	De = function () {},
	Ce = a.forwardRef(function (e, t) {
		var n = a.useRef(null),
			r = a.useState({ onScrollCapture: De, onWheelCapture: De, onTouchMoveCapture: De }),
			o = r[0],
			s = r[1],
			l = e.forwardProps,
			c = e.children,
			u = e.className,
			d = e.removeScrollBar,
			g = e.enabled,
			h = e.shards,
			y = e.sideCar,
			w = e.noRelative,
			b = e.noIsolation,
			i = e.inert,
			p = e.allowPinchZoom,
			S = e.as,
			f = S === void 0 ? 'div' : S,
			v = e.gapMode,
			C = yt(e, [
				'forwardProps',
				'children',
				'className',
				'removeScrollBar',
				'enabled',
				'shards',
				'sideCar',
				'noRelative',
				'noIsolation',
				'inert',
				'allowPinchZoom',
				'as',
				'gapMode',
			]),
			E = y,
			_ = rr([n, t]),
			I = H(H({}, C), o);
		return a.createElement(
			a.Fragment,
			null,
			g &&
				a.createElement(E, {
					sideCar: xt,
					removeScrollBar: d,
					shards: h,
					noRelative: w,
					noIsolation: b,
					inert: i,
					setCallbacks: s,
					allowPinchZoom: !!p,
					lockRef: n,
					gapMode: v,
				}),
			l ? a.cloneElement(a.Children.only(c), H(H({}, I), { ref: _ })) : a.createElement(f, H({}, I, { className: u, ref: _ }), c),
		);
	});
Ce.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ce.classNames = { fullWidth: we, zeroRight: ye };
var ir = function () {
	if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function lr() {
	if (!document) return null;
	var e = document.createElement('style');
	e.type = 'text/css';
	var t = ir();
	return (t && e.setAttribute('nonce', t), e);
}
function ur(e, t) {
	e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function dr(e) {
	var t = document.head || document.getElementsByTagName('head')[0];
	t.appendChild(e);
}
var fr = function () {
		var e = 0,
			t = null;
		return {
			add: function (n) {
				(e == 0 && (t = lr()) && (ur(t, n), dr(t)), e++);
			},
			remove: function () {
				(e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
			},
		};
	},
	pr = function () {
		var e = fr();
		return function (t, n) {
			a.useEffect(
				function () {
					return (
						e.add(t),
						function () {
							e.remove();
						}
					);
				},
				[t && n],
			);
		};
	},
	Ct = function () {
		var e = pr(),
			t = function (n) {
				var r = n.styles,
					o = n.dynamic;
				return (e(r, o), null);
			};
		return t;
	},
	mr = { left: 0, top: 0, right: 0, gap: 0 },
	Be = function (e) {
		return parseInt(e || '', 10) || 0;
	},
	vr = function (e) {
		var t = window.getComputedStyle(document.body),
			n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
			r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
			o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
		return [Be(n), Be(r), Be(o)];
	},
	hr = function (e) {
		if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return mr;
		var t = vr(e),
			n = document.documentElement.clientWidth,
			r = window.innerWidth;
		return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
	},
	gr = Ct(),
	le = 'data-scroll-locked',
	Sr = function (e, t, n, r) {
		var o = e.left,
			s = e.top,
			l = e.right,
			c = e.gap;
		return (
			n === void 0 && (n = 'margin'),
			`
  .`
				.concat(
					Jn,
					` {
   overflow: hidden `,
				)
				.concat(
					r,
					`;
   padding-right: `,
				)
				.concat(c, 'px ')
				.concat(
					r,
					`;
  }
  body[`,
				)
				.concat(
					le,
					`] {
    overflow: hidden `,
				)
				.concat(
					r,
					`;
    overscroll-behavior: contain;
    `,
				)
				.concat(
					[
						t && 'position: relative '.concat(r, ';'),
						n === 'margin' &&
							`
    padding-left: `
								.concat(
									o,
									`px;
    padding-top: `,
								)
								.concat(
									s,
									`px;
    padding-right: `,
								)
								.concat(
									l,
									`px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
								)
								.concat(c, 'px ')
								.concat(
									r,
									`;
    `,
								),
						n === 'padding' && 'padding-right: '.concat(c, 'px ').concat(r, ';'),
					]
						.filter(Boolean)
						.join(''),
					`
  }
  
  .`,
				)
				.concat(
					ye,
					` {
    right: `,
				)
				.concat(c, 'px ')
				.concat(
					r,
					`;
  }
  
  .`,
				)
				.concat(
					we,
					` {
    margin-right: `,
				)
				.concat(c, 'px ')
				.concat(
					r,
					`;
  }
  
  .`,
				)
				.concat(ye, ' .')
				.concat(
					ye,
					` {
    right: 0 `,
				)
				.concat(
					r,
					`;
  }
  
  .`,
				)
				.concat(we, ' .')
				.concat(
					we,
					` {
    margin-right: 0 `,
				)
				.concat(
					r,
					`;
  }
  
  body[`,
				)
				.concat(
					le,
					`] {
    `,
				)
				.concat(er, ': ')
				.concat(
					c,
					`px;
  }
`,
				)
		);
	},
	ct = function () {
		var e = parseInt(document.body.getAttribute(le) || '0', 10);
		return isFinite(e) ? e : 0;
	},
	yr = function () {
		a.useEffect(function () {
			return (
				document.body.setAttribute(le, (ct() + 1).toString()),
				function () {
					var e = ct() - 1;
					e <= 0 ? document.body.removeAttribute(le) : document.body.setAttribute(le, e.toString());
				}
			);
		}, []);
	},
	wr = function (e) {
		var t = e.noRelative,
			n = e.noImportant,
			r = e.gapMode,
			o = r === void 0 ? 'margin' : r;
		yr();
		var s = a.useMemo(
			function () {
				return hr(o);
			},
			[o],
		);
		return a.createElement(gr, { styles: Sr(s, !t, o, n ? '' : '!important') });
	},
	Fe = !1;
if (typeof window < 'u')
	try {
		var ge = Object.defineProperty({}, 'passive', {
			get: function () {
				return ((Fe = !0), !0);
			},
		});
		(window.addEventListener('test', ge, ge), window.removeEventListener('test', ge, ge));
	} catch {
		Fe = !1;
	}
var se = Fe ? { passive: !1 } : !1,
	xr = function (e) {
		return e.tagName === 'TEXTAREA';
	},
	bt = function (e, t) {
		if (!(e instanceof Element)) return !1;
		var n = window.getComputedStyle(e);
		return n[t] !== 'hidden' && !(n.overflowY === n.overflowX && !xr(e) && n[t] === 'visible');
	},
	Cr = function (e) {
		return bt(e, 'overflowY');
	},
	br = function (e) {
		return bt(e, 'overflowX');
	},
	st = function (e, t) {
		var n = t.ownerDocument,
			r = t;
		do {
			typeof ShadowRoot < 'u' && r instanceof ShadowRoot && (r = r.host);
			var o = Et(e, r);
			if (o) {
				var s = It(e, r),
					l = s[1],
					c = s[2];
				if (l > c) return !0;
			}
			r = r.parentNode;
		} while (r && r !== n.body);
		return !1;
	},
	Er = function (e) {
		var t = e.scrollTop,
			n = e.scrollHeight,
			r = e.clientHeight;
		return [t, n, r];
	},
	Ir = function (e) {
		var t = e.scrollLeft,
			n = e.scrollWidth,
			r = e.clientWidth;
		return [t, n, r];
	},
	Et = function (e, t) {
		return e === 'v' ? Cr(t) : br(t);
	},
	It = function (e, t) {
		return e === 'v' ? Er(t) : Ir(t);
	},
	Rr = function (e, t) {
		return e === 'h' && t === 'rtl' ? -1 : 1;
	},
	Tr = function (e, t, n, r, o) {
		var s = Rr(e, window.getComputedStyle(t).direction),
			l = s * r,
			c = n.target,
			u = t.contains(c),
			d = !1,
			g = l > 0,
			h = 0,
			y = 0;
		do {
			if (!c) break;
			var w = It(e, c),
				b = w[0],
				i = w[1],
				p = w[2],
				S = i - p - s * b;
			(b || S) && Et(e, c) && ((h += S), (y += b));
			var f = c.parentNode;
			c = f && f.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? f.host : f;
		} while ((!u && c !== document.body) || (u && (t.contains(c) || t === c)));
		return (((g && Math.abs(h) < 1) || (!g && Math.abs(y) < 1)) && (d = !0), d);
	},
	Se = function (e) {
		return 'changedTouches' in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
	},
	it = function (e) {
		return [e.deltaX, e.deltaY];
	},
	lt = function (e) {
		return e && 'current' in e ? e.current : e;
	},
	Nr = function (e, t) {
		return e[0] === t[0] && e[1] === t[1];
	},
	Pr = function (e) {
		return `
  .block-interactivity-`
			.concat(
				e,
				` {pointer-events: none;}
  .allow-interactivity-`,
			)
			.concat(
				e,
				` {pointer-events: all;}
`,
			);
	},
	_r = 0,
	ie = [];
function Ar(e) {
	var t = a.useRef([]),
		n = a.useRef([0, 0]),
		r = a.useRef(),
		o = a.useState(_r++)[0],
		s = a.useState(Ct)[0],
		l = a.useRef(e);
	(a.useEffect(
		function () {
			l.current = e;
		},
		[e],
	),
		a.useEffect(
			function () {
				if (e.inert) {
					document.body.classList.add('block-interactivity-'.concat(o));
					var i = Qn([e.lockRef.current], (e.shards || []).map(lt), !0).filter(Boolean);
					return (
						i.forEach(function (p) {
							return p.classList.add('allow-interactivity-'.concat(o));
						}),
						function () {
							(document.body.classList.remove('block-interactivity-'.concat(o)),
								i.forEach(function (p) {
									return p.classList.remove('allow-interactivity-'.concat(o));
								}));
						}
					);
				}
			},
			[e.inert, e.lockRef.current, e.shards],
		));
	var c = a.useCallback(function (i, p) {
			if (('touches' in i && i.touches.length === 2) || (i.type === 'wheel' && i.ctrlKey)) return !l.current.allowPinchZoom;
			var S = Se(i),
				f = n.current,
				v = 'deltaX' in i ? i.deltaX : f[0] - S[0],
				C = 'deltaY' in i ? i.deltaY : f[1] - S[1],
				E,
				_ = i.target,
				I = Math.abs(v) > Math.abs(C) ? 'h' : 'v';
			if ('touches' in i && I === 'h' && _.type === 'range') return !1;
			var k = window.getSelection(),
				B = k && k.anchorNode,
				U = B ? B === _ || B.contains(_) : !1;
			if (U) return !1;
			var O = st(I, _);
			if (!O) return !0;
			if ((O ? (E = I) : ((E = I === 'v' ? 'h' : 'v'), (O = st(I, _))), !O)) return !1;
			if ((!r.current && 'changedTouches' in i && (v || C) && (r.current = E), !E)) return !0;
			var V = r.current || E;
			return Tr(V, p, i, V === 'h' ? v : C);
		}, []),
		u = a.useCallback(function (i) {
			var p = i;
			if (!(!ie.length || ie[ie.length - 1] !== s)) {
				var S = 'deltaY' in p ? it(p) : Se(p),
					f = t.current.filter(function (E) {
						return E.name === p.type && (E.target === p.target || p.target === E.shadowParent) && Nr(E.delta, S);
					})[0];
				if (f && f.should) {
					p.cancelable && p.preventDefault();
					return;
				}
				if (!f) {
					var v = (l.current.shards || [])
							.map(lt)
							.filter(Boolean)
							.filter(function (E) {
								return E.contains(p.target);
							}),
						C = v.length > 0 ? c(p, v[0]) : !l.current.noIsolation;
					C && p.cancelable && p.preventDefault();
				}
			}
		}, []),
		d = a.useCallback(function (i, p, S, f) {
			var v = { name: i, delta: p, target: S, should: f, shadowParent: Mr(S) };
			(t.current.push(v),
				setTimeout(function () {
					t.current = t.current.filter(function (C) {
						return C !== v;
					});
				}, 1));
		}, []),
		g = a.useCallback(function (i) {
			((n.current = Se(i)), (r.current = void 0));
		}, []),
		h = a.useCallback(function (i) {
			d(i.type, it(i), i.target, c(i, e.lockRef.current));
		}, []),
		y = a.useCallback(function (i) {
			d(i.type, Se(i), i.target, c(i, e.lockRef.current));
		}, []);
	a.useEffect(function () {
		return (
			ie.push(s),
			e.setCallbacks({ onScrollCapture: h, onWheelCapture: h, onTouchMoveCapture: y }),
			document.addEventListener('wheel', u, se),
			document.addEventListener('touchmove', u, se),
			document.addEventListener('touchstart', g, se),
			function () {
				((ie = ie.filter(function (i) {
					return i !== s;
				})),
					document.removeEventListener('wheel', u, se),
					document.removeEventListener('touchmove', u, se),
					document.removeEventListener('touchstart', g, se));
			}
		);
	}, []);
	var w = e.removeScrollBar,
		b = e.inert;
	return a.createElement(
		a.Fragment,
		null,
		b ? a.createElement(s, { styles: Pr(o) }) : null,
		w ? a.createElement(wr, { noRelative: e.noRelative, gapMode: e.gapMode }) : null,
	);
}
function Mr(e) {
	for (var t = null; e !== null; ) (e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode));
	return t;
}
const Or = sr(xt, Ar);
var Rt = a.forwardRef(function (e, t) {
	return a.createElement(Ce, H({}, e, { ref: t, sideCar: Or }));
});
Rt.classNames = Ce.classNames;
var jr = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
	kr = [' ', 'Enter'],
	re = 'Select',
	[be, Ee, Lr] = Pn(re),
	[ue] = dt(re, [Lr, ft]),
	Ie = ft(),
	[Dr, Q] = ue(re),
	[Br, Vr] = ue(re),
	Tt = (e) => {
		const {
				__scopeSelect: t,
				children: n,
				open: r,
				defaultOpen: o,
				onOpenChange: s,
				value: l,
				defaultValue: c,
				onValueChange: u,
				dir: d,
				name: g,
				autoComplete: h,
				disabled: y,
				required: w,
				form: b,
			} = e,
			i = Ie(t),
			[p, S] = a.useState(null),
			[f, v] = a.useState(null),
			[C, E] = a.useState(!1),
			_ = An(d),
			[I, k] = Ze({ prop: r, defaultProp: o ?? !1, onChange: s, caller: re }),
			[B, U] = Ze({ prop: l, defaultProp: c, onChange: u, caller: re }),
			O = a.useRef(null),
			V = p ? b || !!p.closest('form') : !0,
			[z, K] = a.useState(new Set()),
			$ = Array.from(z)
				.map((j) => j.props.value)
				.join(';');
		return m.jsx(hn, {
			...i,
			children: m.jsxs(Dr, {
				required: w,
				scope: t,
				trigger: p,
				onTriggerChange: S,
				valueNode: f,
				onValueNodeChange: v,
				valueNodeHasChildren: C,
				onValueNodeHasChildrenChange: E,
				contentId: Ge(),
				value: B,
				onValueChange: U,
				open: I,
				onOpenChange: k,
				dir: _,
				triggerPointerDownPosRef: O,
				disabled: y,
				children: [
					m.jsx(be.Provider, {
						scope: t,
						children: m.jsx(Br, {
							scope: e.__scopeSelect,
							onNativeOptionAdd: a.useCallback((j) => {
								K((W) => new Set(W).add(j));
							}, []),
							onNativeOptionRemove: a.useCallback((j) => {
								K((W) => {
									const G = new Set(W);
									return (G.delete(j), G);
								});
							}, []),
							children: n,
						}),
					}),
					V
						? m.jsxs(
								Qt,
								{
									'aria-hidden': !0,
									required: w,
									tabIndex: -1,
									name: g,
									autoComplete: h,
									value: B,
									onChange: (j) => U(j.target.value),
									disabled: y,
									form: b,
									children: [B === void 0 ? m.jsx('option', { value: '' }) : null, Array.from(z)],
								},
								$,
							)
						: null,
				],
			}),
		});
	};
Tt.displayName = re;
var Nt = 'SelectTrigger',
	Pt = a.forwardRef((e, t) => {
		const { __scopeSelect: n, disabled: r = !1, ...o } = e,
			s = Ie(n),
			l = Q(Nt, n),
			c = l.disabled || r,
			u = D(t, l.onTriggerChange),
			d = Ee(n),
			g = a.useRef('touch'),
			[h, y, w] = en((i) => {
				const p = d().filter((v) => !v.disabled),
					S = p.find((v) => v.value === l.value),
					f = tn(p, i, S);
				f !== void 0 && l.onValueChange(f.value);
			}),
			b = (i) => {
				(c || (l.onOpenChange(!0), w()), i && (l.triggerPointerDownPosRef.current = { x: Math.round(i.pageX), y: Math.round(i.pageY) }));
			};
		return m.jsx(Sn, {
			asChild: !0,
			...s,
			children: m.jsx(M.button, {
				type: 'button',
				role: 'combobox',
				'aria-controls': l.contentId,
				'aria-expanded': l.open,
				'aria-required': l.required,
				'aria-autocomplete': 'none',
				dir: l.dir,
				'data-state': l.open ? 'open' : 'closed',
				disabled: c,
				'data-disabled': c ? '' : void 0,
				'data-placeholder': Jt(l.value) ? '' : void 0,
				...o,
				ref: u,
				onClick: A(o.onClick, (i) => {
					(i.currentTarget.focus(), g.current !== 'mouse' && b(i));
				}),
				onPointerDown: A(o.onPointerDown, (i) => {
					g.current = i.pointerType;
					const p = i.target;
					(p.hasPointerCapture(i.pointerId) && p.releasePointerCapture(i.pointerId),
						i.button === 0 && i.ctrlKey === !1 && i.pointerType === 'mouse' && (b(i), i.preventDefault()));
				}),
				onKeyDown: A(o.onKeyDown, (i) => {
					const p = h.current !== '';
					(!(i.ctrlKey || i.altKey || i.metaKey) && i.key.length === 1 && y(i.key),
						!(p && i.key === ' ') && jr.includes(i.key) && (b(), i.preventDefault()));
				}),
			}),
		});
	});
Pt.displayName = Nt;
var _t = 'SelectValue',
	At = a.forwardRef((e, t) => {
		const { __scopeSelect: n, className: r, style: o, children: s, placeholder: l = '', ...c } = e,
			u = Q(_t, n),
			{ onValueNodeHasChildrenChange: d } = u,
			g = s !== void 0,
			h = D(t, u.onValueNodeChange);
		return (
			Y(() => {
				d(g);
			}, [d, g]),
			m.jsx(M.span, { ...c, ref: h, style: { pointerEvents: 'none' }, children: Jt(u.value) ? m.jsx(m.Fragment, { children: l }) : s })
		);
	});
At.displayName = _t;
var Fr = 'SelectIcon',
	Mt = a.forwardRef((e, t) => {
		const { __scopeSelect: n, children: r, ...o } = e;
		return m.jsx(M.span, { 'aria-hidden': !0, ...o, ref: t, children: r || '▼' });
	});
Mt.displayName = Fr;
var Wr = 'SelectPortal',
	Ot = (e) => m.jsx(gt, { asChild: !0, ...e });
Ot.displayName = Wr;
var oe = 'SelectContent',
	jt = a.forwardRef((e, t) => {
		const n = Q(oe, e.__scopeSelect),
			[r, o] = a.useState();
		if (
			(Y(() => {
				o(new DocumentFragment());
			}, []),
			!n.open)
		) {
			const s = r;
			return s
				? ut.createPortal(
						m.jsx(kt, {
							scope: e.__scopeSelect,
							children: m.jsx(be.Slot, { scope: e.__scopeSelect, children: m.jsx('div', { children: e.children }) }),
						}),
						s,
					)
				: null;
		}
		return m.jsx(Lt, { ...e, ref: t });
	});
jt.displayName = oe;
var F = 10,
	[kt, J] = ue(oe),
	Hr = 'SelectContentImpl',
	Ur = Wn('SelectContent.RemoveScroll'),
	Lt = a.forwardRef((e, t) => {
		const {
				__scopeSelect: n,
				position: r = 'item-aligned',
				onCloseAutoFocus: o,
				onEscapeKeyDown: s,
				onPointerDownOutside: l,
				side: c,
				sideOffset: u,
				align: d,
				alignOffset: g,
				arrowPadding: h,
				collisionBoundary: y,
				collisionPadding: w,
				sticky: b,
				hideWhenDetached: i,
				avoidCollisions: p,
				...S
			} = e,
			f = Q(oe, n),
			[v, C] = a.useState(null),
			[E, _] = a.useState(null),
			I = D(t, (x) => C(x)),
			[k, B] = a.useState(null),
			[U, O] = a.useState(null),
			V = Ee(n),
			[z, K] = a.useState(!1),
			$ = a.useRef(!1);
		(a.useEffect(() => {
			if (v) return Zn(v);
		}, [v]),
			Mn());
		const j = a.useCallback(
				(x) => {
					const [P, ...L] = V().map((T) => T.ref.current),
						[N] = L.slice(-1),
						R = document.activeElement;
					for (const T of x)
						if (
							T === R ||
							(T == null || T.scrollIntoView({ block: 'nearest' }),
							T === P && E && (E.scrollTop = 0),
							T === N && E && (E.scrollTop = E.scrollHeight),
							T == null || T.focus(),
							document.activeElement !== R)
						)
							return;
				},
				[V, E],
			),
			W = a.useCallback(() => j([k, v]), [j, k, v]);
		a.useEffect(() => {
			z && W();
		}, [z, W]);
		const { onOpenChange: G, triggerPointerDownPosRef: X } = f;
		(a.useEffect(() => {
			if (v) {
				let x = { x: 0, y: 0 };
				const P = (N) => {
						var R, T;
						x = {
							x: Math.abs(Math.round(N.pageX) - (((R = X.current) == null ? void 0 : R.x) ?? 0)),
							y: Math.abs(Math.round(N.pageY) - (((T = X.current) == null ? void 0 : T.y) ?? 0)),
						};
					},
					L = (N) => {
						(x.x <= 10 && x.y <= 10 ? N.preventDefault() : v.contains(N.target) || G(!1),
							document.removeEventListener('pointermove', P),
							(X.current = null));
					};
				return (
					X.current !== null &&
						(document.addEventListener('pointermove', P), document.addEventListener('pointerup', L, { capture: !0, once: !0 })),
					() => {
						(document.removeEventListener('pointermove', P), document.removeEventListener('pointerup', L, { capture: !0 }));
					}
				);
			}
		}, [v, G, X]),
			a.useEffect(() => {
				const x = () => G(!1);
				return (
					window.addEventListener('blur', x),
					window.addEventListener('resize', x),
					() => {
						(window.removeEventListener('blur', x), window.removeEventListener('resize', x));
					}
				);
			}, [G]));
		const [Re, pe] = en((x) => {
				const P = V().filter((R) => !R.disabled),
					L = P.find((R) => R.ref.current === document.activeElement),
					N = tn(P, x, L);
				N && setTimeout(() => N.ref.current.focus());
			}),
			Te = a.useCallback(
				(x, P, L) => {
					const N = !$.current && !L;
					((f.value !== void 0 && f.value === P) || N) && (B(x), N && ($.current = !0));
				},
				[f.value],
			),
			Ne = a.useCallback(() => (v == null ? void 0 : v.focus()), [v]),
			ae = a.useCallback(
				(x, P, L) => {
					const N = !$.current && !L;
					((f.value !== void 0 && f.value === P) || N) && O(x);
				},
				[f.value],
			),
			me = r === 'popper' ? We : Dt,
			de =
				me === We
					? {
							side: c,
							sideOffset: u,
							align: d,
							alignOffset: g,
							arrowPadding: h,
							collisionBoundary: y,
							collisionPadding: w,
							sticky: b,
							hideWhenDetached: i,
							avoidCollisions: p,
						}
					: {};
		return m.jsx(kt, {
			scope: n,
			content: v,
			viewport: E,
			onViewportChange: _,
			itemRefCallback: Te,
			selectedItem: k,
			onItemLeave: Ne,
			itemTextRefCallback: ae,
			focusSelectedItem: W,
			selectedItemText: U,
			position: r,
			isPositioned: z,
			searchRef: Re,
			children: m.jsx(Rt, {
				as: Ur,
				allowPinchZoom: !0,
				children: m.jsx(vt, {
					asChild: !0,
					trapped: f.open,
					onMountAutoFocus: (x) => {
						x.preventDefault();
					},
					onUnmountAutoFocus: A(o, (x) => {
						var P;
						((P = f.trigger) == null || P.focus({ preventScroll: !0 }), x.preventDefault());
					}),
					children: m.jsx(yn, {
						asChild: !0,
						disableOutsidePointerEvents: !0,
						onEscapeKeyDown: s,
						onPointerDownOutside: l,
						onFocusOutside: (x) => x.preventDefault(),
						onDismiss: () => f.onOpenChange(!1),
						children: m.jsx(me, {
							role: 'listbox',
							id: f.contentId,
							'data-state': f.open ? 'open' : 'closed',
							dir: f.dir,
							onContextMenu: (x) => x.preventDefault(),
							...S,
							...de,
							onPlaced: () => K(!0),
							ref: I,
							style: { display: 'flex', flexDirection: 'column', outline: 'none', ...S.style },
							onKeyDown: A(S.onKeyDown, (x) => {
								const P = x.ctrlKey || x.altKey || x.metaKey;
								if (
									(x.key === 'Tab' && x.preventDefault(),
									!P && x.key.length === 1 && pe(x.key),
									['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(x.key))
								) {
									let N = V()
										.filter((R) => !R.disabled)
										.map((R) => R.ref.current);
									if ((['ArrowUp', 'End'].includes(x.key) && (N = N.slice().reverse()), ['ArrowUp', 'ArrowDown'].includes(x.key))) {
										const R = x.target,
											T = N.indexOf(R);
										N = N.slice(T + 1);
									}
									(setTimeout(() => j(N)), x.preventDefault());
								}
							}),
						}),
					}),
				}),
			}),
		});
	});
Lt.displayName = Hr;
var Kr = 'SelectItemAlignedPosition',
	Dt = a.forwardRef((e, t) => {
		const { __scopeSelect: n, onPlaced: r, ...o } = e,
			s = Q(oe, n),
			l = J(oe, n),
			[c, u] = a.useState(null),
			[d, g] = a.useState(null),
			h = D(t, (I) => g(I)),
			y = Ee(n),
			w = a.useRef(!1),
			b = a.useRef(!0),
			{ viewport: i, selectedItem: p, selectedItemText: S, focusSelectedItem: f } = l,
			v = a.useCallback(() => {
				if (s.trigger && s.valueNode && c && d && i && p && S) {
					const I = s.trigger.getBoundingClientRect(),
						k = d.getBoundingClientRect(),
						B = s.valueNode.getBoundingClientRect(),
						U = S.getBoundingClientRect();
					if (s.dir !== 'rtl') {
						const R = U.left - k.left,
							T = B.left - R,
							ee = I.left - T,
							te = I.width + ee,
							Pe = Math.max(te, k.width),
							_e = window.innerWidth - F,
							Ae = Qe(T, [F, Math.max(F, _e - Pe)]);
						((c.style.minWidth = te + 'px'), (c.style.left = Ae + 'px'));
					} else {
						const R = k.right - U.right,
							T = window.innerWidth - B.right - R,
							ee = window.innerWidth - I.right - T,
							te = I.width + ee,
							Pe = Math.max(te, k.width),
							_e = window.innerWidth - F,
							Ae = Qe(T, [F, Math.max(F, _e - Pe)]);
						((c.style.minWidth = te + 'px'), (c.style.right = Ae + 'px'));
					}
					const O = y(),
						V = window.innerHeight - F * 2,
						z = i.scrollHeight,
						K = window.getComputedStyle(d),
						$ = parseInt(K.borderTopWidth, 10),
						j = parseInt(K.paddingTop, 10),
						W = parseInt(K.borderBottomWidth, 10),
						G = parseInt(K.paddingBottom, 10),
						X = $ + j + z + G + W,
						Re = Math.min(p.offsetHeight * 5, X),
						pe = window.getComputedStyle(i),
						Te = parseInt(pe.paddingTop, 10),
						Ne = parseInt(pe.paddingBottom, 10),
						ae = I.top + I.height / 2 - F,
						me = V - ae,
						de = p.offsetHeight / 2,
						x = p.offsetTop + de,
						P = $ + j + x,
						L = X - P;
					if (P <= ae) {
						const R = O.length > 0 && p === O[O.length - 1].ref.current;
						c.style.bottom = '0px';
						const T = d.clientHeight - i.offsetTop - i.offsetHeight,
							ee = Math.max(me, de + (R ? Ne : 0) + T + W),
							te = P + ee;
						c.style.height = te + 'px';
					} else {
						const R = O.length > 0 && p === O[0].ref.current;
						c.style.top = '0px';
						const ee = Math.max(ae, $ + i.offsetTop + (R ? Te : 0) + de) + L;
						((c.style.height = ee + 'px'), (i.scrollTop = P - ae + i.offsetTop));
					}
					((c.style.margin = `${F}px 0`),
						(c.style.minHeight = Re + 'px'),
						(c.style.maxHeight = V + 'px'),
						r == null || r(),
						requestAnimationFrame(() => (w.current = !0)));
				}
			}, [y, s.trigger, s.valueNode, c, d, i, p, S, s.dir, r]);
		Y(() => v(), [v]);
		const [C, E] = a.useState();
		Y(() => {
			d && E(window.getComputedStyle(d).zIndex);
		}, [d]);
		const _ = a.useCallback(
			(I) => {
				I && b.current === !0 && (v(), f == null || f(), (b.current = !1));
			},
			[v, f],
		);
		return m.jsx(Gr, {
			scope: n,
			contentWrapper: c,
			shouldExpandOnScrollRef: w,
			onScrollButtonChange: _,
			children: m.jsx('div', {
				ref: u,
				style: { display: 'flex', flexDirection: 'column', position: 'fixed', zIndex: C },
				children: m.jsx(M.div, { ...o, ref: h, style: { boxSizing: 'border-box', maxHeight: '100%', ...o.style } }),
			}),
		});
	});
Dt.displayName = Kr;
var $r = 'SelectPopperPosition',
	We = a.forwardRef((e, t) => {
		const { __scopeSelect: n, align: r = 'start', collisionPadding: o = F, ...s } = e,
			l = Ie(n);
		return m.jsx(wn, {
			...l,
			...s,
			ref: t,
			align: r,
			collisionPadding: o,
			style: {
				boxSizing: 'border-box',
				...s.style,
				'--radix-select-content-transform-origin': 'var(--radix-popper-transform-origin)',
				'--radix-select-content-available-width': 'var(--radix-popper-available-width)',
				'--radix-select-content-available-height': 'var(--radix-popper-available-height)',
				'--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
				'--radix-select-trigger-height': 'var(--radix-popper-anchor-height)',
			},
		});
	});
We.displayName = $r;
var [Gr, ze] = ue(oe, {}),
	He = 'SelectViewport',
	Bt = a.forwardRef((e, t) => {
		const { __scopeSelect: n, nonce: r, ...o } = e,
			s = J(He, n),
			l = ze(He, n),
			c = D(t, s.onViewportChange),
			u = a.useRef(0);
		return m.jsxs(m.Fragment, {
			children: [
				m.jsx('style', {
					dangerouslySetInnerHTML: {
						__html:
							'[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}',
					},
					nonce: r,
				}),
				m.jsx(be.Slot, {
					scope: n,
					children: m.jsx(M.div, {
						'data-radix-select-viewport': '',
						role: 'presentation',
						...o,
						ref: c,
						style: { position: 'relative', flex: 1, overflow: 'hidden auto', ...o.style },
						onScroll: A(o.onScroll, (d) => {
							const g = d.currentTarget,
								{ contentWrapper: h, shouldExpandOnScrollRef: y } = l;
							if (y != null && y.current && h) {
								const w = Math.abs(u.current - g.scrollTop);
								if (w > 0) {
									const b = window.innerHeight - F * 2,
										i = parseFloat(h.style.minHeight),
										p = parseFloat(h.style.height),
										S = Math.max(i, p);
									if (S < b) {
										const f = S + w,
											v = Math.min(b, f),
											C = f - v;
										((h.style.height = v + 'px'),
											h.style.bottom === '0px' && ((g.scrollTop = C > 0 ? C : 0), (h.style.justifyContent = 'flex-end')));
									}
								}
							}
							u.current = g.scrollTop;
						}),
					}),
				}),
			],
		});
	});
Bt.displayName = He;
var Vt = 'SelectGroup',
	[Yr, zr] = ue(Vt),
	Ft = a.forwardRef((e, t) => {
		const { __scopeSelect: n, ...r } = e,
			o = Ge();
		return m.jsx(Yr, { scope: n, id: o, children: m.jsx(M.div, { role: 'group', 'aria-labelledby': o, ...r, ref: t }) });
	});
Ft.displayName = Vt;
var Wt = 'SelectLabel',
	Ht = a.forwardRef((e, t) => {
		const { __scopeSelect: n, ...r } = e,
			o = zr(Wt, n);
		return m.jsx(M.div, { id: o.id, ...r, ref: t });
	});
Ht.displayName = Wt;
var xe = 'SelectItem',
	[Xr, Ut] = ue(xe),
	Kt = a.forwardRef((e, t) => {
		const { __scopeSelect: n, value: r, disabled: o = !1, textValue: s, ...l } = e,
			c = Q(xe, n),
			u = J(xe, n),
			d = c.value === r,
			[g, h] = a.useState(s ?? ''),
			[y, w] = a.useState(!1),
			b = D(t, (f) => {
				var v;
				return (v = u.itemRefCallback) == null ? void 0 : v.call(u, f, r, o);
			}),
			i = Ge(),
			p = a.useRef('touch'),
			S = () => {
				o || (c.onValueChange(r), c.onOpenChange(!1));
			};
		if (r === '')
			throw new Error(
				'A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.',
			);
		return m.jsx(Xr, {
			scope: n,
			value: r,
			disabled: o,
			textId: i,
			isSelected: d,
			onItemTextChange: a.useCallback((f) => {
				h((v) => v || ((f == null ? void 0 : f.textContent) ?? '').trim());
			}, []),
			children: m.jsx(be.ItemSlot, {
				scope: n,
				value: r,
				disabled: o,
				textValue: g,
				children: m.jsx(M.div, {
					role: 'option',
					'aria-labelledby': i,
					'data-highlighted': y ? '' : void 0,
					'aria-selected': d && y,
					'data-state': d ? 'checked' : 'unchecked',
					'aria-disabled': o || void 0,
					'data-disabled': o ? '' : void 0,
					tabIndex: o ? void 0 : -1,
					...l,
					ref: b,
					onFocus: A(l.onFocus, () => w(!0)),
					onBlur: A(l.onBlur, () => w(!1)),
					onClick: A(l.onClick, () => {
						p.current !== 'mouse' && S();
					}),
					onPointerUp: A(l.onPointerUp, () => {
						p.current === 'mouse' && S();
					}),
					onPointerDown: A(l.onPointerDown, (f) => {
						p.current = f.pointerType;
					}),
					onPointerMove: A(l.onPointerMove, (f) => {
						var v;
						((p.current = f.pointerType),
							o ? (v = u.onItemLeave) == null || v.call(u) : p.current === 'mouse' && f.currentTarget.focus({ preventScroll: !0 }));
					}),
					onPointerLeave: A(l.onPointerLeave, (f) => {
						var v;
						f.currentTarget === document.activeElement && ((v = u.onItemLeave) == null || v.call(u));
					}),
					onKeyDown: A(l.onKeyDown, (f) => {
						var C;
						(((C = u.searchRef) == null ? void 0 : C.current) !== '' && f.key === ' ') ||
							(kr.includes(f.key) && S(), f.key === ' ' && f.preventDefault());
					}),
				}),
			}),
		});
	});
Kt.displayName = xe;
var fe = 'SelectItemText',
	$t = a.forwardRef((e, t) => {
		const { __scopeSelect: n, className: r, style: o, ...s } = e,
			l = Q(fe, n),
			c = J(fe, n),
			u = Ut(fe, n),
			d = Vr(fe, n),
			[g, h] = a.useState(null),
			y = D(
				t,
				(S) => h(S),
				u.onItemTextChange,
				(S) => {
					var f;
					return (f = c.itemTextRefCallback) == null ? void 0 : f.call(c, S, u.value, u.disabled);
				},
			),
			w = g == null ? void 0 : g.textContent,
			b = a.useMemo(() => m.jsx('option', { value: u.value, disabled: u.disabled, children: w }, u.value), [u.disabled, u.value, w]),
			{ onNativeOptionAdd: i, onNativeOptionRemove: p } = d;
		return (
			Y(() => (i(b), () => p(b)), [i, p, b]),
			m.jsxs(m.Fragment, {
				children: [
					m.jsx(M.span, { id: u.textId, ...s, ref: y }),
					u.isSelected && l.valueNode && !l.valueNodeHasChildren ? ut.createPortal(s.children, l.valueNode) : null,
				],
			})
		);
	});
$t.displayName = fe;
var Gt = 'SelectItemIndicator',
	Yt = a.forwardRef((e, t) => {
		const { __scopeSelect: n, ...r } = e;
		return Ut(Gt, n).isSelected ? m.jsx(M.span, { 'aria-hidden': !0, ...r, ref: t }) : null;
	});
Yt.displayName = Gt;
var Ue = 'SelectScrollUpButton',
	zt = a.forwardRef((e, t) => {
		const n = J(Ue, e.__scopeSelect),
			r = ze(Ue, e.__scopeSelect),
			[o, s] = a.useState(!1),
			l = D(t, r.onScrollButtonChange);
		return (
			Y(() => {
				if (n.viewport && n.isPositioned) {
					let c = function () {
						const d = u.scrollTop > 0;
						s(d);
					};
					const u = n.viewport;
					return (c(), u.addEventListener('scroll', c), () => u.removeEventListener('scroll', c));
				}
			}, [n.viewport, n.isPositioned]),
			o
				? m.jsx(qt, {
						...e,
						ref: l,
						onAutoScroll: () => {
							const { viewport: c, selectedItem: u } = n;
							c && u && (c.scrollTop = c.scrollTop - u.offsetHeight);
						},
					})
				: null
		);
	});
zt.displayName = Ue;
var Ke = 'SelectScrollDownButton',
	Xt = a.forwardRef((e, t) => {
		const n = J(Ke, e.__scopeSelect),
			r = ze(Ke, e.__scopeSelect),
			[o, s] = a.useState(!1),
			l = D(t, r.onScrollButtonChange);
		return (
			Y(() => {
				if (n.viewport && n.isPositioned) {
					let c = function () {
						const d = u.scrollHeight - u.clientHeight,
							g = Math.ceil(u.scrollTop) < d;
						s(g);
					};
					const u = n.viewport;
					return (c(), u.addEventListener('scroll', c), () => u.removeEventListener('scroll', c));
				}
			}, [n.viewport, n.isPositioned]),
			o
				? m.jsx(qt, {
						...e,
						ref: l,
						onAutoScroll: () => {
							const { viewport: c, selectedItem: u } = n;
							c && u && (c.scrollTop = c.scrollTop + u.offsetHeight);
						},
					})
				: null
		);
	});
Xt.displayName = Ke;
var qt = a.forwardRef((e, t) => {
		const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
			s = J('SelectScrollButton', n),
			l = a.useRef(null),
			c = Ee(n),
			u = a.useCallback(() => {
				l.current !== null && (window.clearInterval(l.current), (l.current = null));
			}, []);
		return (
			a.useEffect(() => () => u(), [u]),
			Y(() => {
				var g;
				const d = c().find((h) => h.ref.current === document.activeElement);
				(g = d == null ? void 0 : d.ref.current) == null || g.scrollIntoView({ block: 'nearest' });
			}, [c]),
			m.jsx(M.div, {
				'aria-hidden': !0,
				...o,
				ref: t,
				style: { flexShrink: 0, ...o.style },
				onPointerDown: A(o.onPointerDown, () => {
					l.current === null && (l.current = window.setInterval(r, 50));
				}),
				onPointerMove: A(o.onPointerMove, () => {
					var d;
					((d = s.onItemLeave) == null || d.call(s), l.current === null && (l.current = window.setInterval(r, 50)));
				}),
				onPointerLeave: A(o.onPointerLeave, () => {
					u();
				}),
			})
		);
	}),
	qr = 'SelectSeparator',
	Zt = a.forwardRef((e, t) => {
		const { __scopeSelect: n, ...r } = e;
		return m.jsx(M.div, { 'aria-hidden': !0, ...r, ref: t });
	});
Zt.displayName = qr;
var $e = 'SelectArrow',
	Zr = a.forwardRef((e, t) => {
		const { __scopeSelect: n, ...r } = e,
			o = Ie(n),
			s = Q($e, n),
			l = J($e, n);
		return s.open && l.position === 'popper' ? m.jsx(xn, { ...o, ...r, ref: t }) : null;
	});
Zr.displayName = $e;
var Qr = 'SelectBubbleInput',
	Qt = a.forwardRef(({ __scopeSelect: e, value: t, ...n }, r) => {
		const o = a.useRef(null),
			s = D(r, o),
			l = Yn(t);
		return (
			a.useEffect(() => {
				const c = o.current;
				if (!c) return;
				const u = window.HTMLSelectElement.prototype,
					g = Object.getOwnPropertyDescriptor(u, 'value').set;
				if (l !== t && g) {
					const h = new Event('change', { bubbles: !0 });
					(g.call(c, t), c.dispatchEvent(h));
				}
			}, [l, t]),
			m.jsx(M.select, { ...n, style: { ...gn, ...n.style }, ref: s, defaultValue: t })
		);
	});
Qt.displayName = Qr;
function Jt(e) {
	return e === '' || e === void 0;
}
function en(e) {
	const t = Ve(e),
		n = a.useRef(''),
		r = a.useRef(0),
		o = a.useCallback(
			(l) => {
				const c = n.current + l;
				(t(c),
					(function u(d) {
						((n.current = d), window.clearTimeout(r.current), d !== '' && (r.current = window.setTimeout(() => u(''), 1e3)));
					})(c));
			},
			[t],
		),
		s = a.useCallback(() => {
			((n.current = ''), window.clearTimeout(r.current));
		}, []);
	return (a.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s]);
}
function tn(e, t, n) {
	const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t,
		s = n ? e.indexOf(n) : -1;
	let l = Jr(e, Math.max(s, 0));
	o.length === 1 && (l = l.filter((d) => d !== n));
	const u = l.find((d) => d.textValue.toLowerCase().startsWith(o.toLowerCase()));
	return u !== n ? u : void 0;
}
function Jr(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var eo = Tt,
	nn = Pt,
	to = At,
	no = Mt,
	ro = Ot,
	rn = jt,
	oo = Bt,
	ao = Ft,
	on = Ht,
	an = Kt,
	co = $t,
	so = Yt,
	cn = zt,
	sn = Xt,
	ln = Zt;
const go = eo,
	So = ao,
	yo = to,
	un = a.forwardRef(({ className: e, children: t, ...n }, r) =>
		m.jsxs(nn, {
			ref: r,
			className: Z(
				'flex h-10 w-full items-center justify-between rounded-[6px] border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
				e,
			),
			...n,
			children: [t, m.jsx(no, { asChild: !0, children: m.jsx(mt, { className: 'h-4 w-4 opacity-50' }) })],
		}),
	);
un.displayName = nn.displayName;
const Xe = a.forwardRef(({ className: e, ...t }, n) =>
	m.jsx(cn, {
		ref: n,
		className: Z('flex cursor-default items-center justify-center py-1', e),
		...t,
		children: m.jsx(bn, { className: 'h-4 w-4' }),
	}),
);
Xe.displayName = cn.displayName;
const qe = a.forwardRef(({ className: e, ...t }, n) =>
	m.jsx(sn, {
		ref: n,
		className: Z('flex cursor-default items-center justify-center py-1', e),
		...t,
		children: m.jsx(mt, { className: 'h-4 w-4' }),
	}),
);
qe.displayName = sn.displayName;
const dn = a.forwardRef(({ className: e, children: t, position: n = 'popper', ...r }, o) =>
	m.jsx(ro, {
		children: m.jsxs(rn, {
			ref: o,
			className: Z(
				'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-[6px] border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
				n === 'popper' &&
					'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
				e,
			),
			position: n,
			...r,
			children: [
				m.jsx(Xe, {}),
				m.jsx(oo, {
					className: Z('p-1', n === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'),
					children: t,
				}),
				m.jsx(qe, {}),
			],
		}),
	}),
);
dn.displayName = rn.displayName;
const fn = a.forwardRef(({ className: e, ...t }, n) =>
	m.jsx(on, { ref: n, className: Z('py-1.5 pl-8 pr-2 text-sm font-semibold', e), ...t }),
);
fn.displayName = on.displayName;
const pn = a.forwardRef(({ className: e, children: t, ...n }, r) =>
	m.jsxs(an, {
		ref: r,
		className: Z(
			'relative flex w-full cursor-default select-none items-center rounded-[6px] py-1.5 pl-6 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
			e,
		),
		...n,
		children: [
			m.jsx('span', {
				className: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
				children: m.jsx(so, { children: m.jsx(Cn, { className: 'h-4 w-4' }) }),
			}),
			m.jsx(co, { children: t }),
		],
	}),
);
pn.displayName = an.displayName;
const mn = a.forwardRef(({ className: e, ...t }, n) => m.jsx(ln, { ref: n, className: Z('-mx-1 my-1 h-px bg-muted', e), ...t }));
mn.displayName = ln.displayName;
un.__docgenInfo = { description: '', methods: [] };
dn.__docgenInfo = {
	description: '',
	methods: [],
	props: { position: { defaultValue: { value: "'popper'", computed: !1 }, required: !1 } },
};
fn.__docgenInfo = { description: '', methods: [] };
pn.__docgenInfo = { description: '', methods: [] };
mn.__docgenInfo = { description: '', methods: [] };
Xe.__docgenInfo = { description: '', methods: [] };
qe.__docgenInfo = { description: '', methods: [] };
export {
	bn as C,
	vt as F,
	an as I,
	gt as P,
	Rt as R,
	go as S,
	nn as T,
	ho as _,
	un as a,
	dn as b,
	So as c,
	pn as d,
	so as e,
	co as f,
	mt as g,
	yo as h,
	Zn as i,
	Pn as j,
	An as k,
	Yn as l,
	Cn as m,
	Qe as n,
	yt as o,
	fn as p,
	Mn as u,
};
