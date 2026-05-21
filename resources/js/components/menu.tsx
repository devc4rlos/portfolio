import Link from '@/components/link';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { useActiveSection } from '@/hooks/use-active-section';
import { navItems } from '@/lib/nav-items';
import { cn } from '@/lib/utils';

export default function Menu() {
    const activeSection = useActiveSection();

    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                {navItems.map(({ label, href, sectionId }) => (
                    <NavigationMenuItem key={href}>
                        <NavigationMenuLink asChild>
                            <Link
                                href={href}
                                className={cn(
                                    activeSection === sectionId &&
                                        'text-foreground',
                                )}
                            >
                                {label}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
