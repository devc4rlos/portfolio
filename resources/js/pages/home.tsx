import { Head } from '@inertiajs/react';
import About from '@/components/about';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <Header />
            <Hero
                greeting="Olá, eu sou Carlos Alexandre"
                title="Desenvolvedor PHP"
                roles={{
                    primary: 'Full-Stack',
                    secondary: 'Freelancer',
                }}
                description="Construindo aplicações web robustas e eficientes com foco no ecossistema Laravel e boas práticas de desenvolvimento."
                avatarSrc="/images/avatar.png"
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
        </>
    );
}
