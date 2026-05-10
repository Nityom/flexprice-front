import { useEffect } from 'react';
import { useFilterStore, RouteFilters } from '@/store/useFilterStore';

/**
 * A hook that syncs the filter store state with a URL hash fingerprint.
 * This allows for bookmarkable/shareable URLs without bloating the query string.
 *
 * @param route - The route/page identifier (e.g., 'invoices', 'customers')
 */
export const useSyncFilters = (route: string) => {
	const filtersByRoute = useFilterStore((state) => state.filtersByRoute);
	const setFilter = useFilterStore((state) => state.setFilter);
	const currentFilters = filtersByRoute[route] || { searchQuery: '', dateRange: {} };

	// On mount, restore filters from URL hash if present
	useEffect(() => {
		const hash = window.location.hash;
		if (hash.startsWith('#f=')) {
			try {
				const encoded = hash.substring(3);
				const decoded = JSON.parse(atob(encoded)) as Partial<RouteFilters>;

				// Restore each filter key
				Object.entries(decoded).forEach(([key, value]) => {
					setFilter(route, key as keyof RouteFilters, value);
				});
			} catch (e) {
				console.error('Failed to restore filters from hash', e);
			}
		}
	}, [route]);

	// When filters change, update the URL hash with a shallow fingerprint
	useEffect(() => {
		// Only sync non-empty filters to keep URL clean
		const activeFilters: Partial<RouteFilters> = {};

		if (currentFilters.searchQuery) activeFilters.searchQuery = currentFilters.searchQuery;
		if (currentFilters.status) activeFilters.status = currentFilters.status;
		if (currentFilters.sortColumn) activeFilters.sortColumn = currentFilters.sortColumn;
		if (currentFilters.sortDirection) activeFilters.sortDirection = currentFilters.sortDirection;
		if (currentFilters.dateRange?.from || currentFilters.dateRange?.to) {
			activeFilters.dateRange = currentFilters.dateRange;
		}

		if (Object.keys(activeFilters).length > 0) {
			const fingerprint = btoa(JSON.stringify(activeFilters));
			window.history.replaceState(null, '', `#f=${fingerprint}`);
		} else {
			window.history.replaceState(null, '', window.location.pathname);
		}
	}, [currentFilters, route]);

	return currentFilters;
};
