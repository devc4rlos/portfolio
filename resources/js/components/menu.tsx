import { useEffect, useState } from 'react';
import Link from '@/components/link';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const navItems = [
    { label: 'Home', href: '/', sectionId: null },
    { label: 'Projetos', href: '/#projects', sectionId: 'projects' },
    { label: 'Sobre Mim', href: '/#about', sectionId: 'about' },
    { label: 'Contato', href: '/#contact', sectionId: 'contact' },
];

export default function Menu() {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        function updateActive() {
            if (window.scrollY < 100) {
                setActiveSection(null);

                return;
            }

            const sections = ['projects', 'about', 'contact'];

            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id);

                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(id);

                    return;
                }
            }

            setActiveSection(null);
        }

        window.addEventListener('scroll', updateActive, { passive: true });
        updateActive();

        return () => window.removeEventListener('scroll', updateActive);
    }, []);

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
