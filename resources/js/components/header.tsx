import { useEffect, useState } from 'react';
import Logo from '@/components/logo';
import Menu from '@/components/menu';
import MenuMobile from '@/components/menu-mobile';

import { cn } from '@/lib/utils';

export default function Header() {
    const [hasBackground, setHasBackground] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setHasBackground(window.scrollY > 80);
        }

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 z-50 w-full transition-colors duration-300',
                hasBackground
                    ? 'shadow-2xs bg-background/80 backdrop-blur'
                    : 'bg-transparent',
            )}
        >
            <nav className="flex justify-between items-center p-4 mx-auto container">
                <Logo />
                <Menu />
                <MenuMobile />
            </nav>
        </header>
    );
}
