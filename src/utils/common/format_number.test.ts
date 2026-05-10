import { describe, it, expect } from 'vitest';
import formatNumber, { formatCompactNumber } from './format_number';

describe('format_number utilities', () => {
	describe('formatNumber', () => {
		it('formats numbers with default decimals', () => {
			expect(formatNumber(1234.567)).toBe('1,235');
			expect(formatNumber(1000000)).toBe('1,000,000');
		});

		it('formats numbers with specified decimals', () => {
			expect(formatNumber(1234.567, 2)).toBe('1,234.57');
			expect(formatNumber(1234.5, 3)).toBe('1,234.500');
		});

		it('returns "-" for falsy values', () => {
			expect(formatNumber(0)).toBe('-');
			// @ts-expect-error - Testing null input specifically to ensure fallback works
			expect(formatNumber(null)).toBe('-');
		});
	});

	describe('formatCompactNumber', () => {
		it('formats thousands to k', () => {
			expect(formatCompactNumber(1000)).toBe('1k');
			expect(formatCompactNumber(1500)).toBe('1.5k');
			expect(formatCompactNumber(9900)).toBe('9.9k');
		});

		it('formats millions to M', () => {
			expect(formatCompactNumber(1000000)).toBe('1M');
			expect(formatCompactNumber(2500000)).toBe('2.5M');
		});

		it('formats billions to B', () => {
			expect(formatCompactNumber(1000000000)).toBe('1B');
			expect(formatCompactNumber(5700000000)).toBe('5.7B');
		});

		it('returns standard string for small numbers', () => {
			expect(formatCompactNumber(500)).toBe('500');
			expect(formatCompactNumber(999)).toBe('999');
		});
	});
});
