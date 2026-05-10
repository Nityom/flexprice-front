import { describe, it, expect, beforeEach } from 'vitest';
import { useFilterStore } from './useFilterStore';

describe('useFilterStore', () => {
	const ROUTE = 'invoices';

	beforeEach(() => {
		useFilterStore.getState().resetFilters(ROUTE);
		sessionStorage.clear();
	});

	it('should have initial state for a route', () => {
		const filters = useFilterStore.getState().getFilters(ROUTE);
		expect(filters.searchQuery).toBe('');
		expect(filters.dateRange).toEqual({});
		expect(filters.status).toBeUndefined();
	});

	it('should update searchQuery for a route', () => {
		useFilterStore.getState().setFilter(ROUTE, 'searchQuery', 'test search');
		const filters = useFilterStore.getState().getFilters(ROUTE);
		expect(filters.searchQuery).toBe('test search');
	});

	it('should update dateRange for a route', () => {
		const range = { from: '2024-01-01', to: '2024-01-31' };
		useFilterStore.getState().setFilter(ROUTE, 'dateRange', range);
		const filters = useFilterStore.getState().getFilters(ROUTE);
		expect(filters.dateRange).toEqual(range);
	});

	it('should reset filters for a route', () => {
		useFilterStore.getState().setFilter(ROUTE, 'searchQuery', 'temp');
		useFilterStore.getState().resetFilters(ROUTE);
		const filters = useFilterStore.getState().getFilters(ROUTE);
		expect(filters.searchQuery).toBe('');
	});

	it('should persist to sessionStorage', () => {
		useFilterStore.getState().setFilter(ROUTE, 'searchQuery', 'persisted search');

		const stored = sessionStorage.getItem('flexprice-filter-storage');
		expect(stored).toBeTruthy();
		const state = JSON.parse(stored!).state;
		expect(state.filtersByRoute[ROUTE].searchQuery).toBe('persisted search');
	});
});
