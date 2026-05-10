import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface RouteFilters {
	searchQuery: string;
	dateRange: {
		from?: string; // Storing as string for better persistence compatibility
		to?: string;
	};
	status?: string;
	sortColumn?: string;
	sortDirection?: 'asc' | 'desc';
}

const DEFAULT_FILTERS: RouteFilters = {
	searchQuery: '',
	dateRange: {},
	status: undefined,
	sortColumn: undefined,
	sortDirection: undefined,
};

interface FilterStoreState {
	// filtersByRoute stores filters for each page route (e.g. 'invoices', 'customers')
	filtersByRoute: Record<string, RouteFilters>;

	/** Sets a specific filter value for a given route */
	setFilter: (route: string, key: keyof RouteFilters, value: any) => void;

	/** Resets all filters for a given route to defaults */
	resetFilters: (route: string) => void;

	/** Internal method to get filters for a route, ensuring defaults are present */
	getFilters: (route: string) => RouteFilters;
}

/**
 * A Zustand store for managing global filter state across the application.
 * Persists data in sessionStorage keyed by route to maintain state across page reloads.
 * This implementation avoids URL bloat by keeping complex state in storage.
 */
export const useFilterStore = create<FilterStoreState>()(
	persist(
		(set, get) => ({
			filtersByRoute: {},

			getFilters: (route) => {
				return get().filtersByRoute[route] || DEFAULT_FILTERS;
			},

			setFilter: (route, key, value) =>
				set((state) => ({
					filtersByRoute: {
						...state.filtersByRoute,
						[route]: {
							...(state.filtersByRoute[route] || DEFAULT_FILTERS),
							[key]: value,
						},
					},
				})),

			resetFilters: (route) =>
				set((state) => ({
					filtersByRoute: {
						...state.filtersByRoute,
						[route]: DEFAULT_FILTERS,
					},
				})),
		}),
		{
			name: 'flexprice-filter-storage',
			storage: createJSONStorage(() => sessionStorage),
		},
	),
);
