import { describe, it, expect, vi } from 'vitest';
import { getCurrencySymbol, toSentenceCase, formatEntityType, calculateCouponDiscount, generateUniqueId } from './helper_functions';

// Mock dependencies
vi.mock('iso-country-currency', () => ({
	getAllISOCodes: () => [
		{ currency: 'USD', symbol: '$', countryName: 'United States' },
		{ currency: 'EUR', symbol: '€', countryName: 'Eurozone' },
		{ currency: 'INR', symbol: '₹', countryName: 'India' },
	],
}));

vi.mock('uuid', () => ({
	v4: () => '1234-5678-90ab-cdef',
}));

describe('helper_functions utilities', () => {
	describe('getCurrencySymbol', () => {
		it('returns correct symbol for known currencies', () => {
			expect(getCurrencySymbol('USD')).toBe('$');
			expect(getCurrencySymbol('INR')).toBe('₹');
		});

		it('returns the currency code if symbol not found', () => {
			expect(getCurrencySymbol('XYZ')).toBe('XYZ');
		});
	});

	describe('toSentenceCase', () => {
		it('converts strings to sentence case', () => {
			expect(toSentenceCase('HELLO WORLD')).toBe('Hello world');
			expect(toSentenceCase('test')).toBe('Test');
		});

		it('handles empty strings', () => {
			expect(toSentenceCase('')).toBe('');
		});
	});

	describe('formatEntityType', () => {
		it('formats entity types correctly', () => {
			expect(formatEntityType('credit_topups')).toBe('Credit Top-ups');
			expect(formatEntityType('events')).toBe('Events');
			expect(formatEntityType('user_profile_data')).toBe('User Profile Data');
		});
	});

	describe('calculateCouponDiscount', () => {
		it('calculates fixed discount', () => {
			const coupon = { type: 'fixed', amount_off: '10' };
			expect(calculateCouponDiscount(coupon, 100)).toBe(10);
		});

		it('calculates percentage discount', () => {
			const coupon = { type: 'percentage', percentage_off: '20' };
			expect(calculateCouponDiscount(coupon, 100)).toBe(20);
		});

		it('caps fixed discount at original amount', () => {
			const coupon = { type: 'fixed', amount_off: '150' };
			expect(calculateCouponDiscount(coupon, 100)).toBe(100);
		});
	});

	describe('generateUniqueId', () => {
		it('generates a unique id without dashes', () => {
			expect(generateUniqueId()).toBe('1234567890abcdef');
		});
	});
});
