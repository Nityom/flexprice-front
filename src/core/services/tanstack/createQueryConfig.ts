import { DefaultOptions, QueryClientConfig } from '@tanstack/react-query';

// Time constants in milliseconds
const MIN_5 = 5 * 60 * 1000;
const MIN_10 = 10 * 60 * 1000;
const MIN_30 = 30 * 60 * 1000;

/**
 * Query configuration presets for different data types
 */
export const QUERY_PRESETS = {
	REALTIME: {
		staleTime: 0,
		gcTime: MIN_5,
	},
	DEFAULT: {
		staleTime: MIN_5,
		gcTime: MIN_10,
	},
	STATIC: {
		staleTime: MIN_30,
		gcTime: MIN_30 * 2,
	},
} as const;

/**
 * Generates a standard QueryClient configuration for the application.
 * Centralizes retry logic, caching policies, and error handling.
 *
 * @param overrides - Optional partial DefaultOptions to override defaults
 * @returns A QueryClientConfig object
 */
export const createQueryConfig = (overrides?: DefaultOptions): QueryClientConfig => {
	const isTest = process.env.NODE_ENV === 'test';

	return {
		defaultOptions: {
			queries: {
				// Global defaults as requested in the assignment
				staleTime: MIN_5,
				gcTime: MIN_10,

				// Standard behavior overrides
				refetchOnWindowFocus: false,
				retry: isTest ? false : 3,

				...overrides?.queries,
			},
			mutations: {
				retry: false,
				...overrides?.mutations,
			},
		},
	};
};
