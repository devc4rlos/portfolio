import { Head } from '@inertiajs/react';
import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <main>
            <Head>
                <title>
                    Carlos Alexandre | Desenvolvedor PHP Full-Stack Laravel
                </title>
                <meta
                    name="description"
                    content="Desenvolvedor PHP Full-Stack especializado em Laravel, React e automações para aplicações web modernas e escaláveis."
                />
                <meta
                    property="og:title"
                    content="Carlos Alexandre | Desenvolvedor PHP Full-Stack Laravel"
                />
                <meta
                    property="og:description"
                    content="Construindo aplicações web robustas e eficientes com foco no ecossistema Laravel."
                />
                <meta
                    property="og:url"
                    content="https://carlosalexandre.com.br"
                />
                <meta property="og:image" content="/images/preview.png" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Carlos Alexandre" />
                <meta name="theme-color" content="#2563eb" />
                <link rel="manifest" href="/images/favicon/site.webmanifest" />
            </Head>
            <Header />
            <Hero
                greeting="Olá, eu sou Carlos Alexandre"
                title="Desenvolvedor PHP"
                roles={{
                    primary: 'Full-Stack',
                    secondary: 'Freelancer',
                }}
                description="Construindo aplicações web robustas e eficientes com foco no ecossistema Laravel e boas práticas de desenvolvimento."
                avatarSrc="/images/avatar-448x448.webp"
                avatarAlt="Foto de perfil de Carlos Alexandre"
                primaryAction={
                    <Button size="lg" asChild>
                        <a href="#contact">Entre em contato</a>
                    </Button>
                }
                secondaryAction={
                    <Button size="lg" variant="outline" asChild>
                        <a href="#projects">Ver projetos</a>
                    </Button>
                }
            />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </main>
    );
}
