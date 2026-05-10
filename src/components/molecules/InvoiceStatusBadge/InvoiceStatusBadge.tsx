import React from 'react';
import Chip from '@/components/atoms/Chip/Chip';
import { CheckCircle, XCircle, AlertCircle, Clock, FileText } from 'lucide-react';

export type InvoiceStatus = 'draft' | 'open' | 'paid' | 'uncollectible' | 'void' | 'past_due' | 'processing';

export interface InvoiceStatusBadgeProps {
	status: InvoiceStatus;
	className?: string;
}

const statusConfig: Record<
	InvoiceStatus,
	{ label: string; variant: 'default' | 'success' | 'warning' | 'failed' | 'info'; icon: React.ReactNode }
> = {
	draft: { label: 'Draft', variant: 'default', icon: <FileText size={14} /> },
	open: { label: 'Open', variant: 'info', icon: <Clock size={14} /> },
	paid: { label: 'Paid', variant: 'success', icon: <CheckCircle size={14} /> },
	uncollectible: { label: 'Uncollectible', variant: 'failed', icon: <XCircle size={14} /> },
	void: { label: 'Void', variant: 'default', icon: <XCircle size={14} /> },
	past_due: { label: 'Past Due', variant: 'warning', icon: <AlertCircle size={14} /> },
	processing: { label: 'Processing', variant: 'info', icon: <Clock size={14} /> },
};

/**
 * A specialized Badge component for displaying Invoice statuses with consistent icons and colors.
 */
const InvoiceStatusBadge: React.FC<InvoiceStatusBadgeProps> = ({ status, className }) => {
	const config = statusConfig[status] || statusConfig.draft;

	return <Chip label={config.label} variant={config.variant} icon={config.icon} className={className} />;
};

export default InvoiceStatusBadge;
