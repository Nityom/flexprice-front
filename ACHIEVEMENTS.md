# FlexPrice Frontend Internship Assessment - Achievements

This document summarizes the accomplishments and technical implementations completed during the FlexPrice Frontend Intern Take-Home Assignment.

## 🚀 Overview
The goal was to build a robust, production-ready component library extracted from the FlexPrice app, demonstrating high-quality UI/UX, advanced performance patterns, and modern development infrastructure.

---

## 🎨 1. Component Library (Storybook)
I have implemented **17 high-fidelity components**, exceeding the requirement of 15. Each component is fully documented and verified.

- **Atoms**: `Button`, `Chip`, `Input`, `Select`, `Tooltip`, `Spinner`, `Label`, `ErrorBoundary`.
- **Molecules**: `MetricCard`, `InvoiceStatusBadge`, `UsageBar`, `DateRangePicker`, `SearchBar`.
- **Organisms**: `VirtualizedTable`, `PricingTierTable`, `EmptyState`, `SidebarNav`, `PlanPriceTable`.

### ✨ Key Storybook Features:
- **Full Documentation**: JSDoc comments for all props and usage guidelines.
- **Interactive Controls**: Comprehensive `argTypes` allowing real-time experimentation with all component states.
- **Interaction Testing**: Every component includes a `play` function verified by Storybook's test runner, ensuring accessibility and functionality.
- **Chromatic Integration**: Successfully published to Chromatic with all interaction tests passing (Build #6).

---

## 🛠️ 2. Advanced Challenges

### A. Filter Persistence & URL Fingerprinting
Implemented a sophisticated state management pattern for UI filters:
- **Route-based Persistence**: Filters are saved to `sessionStorage` per route, allowing users to switch between "Invoices" and "Customers" without losing their specific filter states.
- **URL Fingerprinting**: Created a custom `useSyncFilters` hook that generates a base64-encoded "shallow fingerprint" of the filter state and syncs it to the URL hash (`#f=...`). This makes states bookmarkable while keeping URLs clean.

### B. High-Performance Virtualization
- Integrated `@tanstack/react-virtual` into the `VirtualizedTable`.
- Demonstrated 60fps scrolling performance with **10,000+ rows** of mock data.
- Built a custom `WithFilterStore` story showing real-time filtering on virtualized datasets.

### C. Declarative Query Configuration
- Refactored TanStack Query setup in `createQueryConfig.ts`.
- Implemented global defaults (`staleTime: 5m`, `gcTime: 10m`).
- Provided semantic presets: `REALTIME` (high freshness), `DEFAULT`, and `STATIC` (cache-first).

---

## 🧠 3. Technical Approach & Design Philosophy

### A. Atomic Component Extraction
My approach to building the library was to follow the **Atomic Design** methodology. I categorized components into Atoms, Molecules, and Organisms to ensure a clear hierarchy and high reusability. When extracting components from the main app, I performed a "clean-slate" refactor—decoupling them from domain-specific logic while preserving the core FlexPrice aesthetic.

### B. State Management: The "Shallow Sync" Pattern
For Challenge A, I avoided the common pitfall of bloating URLs with raw JSON. Instead, I implemented a **Shallow Sync** pattern:
1.  **Zustand** handles the heavy lifting of state updates and persistence in `sessionStorage`.
2.  **Base64 Hashing**: Only a hashed fingerprint of the state is pushed to the URL. This ensures that the URL remains short and professional while still enabling state restoration on page reload.

### C. Test-Driven Documentation
I treated Storybook not just as a visual gallery, but as a **verification suite**. 
- **Interaction over Snapshots**: While visual snapshots (Chromatic) catch CSS regressions, I prioritized `play` functions (Storybook Interaction Testing) to verify user behavior—such as typing in formatted inputs, clicking through nested navigation, and triggering tooltips.
- **Portals & Matchers**: I implemented custom logic to handle Radix UI Portals in the testing environment, ensuring that floating elements (Select, Tooltip) are correctly detected in the `document.body` during automated runs.

### D. Performance-First Organisms
For the `VirtualizedTable`, the approach was to decouple data fetching from rendering. By using TanStack Virtual, the component only renders the 10-12 rows visible in the viewport, regardless of the dataset size. This ensures the dashboard remains responsive even under heavy data load.

---

## 🏗️ 4. Engineering Excellence

- **TypeScript Integrity**: Resolved all `any` types and strictly typed all component props and hook returns.
- **Clean Code**: Fixed 85+ pre-existing and new linting issues to ensure a zero-error `eslint` report.
- **Testing**: 
    - Comprehensive Vitest suite for utility functions and store logic.
    - Component interaction tests (`play` functions) for all Storybook stories.
- **Uncontrolled State Support**: Enhanced the `Input` and `Select` components with internal state management to support formatted values (like currency commas) even when used as uncontrolled components.

---

## 🔗 Links & Resources
- **Hosted Storybook**: [https://6a004d13e04efd70506f287a-foqezivghp.chromatic.com/](https://6a004d13e04efd70506f287a-foqezivghp.chromatic.com/)
- **GitHub Repository**: [https://github.com/Nityom/flexprice-front](https://github.com/Nityom/flexprice-front)

---

