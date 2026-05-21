import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import TitleSection from '@/components/title-section';

const contacts = [
    {
        icon: FaWhatsapp,
        label: 'WhatsApp',
        handle: '+55 (11) 99441-1592',
        href: 'https://wa.me/5511994411592',
        iconClass: 'text-green-500',
    },
    {
        icon: FaGithub,
        label: 'GitHub',
        handle: 'github.com/devc4rlos',
        href: 'https://github.com/devc4rlos',
        iconClass: 'text-foreground',
    },
    {
        icon: FaLinkedin,
        label: 'LinkedIn',
        handle: 'linkedin.com/in/devc4rlos',
        href: 'https://linkedin.com/in/devc4rlos',
        iconClass: 'text-blue-500',
    },
    {
        icon: FaInstagram,
        label: 'Instagram',
        handle: '@devc4rlos',
        href: 'https://instagram.com/devc4rlos',
        iconClass: 'text-pink-500',
    },
];

export default function Contact() {
    return (
        <section id="contact" className="container mx-auto px-4 py-20">
            <TitleSection
                title="Contato"
                description="Vamos conversar sobre seu projeto?"
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {contacts.map(
                    ({ icon: Icon, label, handle, href, iconClass }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <Icon className={`size-7 shrink-0 ${iconClass}`} />
                            <div className="flex min-w-0 flex-col">
                                <span className="text-sm font-semibold text-foreground">
                                    {label}
                                </span>
                                <span className="truncate text-sm text-muted-foreground">
                                    {handle}
                                </span>
                            </div>
                        </a>
                    ),
                )}
            </div>
        </section>
    );
}
