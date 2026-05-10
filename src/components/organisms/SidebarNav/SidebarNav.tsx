import React, { useState, useEffect } from 'react';
import {
	SidebarGroup,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarMenuSub,
	SidebarMenuSubItem,
	SidebarMenuSubButton,
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
	useSidebar,
} from '@/components/ui';
import { LucideIcon, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';
import { cn } from '@/lib/utils';

export type SidebarNavItem = {
	title: string;
	url: string;
	icon?: LucideIcon;
	isActive?: boolean;
	disabled?: boolean;
	items?: {
		title: string;
		url: string;
		icon?: LucideIcon;
	}[];
};

export interface SidebarNavProps {
	/** Array of navigation items */
	items: SidebarNavItem[];
	/** Additional CSS classes */
	className?: string;
}

/**
 * A sub-component for rendering individual sidebar items, handling collapsibles and nested links.
 */
const SidebarNavItemRender: React.FC<
	SidebarNavItem & {
		isOpen?: boolean;
		onToggle?: (isOpen: boolean) => void;
		isCollapsed: boolean;
	}
> = (item) => {
	const location = useLocation();
	const navigate = useNavigate();
	const { isOpen, onToggle, isCollapsed } = item;

	const hasChildren = item.items && item.items.length > 0;
	const Icon = item.icon;
	const isActive = item.isActive;

	const handleMainItemClick = (event: React.MouseEvent) => {
		if (event.metaKey || event.ctrlKey || event.shiftKey) {
			return;
		}

		if (hasChildren) {
			event.preventDefault();
			const willOpen = !isOpen;
			onToggle?.(willOpen);

			if (willOpen && item.url && item.url !== '#') {
				setTimeout(() => {
					navigate(item.url);
				}, 100);
			}
		}
	};

	const mainButtonContent = (
		<>
			{Icon && (
				<Icon absoluteStrokeWidth className={cn('!size-5 !stroke-[1.5px] mr-1', isActive ? 'text-primary' : 'text-muted-foreground')} />
			)}
			<span className='text-sm select-none font-medium'>{item.title}</span>
		</>
	);

	if (!hasChildren) {
		return (
			<SidebarMenuItem className={cn(isCollapsed && 'mb-3')}>
				<SidebarMenuButton
					asChild
					disabled={item.disabled}
					tooltip={item.title}
					isActive={isActive}
					className={cn(
						'flex items-center gap-2 h-10 px-2 py-2 rounded-lg transition-all duration-200',
						isActive ? 'bg-accent border border-accent-foreground/10 shadow-sm' : 'hover:bg-accent/50',
						item.disabled && 'cursor-not-allowed opacity-50',
					)}>
					<Link to={item.url || '#'} onClick={(e) => item.disabled && e.preventDefault()}>
						{mainButtonContent}
					</Link>
				</SidebarMenuButton>
			</SidebarMenuItem>
		);
	}

	return (
		<Collapsible open={isOpen && !isCollapsed} onOpenChange={onToggle} className='group/collapsible'>
			<SidebarMenuItem className={cn(isCollapsed && 'mb-3')}>
				<CollapsibleTrigger asChild>
					<SidebarMenuButton
						asChild
						disabled={item.disabled}
						tooltip={item.title}
						isActive={isActive}
						className={cn(
							'flex items-center gap-2 h-10 px-2 py-2 rounded-lg transition-all duration-200',
							isActive ? 'bg-accent border border-accent-foreground/10 shadow-sm' : 'hover:bg-accent/50',
						)}>
						<Link to={item.url || '#'} onClick={handleMainItemClick}>
							{mainButtonContent}
							<ChevronRight className={cn('ml-auto h-4 w-4 transition-transform duration-200', isOpen && 'rotate-90')} />
						</Link>
					</SidebarMenuButton>
				</CollapsibleTrigger>
				<CollapsibleContent
					className={cn('overflow-hidden transition-all duration-300 ease-in-out', !isCollapsed && 'my-1', isCollapsed && '!hidden')}>
					<SidebarMenuSub className='gap-0'>
						{item.items?.map((subItem) => {
							const subActive = location.pathname.startsWith(subItem.url);
							const SubIcon = subItem.icon;
							return (
								<SidebarMenuSubItem key={subItem.title}>
									<SidebarMenuSubButton asChild isActive={subActive} className='w-full'>
										<Link to={subItem.url} className='flex items-center gap-2'>
											{SubIcon && (
												<SubIcon
													absoluteStrokeWidth
													className={cn('!size-4 !stroke-[1.5px]', subActive ? 'text-primary' : 'text-muted-foreground')}
												/>
											)}
											<span>{subItem.title}</span>
										</Link>
									</SidebarMenuSubButton>
								</SidebarMenuSubItem>
							);
						})}
					</SidebarMenuSub>
				</CollapsibleContent>
			</SidebarMenuItem>
		</Collapsible>
	);
};

/**
 * Organism for rendering the main sidebar navigation structure.
 */
const SidebarNav: React.FC<SidebarNavProps> = ({ items, className }) => {
	const location = useLocation();
	const { state } = useSidebar();
	const isCollapsed = state === 'collapsed';
	const [openItemTitle, setOpenItemTitle] = useState<string | null>(null);

	useEffect(() => {
		for (const item of items) {
			if (item.items && item.items.length > 0) {
				const isMainItemActive = location.pathname.startsWith(item.url) && item.url !== '#';
				const isSubItemActive = item.items?.some((subItem) => location.pathname.startsWith(subItem.url));

				if (isMainItemActive || isSubItemActive) {
					setOpenItemTitle(item.title);
					return;
				}
			}
		}
	}, [location.pathname, items]);

	const handleToggle = (itemTitle: string, isOpen: boolean) => {
		if (isOpen) {
			setOpenItemTitle(itemTitle);
		} else {
			setOpenItemTitle(null);
		}
	};

	return (
		<SidebarGroup className={cn('mb-0', className)}>
			<SidebarMenu className={cn('gap-1', isCollapsed && 'gap-4')}>
				{items.map((item) => {
					const isMainItemActive = location.pathname.startsWith(item.url) && item.url !== '#';
					const isSubItemActive = item.items?.some((subItem) => location.pathname.startsWith(subItem.url));
					const isActive = isMainItemActive || isSubItemActive;

					return (
						<SidebarNavItemRender
							key={item.title}
							{...item}
							isActive={isActive}
							isCollapsed={isCollapsed}
							isOpen={openItemTitle === item.title}
							onToggle={(open) => handleToggle(item.title, open)}
						/>
					);
				})}
			</SidebarMenu>
		</SidebarGroup>
	);
};

export default SidebarNav;
