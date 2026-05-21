import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '@/components/logo';

const socialLinks = [
    {
        icon: FaGithub,
        href: 'https://github.com/devc4rlos',
        label: 'GitHub',
        hoverClass: 'hover:text-foreground',
    },
    {
        icon: FaLinkedin,
        href: 'https://linkedin.com/in/devc4rlos',
        label: 'LinkedIn',
        hoverClass: 'hover:text-blue-500',
    },
    {
        icon: FaInstagram,
        href: 'https://instagram.com/devc4rlos',
        label: 'Instagram',
        hoverClass: 'hover:text-pink-500',
    },
];

const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Sobre Mim', href: '#about' },
    { label: 'Contato', href: '#contact' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background">
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <Logo />
                        <p className="text-sm text-muted-foreground">
                            Desenvolvedor Full Stack
                        </p>
                    </div>

                    <nav className="flex flex-col items-center gap-2 md:items-start">
                        <span className="text-lg font-semibold text-foreground">
                            Navegação
                        </span>
                        {navLinks.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex flex-col items-center gap-3 md:items-start">
                        <span className="text-lg font-semibold text-foreground">
                            Redes Sociais
                        </span>
                        <div className="flex gap-4">
                            {socialLinks.map(
                                ({ icon: Icon, href, label, hoverClass }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={label}
                                        className={`text-muted-foreground transition-colors ${hoverClass}`}
                                    >
                                        <Icon className="size-5" />
                                    </a>
                                ),
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-border pt-6 text-center">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Carlos Alexandre. Todos os direitos
                        reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
