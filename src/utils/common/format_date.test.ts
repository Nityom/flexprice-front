import { describe, it, expect } from 'vitest';
import formatDate, {
	formatDateTime,
	formatBillingPeriodDate,
	formatBillingPeriod,
	getCalendarDayInZone,
	startOfDayInZone,
} from './format_date';

describe('format_date utilities', () => {
	describe('formatDate', () => {
		it('formats date correctly in default en-US', () => {
			const date = new Date('2024-03-11T10:00:00Z');
			expect(formatDate(date)).toBe('Mar 11, 2024');
		});

		it('returns "Invalid Date" for invalid inputs', () => {
			expect(formatDate('invalid')).toBe('Invalid Date');
		});
	});

	describe('formatDateTime', () => {
		it('formats date and time correctly', () => {
			const dateStr = '2024-03-11T14:30:00';
			// Use contain because AM/PM might vary by environment or locale slightly
			expect(formatDateTime(dateStr)).toContain('2024');
			expect(formatDateTime(dateStr)).toContain('Mar');
			expect(formatDateTime(dateStr)).toContain('11');
			expect(formatDateTime(dateStr)).toContain('02:30');
		});
	});

	describe('formatBillingPeriodDate', () => {
		it('formats date as day and short month in UTC', () => {
			expect(formatBillingPeriodDate('2024-03-11T23:59:59Z')).toBe('11 Mar');
			expect(formatBillingPeriodDate('2024-09-30T23:00:00Z')).toBe('30 Sep');
		});
	});

	describe('formatBillingPeriod', () => {
		it('formats a range correctly, subtracting one second from end', () => {
			const start = '2024-03-01T00:00:00Z';
			const end = '2024-04-01T00:00:00Z'; // 1 April becomes 31 Mar
			expect(formatBillingPeriod(start, end)).toBe('1 Mar - 31 Mar');
		});
	});

	describe('Zoned Helpers', () => {
		it('getCalendarDayInZone returns correct components', () => {
			const date = new Date(Date.UTC(2024, 2, 11, 23, 0, 0)); // 11 Mar UTC
			const utcDay = getCalendarDayInZone(date, 'utc');
			expect(utcDay.year).toBe(2024);
			expect(utcDay.month).toBe(2);
			expect(utcDay.date).toBe(11);
		});

		it('startOfDayInZone creates start of day correctly', () => {
			const utcStart = startOfDayInZone(2024, 2, 11, 'utc');
			expect(utcStart.getUTCHours()).toBe(0);
			expect(utcStart.getUTCMinutes()).toBe(0);
			expect(utcStart.getUTCDate()).toBe(11);
		});
	});
});
