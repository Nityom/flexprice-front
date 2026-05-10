export const RouteNames = {
	// customer portal
	customerPortal: '/customer-portal',

	home: '/',
	login: '/login',
	auth: '/auth',
	signupConfirmation: '/auth/signup/confirmation',
	resendVerification: '/auth/resend-verification',
	verifyEmail: '/auth/verify-email',

	// Dashboard routes
	homeDashboard: '/home',

	// usage tracking routes
	usageTracking: '/usage-tracking',
	meter: '/usage-tracking/meter',
	addMeter: '/usage-tracking/meter/add-meter',
	editMeter: '/usage-tracking/meter/edit-meter',
	events: '/usage-tracking/events',
	queryPage: '/usage-tracking/query',

	// billing routes
	billing: '/billing',
	customers: '/billing/customers',
	subscriptions: '/billing/subscriptions',
	subscriptionDetails: '/billing/subscriptions/:id',
	taxes: '/billing/taxes',
	invoices: '/billing/invoices',
	createInvoice: '/billing/customers/:customerId/invoices/create',
	creditNotes: '/billing/credit-notes',
	payments: '/billing/payments',
	analytics: '/billing/analytics',

	// product catalog routes
	productCatalog: '/product-catalog',
	plan: '/product-catalog/plan',
	pricing: '/product-catalog/pricing-widget',
	addCharges: '/product-catalog/plan/:planId/add-charges',

	features: '/product-catalog/features',
	createFeature: '/product-catalog/features/create-feature',
	featureDetails: '/product-catalog/features',

	// coupon routes
	coupons: '/product-catalog/coupons',
	couponDetails: '/product-catalog/coupons',

	// add on routes
	addons: '/product-catalog/addons',
	addonDetails: '/product-catalog/addons',
	addonCharges: '/product-catalog/addons/:addonId/add-charges',

	// cost sheet routes
	costSheets: '/product-catalog/cost-sheets',
	costSheetDetails: '/product-catalog/cost-sheets',
	costSheetCharges: '/product-catalog/cost-sheets/:costSheetId/add-charges',

	// group routes
	groups: '/product-catalog/groups',

	// price unit routes
	priceUnits: '/product-catalog/price-units',

	// developers routes
	developers: '/developers',
	webhooks: '/developers/webhooks',
	apiKeys: '/developers/api-keys',
	serviceAccounts: '/developers/service-accounts',
	workflows: '/developers/workflows',
	workflowDetails: '/developers/workflows/:workflowId/:runId',

	// tools routes
	tools: '/tools',
	bulkImports: '/tools/bulk-imports',
	revenue: '/revenue',
	integrations: '/tools/integrations',
	integrationDetails: '/tools/integrations',
	oauthCallback: '/tools/integrations/oauth/callback', // Generic OAuth callback (backend redirect URI)
	quickBooksOAuthCallback: '/tools/integrations/quickbooks/oauth/callback', // Legacy route
	exports: '/tools/exports',
	s3Exports: '/tools/exports/s3',
	s3ExportManagement: '/tools/exports/s3/:connectionId/export',
	s3ExportDetails: '/tools/exports/s3/:connectionId/export/:exportId',
	s3TaskRuns: '/tools/exports/s3/:connectionId/export/:exportId/runs',

	// footer
	onboarding: '/onboarding',
	pricingSetup: '/onboarding/pricing-setup',
	settings: '/settings',
	customerBilling: '/settings/billing',

	// checkout (public - for invoice payments)
	checkout: '/checkout',
};
