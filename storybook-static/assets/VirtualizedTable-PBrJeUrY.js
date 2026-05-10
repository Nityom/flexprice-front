import { j as x } from './jsx-runtime-Cf8x2fCZ.js';
import { r as E } from './index-t5q4d8OJ.js';
import { r as k } from './index-Ds86VQ4X.js';
import { c as z } from './utils-BLSKlp9E.js';
function w(l, o, e) {
	let t = e.initialDeps ?? [],
		s,
		n = !0;
	function r() {
		var i, a, c;
		let d;
		e.key && (i = e.debug) != null && i.call(e) && (d = Date.now());
		const u = l();
		if (!(u.length !== t.length || u.some((f, p) => t[p] !== f))) return s;
		t = u;
		let h;
		if ((e.key && (a = e.debug) != null && a.call(e) && (h = Date.now()), (s = o(...u)), e.key && (c = e.debug) != null && c.call(e))) {
			const f = Math.round((Date.now() - d) * 100) / 100,
				p = Math.round((Date.now() - h) * 100) / 100,
				m = p / 16,
				v = (g, M) => {
					for (g = String(g); g.length < M; ) g = ' ' + g;
					return g;
				};
			console.info(
				`%c⏱ ${v(p, 5)} /${v(f, 5)} ms`,
				`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * m, 120))}deg 100% 31%);`,
				e == null ? void 0 : e.key,
			);
		}
		return (e != null && e.onChange && !(n && e.skipInitialOnChange) && e.onChange(s), (n = !1), s);
	}
	return (
		(r.updateDeps = (i) => {
			t = i;
		}),
		r
	);
}
function I(l, o) {
	if (l === void 0) throw new Error('Unexpected undefined');
	return l;
}
const W = (l, o) => Math.abs(l - o) < 1.01,
	L = (l, o, e) => {
		let t;
		return function (...s) {
			(l.clearTimeout(t), (t = l.setTimeout(() => o.apply(this, s), e)));
		};
	},
	C = (l) => {
		const { offsetWidth: o, offsetHeight: e } = l;
		return { width: o, height: e };
	},
	j = (l) => l,
	D = (l) => {
		const o = Math.max(l.startIndex - l.overscan, 0),
			e = Math.min(l.endIndex + l.overscan, l.count - 1),
			t = [];
		for (let s = o; s <= e; s++) t.push(s);
		return t;
	},
	N = (l, o) => {
		const e = l.scrollElement;
		if (!e) return;
		const t = l.targetWindow;
		if (!t) return;
		const s = (r) => {
			const { width: i, height: a } = r;
			o({ width: Math.round(i), height: Math.round(a) });
		};
		if ((s(C(e)), !t.ResizeObserver)) return () => {};
		const n = new t.ResizeObserver((r) => {
			const i = () => {
				const a = r[0];
				if (a != null && a.borderBoxSize) {
					const c = a.borderBoxSize[0];
					if (c) {
						s({ width: c.inlineSize, height: c.blockSize });
						return;
					}
				}
				s(C(e));
			};
			l.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
		});
		return (
			n.observe(e, { box: 'border-box' }),
			() => {
				n.unobserve(e);
			}
		);
	},
	A = { passive: !0 },
	T = typeof window > 'u' ? !0 : 'onscrollend' in window,
	V = (l, o) => {
		const e = l.scrollElement;
		if (!e) return;
		const t = l.targetWindow;
		if (!t) return;
		let s = 0;
		const n =
				l.options.useScrollendEvent && T
					? () => {}
					: L(
							t,
							() => {
								o(s, !1);
							},
							l.options.isScrollingResetDelay,
						),
			r = (d) => () => {
				const { horizontal: u, isRtl: S } = l.options;
				((s = u ? e.scrollLeft * ((S && -1) || 1) : e.scrollTop), n(), o(s, d));
			},
			i = r(!0),
			a = r(!1);
		e.addEventListener('scroll', i, A);
		const c = l.options.useScrollendEvent && T;
		return (
			c && e.addEventListener('scrollend', a, A),
			() => {
				(e.removeEventListener('scroll', i), c && e.removeEventListener('scrollend', a));
			}
		);
	},
	H = (l, o, e) => {
		if (o != null && o.borderBoxSize) {
			const t = o.borderBoxSize[0];
			if (t) return Math.round(t[e.options.horizontal ? 'inlineSize' : 'blockSize']);
		}
		return l[e.options.horizontal ? 'offsetWidth' : 'offsetHeight'];
	},
	P = (l, { adjustments: o = 0, behavior: e }, t) => {
		var s, n;
		const r = l + o;
		(n = (s = t.scrollElement) == null ? void 0 : s.scrollTo) == null ||
			n.call(s, { [t.options.horizontal ? 'left' : 'top']: r, behavior: e });
	};
class $ {
	constructor(o) {
		((this.unsubs = []),
			(this.scrollElement = null),
			(this.targetWindow = null),
			(this.isScrolling = !1),
			(this.scrollState = null),
			(this.measurementsCache = []),
			(this.itemSizeCache = new Map()),
			(this.laneAssignments = new Map()),
			(this.pendingMeasuredCacheIndexes = []),
			(this.prevLanes = void 0),
			(this.lanesChangedFlag = !1),
			(this.lanesSettling = !1),
			(this.scrollRect = null),
			(this.scrollOffset = null),
			(this.scrollDirection = null),
			(this.scrollAdjustments = 0),
			(this.elementsCache = new Map()),
			(this.now = () => {
				var e, t, s;
				return (
					((s = (t = (e = this.targetWindow) == null ? void 0 : e.performance) == null ? void 0 : t.now) == null ? void 0 : s.call(t)) ??
					Date.now()
				);
			}),
			(this.observer = (() => {
				let e = null;
				const t = () =>
					e ||
					(!this.targetWindow || !this.targetWindow.ResizeObserver
						? null
						: (e = new this.targetWindow.ResizeObserver((s) => {
								s.forEach((n) => {
									const r = () => {
										const i = n.target,
											a = this.indexFromElement(i);
										if (!i.isConnected) {
											this.observer.unobserve(i);
											return;
										}
										this.shouldMeasureDuringScroll(a) && this.resizeItem(a, this.options.measureElement(i, n, this));
									};
									this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
								});
							})));
				return {
					disconnect: () => {
						var s;
						((s = t()) == null || s.disconnect(), (e = null));
					},
					observe: (s) => {
						var n;
						return (n = t()) == null ? void 0 : n.observe(s, { box: 'border-box' });
					},
					unobserve: (s) => {
						var n;
						return (n = t()) == null ? void 0 : n.unobserve(s);
					},
				};
			})()),
			(this.range = null),
			(this.setOptions = (e) => {
				(Object.entries(e).forEach(([t, s]) => {
					typeof s > 'u' && delete e[t];
				}),
					(this.options = {
						debug: !1,
						initialOffset: 0,
						overscan: 1,
						paddingStart: 0,
						paddingEnd: 0,
						scrollPaddingStart: 0,
						scrollPaddingEnd: 0,
						horizontal: !1,
						getItemKey: j,
						rangeExtractor: D,
						onChange: () => {},
						measureElement: H,
						initialRect: { width: 0, height: 0 },
						scrollMargin: 0,
						gap: 0,
						indexAttribute: 'data-index',
						initialMeasurementsCache: [],
						lanes: 1,
						isScrollingResetDelay: 150,
						enabled: !0,
						isRtl: !1,
						useScrollendEvent: !1,
						useAnimationFrameWithResizeObserver: !1,
						laneAssignmentMode: 'estimate',
						...e,
					}));
			}),
			(this.notify = (e) => {
				var t, s;
				(s = (t = this.options).onChange) == null || s.call(t, this, e);
			}),
			(this.maybeNotify = w(
				() => (
					this.calculateRange(),
					[this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]
				),
				(e) => {
					this.notify(e);
				},
				{
					key: !1,
					debug: () => this.options.debug,
					initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null],
				},
			)),
			(this.cleanup = () => {
				(this.unsubs.filter(Boolean).forEach((e) => e()),
					(this.unsubs = []),
					this.observer.disconnect(),
					this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), (this.rafId = null)),
					(this.scrollState = null),
					(this.scrollElement = null),
					(this.targetWindow = null));
			}),
			(this._didMount = () => () => {
				this.cleanup();
			}),
			(this._willUpdate = () => {
				var e;
				const t = this.options.enabled ? this.options.getScrollElement() : null;
				if (this.scrollElement !== t) {
					if ((this.cleanup(), !t)) {
						this.maybeNotify();
						return;
					}
					((this.scrollElement = t),
						this.scrollElement && 'ownerDocument' in this.scrollElement
							? (this.targetWindow = this.scrollElement.ownerDocument.defaultView)
							: (this.targetWindow = ((e = this.scrollElement) == null ? void 0 : e.window) ?? null),
						this.elementsCache.forEach((s) => {
							this.observer.observe(s);
						}),
						this.unsubs.push(
							this.options.observeElementRect(this, (s) => {
								((this.scrollRect = s), this.maybeNotify());
							}),
						),
						this.unsubs.push(
							this.options.observeElementOffset(this, (s, n) => {
								((this.scrollAdjustments = 0),
									(this.scrollDirection = n ? (this.getScrollOffset() < s ? 'forward' : 'backward') : null),
									(this.scrollOffset = s),
									(this.isScrolling = n),
									this.scrollState && this.scheduleScrollReconcile(),
									this.maybeNotify());
							}),
						),
						this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 }));
				}
			}),
			(this.rafId = null),
			(this.getSize = () =>
				this.options.enabled
					? ((this.scrollRect = this.scrollRect ?? this.options.initialRect), this.scrollRect[this.options.horizontal ? 'width' : 'height'])
					: ((this.scrollRect = null), 0)),
			(this.getScrollOffset = () =>
				this.options.enabled
					? ((this.scrollOffset =
							this.scrollOffset ??
							(typeof this.options.initialOffset == 'function' ? this.options.initialOffset() : this.options.initialOffset)),
						this.scrollOffset)
					: ((this.scrollOffset = null), 0)),
			(this.getFurthestMeasurement = (e, t) => {
				const s = new Map(),
					n = new Map();
				for (let r = t - 1; r >= 0; r--) {
					const i = e[r];
					if (s.has(i.lane)) continue;
					const a = n.get(i.lane);
					if ((a == null || i.end > a.end ? n.set(i.lane, i) : i.end < a.end && s.set(i.lane, !0), s.size === this.options.lanes)) break;
				}
				return n.size === this.options.lanes
					? Array.from(n.values()).sort((r, i) => (r.end === i.end ? r.index - i.index : r.end - i.end))[0]
					: void 0;
			}),
			(this.getMeasurementOptions = w(
				() => [
					this.options.count,
					this.options.paddingStart,
					this.options.scrollMargin,
					this.options.getItemKey,
					this.options.enabled,
					this.options.lanes,
					this.options.laneAssignmentMode,
				],
				(e, t, s, n, r, i, a) => (
					this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0),
					(this.prevLanes = i),
					(this.pendingMeasuredCacheIndexes = []),
					{ count: e, paddingStart: t, scrollMargin: s, getItemKey: n, enabled: r, lanes: i, laneAssignmentMode: a }
				),
				{ key: !1 },
			)),
			(this.getMeasurements = w(
				() => [this.getMeasurementOptions(), this.itemSizeCache],
				({ count: e, paddingStart: t, scrollMargin: s, getItemKey: n, enabled: r, lanes: i, laneAssignmentMode: a }, c) => {
					if (!r) return ((this.measurementsCache = []), this.itemSizeCache.clear(), this.laneAssignments.clear(), []);
					if (this.laneAssignments.size > e) for (const h of this.laneAssignments.keys()) h >= e && this.laneAssignments.delete(h);
					(this.lanesChangedFlag &&
						((this.lanesChangedFlag = !1),
						(this.lanesSettling = !0),
						(this.measurementsCache = []),
						this.itemSizeCache.clear(),
						this.laneAssignments.clear(),
						(this.pendingMeasuredCacheIndexes = [])),
						this.measurementsCache.length === 0 &&
							!this.lanesSettling &&
							((this.measurementsCache = this.options.initialMeasurementsCache),
							this.measurementsCache.forEach((h) => {
								this.itemSizeCache.set(h.key, h.size);
							})));
					const d = this.lanesSettling
						? 0
						: this.pendingMeasuredCacheIndexes.length > 0
							? Math.min(...this.pendingMeasuredCacheIndexes)
							: 0;
					((this.pendingMeasuredCacheIndexes = []), this.lanesSettling && this.measurementsCache.length === e && (this.lanesSettling = !1));
					const u = this.measurementsCache.slice(0, d),
						S = new Array(i).fill(void 0);
					for (let h = 0; h < d; h++) {
						const f = u[h];
						f && (S[f.lane] = h);
					}
					for (let h = d; h < e; h++) {
						const f = n(h),
							p = this.laneAssignments.get(h);
						let m, v;
						const g = a === 'estimate' || c.has(f);
						if (p !== void 0 && this.options.lanes > 1) {
							m = p;
							const b = S[m],
								O = b !== void 0 ? u[b] : void 0;
							v = O ? O.end + this.options.gap : t + s;
						} else {
							const b = this.options.lanes === 1 ? u[h - 1] : this.getFurthestMeasurement(u, h);
							((v = b ? b.end + this.options.gap : t + s),
								(m = b ? b.lane : h % this.options.lanes),
								this.options.lanes > 1 && g && this.laneAssignments.set(h, m));
						}
						const M = c.get(f),
							y = typeof M == 'number' ? M : this.options.estimateSize(h),
							_ = v + y;
						((u[h] = { index: h, start: v, size: y, end: _, key: f, lane: m }), (S[m] = h));
					}
					return ((this.measurementsCache = u), u);
				},
				{ key: !1, debug: () => this.options.debug },
			)),
			(this.calculateRange = w(
				() => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
				(e, t, s, n) => (this.range = e.length > 0 && t > 0 ? B({ measurements: e, outerSize: t, scrollOffset: s, lanes: n }) : null),
				{ key: !1, debug: () => this.options.debug },
			)),
			(this.getVirtualIndexes = w(
				() => {
					let e = null,
						t = null;
					const s = this.calculateRange();
					return (
						s && ((e = s.startIndex), (t = s.endIndex)),
						this.maybeNotify.updateDeps([this.isScrolling, e, t]),
						[this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
					);
				},
				(e, t, s, n, r) => (n === null || r === null ? [] : e({ startIndex: n, endIndex: r, overscan: t, count: s })),
				{ key: !1, debug: () => this.options.debug },
			)),
			(this.indexFromElement = (e) => {
				const t = this.options.indexAttribute,
					s = e.getAttribute(t);
				return s ? parseInt(s, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
			}),
			(this.shouldMeasureDuringScroll = (e) => {
				var t;
				if (!this.scrollState || this.scrollState.behavior !== 'smooth') return !0;
				const s =
					this.scrollState.index ?? ((t = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : t.index);
				if (s !== void 0 && this.range) {
					const n = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2)),
						r = Math.max(0, s - n),
						i = Math.min(this.options.count - 1, s + n);
					return e >= r && e <= i;
				}
				return !0;
			}),
			(this.measureElement = (e) => {
				if (!e) {
					this.elementsCache.forEach((r, i) => {
						r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(i));
					});
					return;
				}
				const t = this.indexFromElement(e),
					s = this.options.getItemKey(t),
					n = this.elementsCache.get(s);
				(n !== e && (n && this.observer.unobserve(n), this.observer.observe(e), this.elementsCache.set(s, e)),
					(!this.isScrolling || this.scrollState) &&
						this.shouldMeasureDuringScroll(t) &&
						this.resizeItem(t, this.options.measureElement(e, void 0, this)));
			}),
			(this.resizeItem = (e, t) => {
				var s;
				const n = this.measurementsCache[e];
				if (!n) return;
				const r = this.itemSizeCache.get(n.key) ?? n.size,
					i = t - r;
				i !== 0 &&
					(((s = this.scrollState) == null ? void 0 : s.behavior) !== 'smooth' &&
						(this.shouldAdjustScrollPositionOnItemSizeChange !== void 0
							? this.shouldAdjustScrollPositionOnItemSizeChange(n, i, this)
							: n.start < this.getScrollOffset() + this.scrollAdjustments) &&
						this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += i), behavior: void 0 }),
					this.pendingMeasuredCacheIndexes.push(n.index),
					(this.itemSizeCache = new Map(this.itemSizeCache.set(n.key, t))),
					this.notify(!1));
			}),
			(this.getVirtualItems = w(
				() => [this.getVirtualIndexes(), this.getMeasurements()],
				(e, t) => {
					const s = [];
					for (let n = 0, r = e.length; n < r; n++) {
						const i = e[n],
							a = t[i];
						s.push(a);
					}
					return s;
				},
				{ key: !1, debug: () => this.options.debug },
			)),
			(this.getVirtualItemForOffset = (e) => {
				const t = this.getMeasurements();
				if (t.length !== 0) return I(t[R(0, t.length - 1, (s) => I(t[s]).start, e)]);
			}),
			(this.getMaxScrollOffset = () => {
				if (!this.scrollElement) return 0;
				if ('scrollHeight' in this.scrollElement)
					return this.options.horizontal
						? this.scrollElement.scrollWidth - this.scrollElement.clientWidth
						: this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
				{
					const e = this.scrollElement.document.documentElement;
					return this.options.horizontal ? e.scrollWidth - this.scrollElement.innerWidth : e.scrollHeight - this.scrollElement.innerHeight;
				}
			}),
			(this.getOffsetForAlignment = (e, t, s = 0) => {
				if (!this.scrollElement) return 0;
				const n = this.getSize(),
					r = this.getScrollOffset();
				(t === 'auto' && (t = e >= r + n ? 'end' : 'start'), t === 'center' ? (e += (s - n) / 2) : t === 'end' && (e -= n));
				const i = this.getMaxScrollOffset();
				return Math.max(Math.min(i, e), 0);
			}),
			(this.getOffsetForIndex = (e, t = 'auto') => {
				e = Math.max(0, Math.min(e, this.options.count - 1));
				const s = this.getSize(),
					n = this.getScrollOffset(),
					r = this.measurementsCache[e];
				if (!r) return;
				if (t === 'auto')
					if (r.end >= n + s - this.options.scrollPaddingEnd) t = 'end';
					else if (r.start <= n + this.options.scrollPaddingStart) t = 'start';
					else return [n, t];
				if (t === 'end' && e === this.options.count - 1) return [this.getMaxScrollOffset(), t];
				const i = t === 'end' ? r.end + this.options.scrollPaddingEnd : r.start - this.options.scrollPaddingStart;
				return [this.getOffsetForAlignment(i, t, r.size), t];
			}),
			(this.scrollToOffset = (e, { align: t = 'start', behavior: s = 'auto' } = {}) => {
				const n = this.getOffsetForAlignment(e, t),
					r = this.now();
				((this.scrollState = { index: null, align: t, behavior: s, startedAt: r, lastTargetOffset: n, stableFrames: 0 }),
					this._scrollToOffset(n, { adjustments: void 0, behavior: s }),
					this.scheduleScrollReconcile());
			}),
			(this.scrollToIndex = (e, { align: t = 'auto', behavior: s = 'auto' } = {}) => {
				e = Math.max(0, Math.min(e, this.options.count - 1));
				const n = this.getOffsetForIndex(e, t);
				if (!n) return;
				const [r, i] = n,
					a = this.now();
				((this.scrollState = { index: e, align: i, behavior: s, startedAt: a, lastTargetOffset: r, stableFrames: 0 }),
					this._scrollToOffset(r, { adjustments: void 0, behavior: s }),
					this.scheduleScrollReconcile());
			}),
			(this.scrollBy = (e, { behavior: t = 'auto' } = {}) => {
				const s = this.getScrollOffset() + e,
					n = this.now();
				((this.scrollState = { index: null, align: 'start', behavior: t, startedAt: n, lastTargetOffset: s, stableFrames: 0 }),
					this._scrollToOffset(s, { adjustments: void 0, behavior: t }),
					this.scheduleScrollReconcile());
			}),
			(this.getTotalSize = () => {
				var e;
				const t = this.getMeasurements();
				let s;
				if (t.length === 0) s = this.options.paddingStart;
				else if (this.options.lanes === 1) s = ((e = t[t.length - 1]) == null ? void 0 : e.end) ?? 0;
				else {
					const n = Array(this.options.lanes).fill(null);
					let r = t.length - 1;
					for (; r >= 0 && n.some((i) => i === null); ) {
						const i = t[r];
						(n[i.lane] === null && (n[i.lane] = i.end), r--);
					}
					s = Math.max(...n.filter((i) => i !== null));
				}
				return Math.max(s - this.options.scrollMargin + this.options.paddingEnd, 0);
			}),
			(this._scrollToOffset = (e, { adjustments: t, behavior: s }) => {
				this.options.scrollToFn(e, { behavior: s, adjustments: t }, this);
			}),
			(this.measure = () => {
				((this.itemSizeCache = new Map()), (this.laneAssignments = new Map()), this.notify(!1));
			}),
			this.setOptions(o));
	}
	scheduleScrollReconcile() {
		if (!this.targetWindow) {
			this.scrollState = null;
			return;
		}
		this.rafId == null &&
			(this.rafId = this.targetWindow.requestAnimationFrame(() => {
				((this.rafId = null), this.reconcileScroll());
			}));
	}
	reconcileScroll() {
		if (!this.scrollState || !this.scrollElement) return;
		if (this.now() - this.scrollState.startedAt > 5e3) {
			this.scrollState = null;
			return;
		}
		const t = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0,
			s = t ? t[0] : this.scrollState.lastTargetOffset,
			n = 1,
			r = s !== this.scrollState.lastTargetOffset;
		if (!r && W(s, this.getScrollOffset())) {
			if ((this.scrollState.stableFrames++, this.scrollState.stableFrames >= n)) {
				this.scrollState = null;
				return;
			}
		} else
			((this.scrollState.stableFrames = 0),
				r &&
					((this.scrollState.lastTargetOffset = s),
					(this.scrollState.behavior = 'auto'),
					this._scrollToOffset(s, { adjustments: void 0, behavior: 'auto' })));
		this.scheduleScrollReconcile();
	}
}
const R = (l, o, e, t) => {
	for (; l <= o; ) {
		const s = ((l + o) / 2) | 0,
			n = e(s);
		if (n < t) l = s + 1;
		else if (n > t) o = s - 1;
		else return s;
	}
	return l > 0 ? l - 1 : 0;
};
function B({ measurements: l, outerSize: o, scrollOffset: e, lanes: t }) {
	const s = l.length - 1,
		n = (a) => l[a].start;
	if (l.length <= t) return { startIndex: 0, endIndex: s };
	let r = R(0, s, n, e),
		i = r;
	if (t === 1) for (; i < s && l[i].end < e + o; ) i++;
	else if (t > 1) {
		const a = Array(t).fill(0);
		for (; i < s && a.some((d) => d < e + o); ) {
			const d = l[i];
			((a[d.lane] = d.end), i++);
		}
		const c = Array(t).fill(e + o);
		for (; r >= 0 && c.some((d) => d >= e); ) {
			const d = l[r];
			((c[d.lane] = d.start), r--);
		}
		((r = Math.max(0, r - (r % t))), (i = Math.min(s, i + (t - 1 - (i % t)))));
	}
	return { startIndex: r, endIndex: i };
}
const F = typeof document < 'u' ? E.useLayoutEffect : E.useEffect;
function q({ useFlushSync: l = !0, ...o }) {
	const e = E.useReducer(() => ({}), {})[1],
		t = {
			...o,
			onChange: (n, r) => {
				var i;
				(l && r ? k.flushSync(e) : e(), (i = o.onChange) == null || i.call(o, n, r));
			},
		},
		[s] = E.useState(() => new $(t));
	return (s.setOptions(t), F(() => s._didMount(), []), F(() => s._willUpdate()), s);
}
function U(l) {
	return q({ observeElementRect: N, observeElementOffset: V, scrollToFn: P, ...l });
}
function K({ data: l, columns: o, estimateRowHeight: e = 45, height: t = 500, className: s }) {
	const n = E.useRef(null),
		r = U({ count: l.length, getScrollElement: () => n.current, estimateSize: () => e, overscan: 5 });
	return x.jsx('div', {
		ref: n,
		className: z('overflow-auto border border-border rounded-lg bg-card', s),
		style: { height: `${t}px` },
		children: x.jsxs('div', {
			style: { height: `${r.getTotalSize()}px`, width: '100%', position: 'relative' },
			children: [
				x.jsx('div', {
					className:
						'sticky top-0 z-10 flex bg-muted/90 backdrop-blur-sm border-b border-border font-semibold text-xs text-muted-foreground uppercase tracking-wider',
					children: o.map((i, a) =>
						x.jsx('div', { className: 'px-4 py-3', style: { flex: i.width ? `0 0 ${i.width}px` : '1' }, children: i.header }, a),
					),
				}),
				r.getVirtualItems().map((i) => {
					const a = l[i.index];
					return x.jsx(
						'div',
						{
							className: z(
								'absolute top-0 left-0 w-full flex items-center border-b border-border/50 hover:bg-accent/30 transition-colors',
								i.index % 2 === 0 ? 'bg-background' : 'bg-muted/10',
							),
							style: { height: `${i.size}px`, transform: `translateY(${i.start}px)` },
							children: o.map((c, d) =>
								x.jsx(
									'div',
									{
										className: 'px-4 py-2 truncate text-sm',
										style: { flex: c.width ? `0 0 ${c.width}px` : '1' },
										children: c.cell ? c.cell(a[c.accessor], a) : String(a[c.accessor]),
									},
									d,
								),
							),
						},
						i.key,
					);
				}),
			],
		}),
	});
}
K.__docgenInfo = {
	description: `A highly performant table component for rendering massive datasets (e.g. 10,000+ rows).
Uses windowing/virtualization to only render visible rows.`,
	methods: [],
	displayName: 'VirtualizedTable',
	props: {
		data: { required: !0, tsType: { name: 'Array', elements: [{ name: 'T' }], raw: 'T[]' }, description: 'Data array to display' },
		columns: {
			required: !0,
			tsType: { name: 'Array', elements: [{ name: 'Column', elements: [{ name: 'T' }], raw: 'Column<T>' }], raw: 'Column<T>[]' },
			description: 'Column definitions',
		},
		estimateRowHeight: {
			required: !1,
			tsType: { name: 'number' },
			description: 'Estimated height of each row in pixels',
			defaultValue: { value: '45', computed: !1 },
		},
		height: {
			required: !1,
			tsType: { name: 'number' },
			description: 'Height of the viewport in pixels',
			defaultValue: { value: '500', computed: !1 },
		},
		className: { required: !1, tsType: { name: 'string' }, description: 'Additional CSS classes for the container' },
	},
};
export { K as V };
