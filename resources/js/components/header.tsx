import Logo from '@/components/logo';
import Menu from '@/components/menu';
import MenuMobile from '@/components/menu-mobile';

export default function Header() {
    return (
        <header className="container mx-auto p-4 flex items-center justify-between">
            <Logo />
            <Menu />
            <MenuMobile />
        </header>
    );
}
