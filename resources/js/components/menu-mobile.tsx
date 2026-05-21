import { Menu } from 'lucide-react';
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
import { useActiveSection } from '@/hooks/use-active-section';
import { navItems } from '@/lib/nav-items';
import { cn } from '@/lib/utils';

export default function MenuMobile() {
    const activeSection = useActiveSection();

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
