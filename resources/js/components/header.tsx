import Logo from '@/components/logo';
import Menu from '@/components/menu';

export default function Header() {
    return (
        <header className="container mx-auto my-4 flex items-center justify-between">
            <Logo />
            <Menu />
        </header>
    );
}
