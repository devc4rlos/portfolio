import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from '@/components/link';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
    { label: 'Home', href: '/', sectionId: null },
    { label: 'Projetos', href: '/#projects', sectionId: 'projects' },
    { label: 'Sobre Mim', href: '/#about', sectionId: 'about' },
    { label: 'Contato', href: '/#contact', sectionId: 'contact' },
];

export default function MenuMobile() {
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
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    aria-label="Abrir menu"
                >
                    <Menu className="size-5" />
                </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-64">
                <SheetHeader>
                    <SheetTitle className="sr-only">
                        Menu de navegação
                    </SheetTitle>
                    <SheetDescription className="sr-only">
                        Links de navegação do site
                    </SheetDescription>
                    <Logo />
                </SheetHeader>

                <nav className="flex flex-col gap-2 px-4">
                    {navItems.map(({ label, href, sectionId }) => (
                        <SheetClose asChild key={href}>
                            <Link
                                href={href}
                                className={cn(
                                    'text-base',
                                    activeSection === sectionId &&
                                        'text-foreground',
                                )}
                            >
                                {label}
                            </Link>
                        </SheetClose>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}
