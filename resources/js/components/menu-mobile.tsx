import { Menu } from 'lucide-react';

import Link from '@/components/link';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetDescription,
} from '@/components/ui/sheet';

const menuItems = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Projetos',
        href: '/#projects',
    },
    {
        label: 'Sobre Mim',
        href: '/#about',
    },
];

export default function MenuMobile() {
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

            <SheetContent side="right" className="w-48">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>

                <nav className="flex flex-col gap-4 px-10">
                    {menuItems.map((item) => (
                        <SheetClose asChild key={item.href}>
                            <Link href={item.href} className="text-base">
                                {item.label}
                            </Link>
                        </SheetClose>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}
