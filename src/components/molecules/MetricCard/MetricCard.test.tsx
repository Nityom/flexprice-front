import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MetricCard from './MetricCard';

describe('MetricCard Component', () => {
	it('renders title and value correctly', () => {
		render(<MetricCard title='Test Metric' value={100} />);
		expect(screen.getByText('Test Metric')).toBeInTheDocument();
		expect(screen.getByText('100.00')).toBeInTheDocument();
	});

	it('formats currency correctly', () => {
		render(<MetricCard title='Revenue' value={1234.56} currency='USD' />);
		// $ is the symbol for USD in getCurrencySymbol
		expect(screen.getByText(/\$ 1,234.56/)).toBeInTheDocument();
	});

	it('formats percentage correctly', () => {
		render(<MetricCard title='Growth' value={15.5} isPercent />);
		expect(screen.getByText('15.50%')).toBeInTheDocument();
	});

	it('shows trending up indicator when positive change', () => {
		const { container } = render(<MetricCard title='Usage' value={500} showChangeIndicator isNegative={false} />);
		// TrendingUp icon is rendered
		const icon = container.querySelector('svg');
		expect(icon).toBeInTheDocument();
		expect(icon?.parentElement).toHaveClass('text-success');
	});

	it('shows trending down indicator when negative change', () => {
		const { container } = render(<MetricCard title='Churn' value={1.2} showChangeIndicator isNegative={true} />);
		// TrendingDown icon is rendered
		const icon = container.querySelector('svg');
		expect(icon).toBeInTheDocument();
		expect(icon?.parentElement).toHaveClass('text-destructive');
	});
});
