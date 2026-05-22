import TitleSection from '@/components/title-section';
import { Button } from '@/components/ui/button';
import Container from '@/components/container';

const skills = [
    'PHP',
    'Laravel',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Docker',
    'AWS',
    'MySQL',
    'SOLID',
    'TDD',
    'CI/CD',
    'Git',
];

export default function About() {
    return (
        <Container id="about" hasBackgroundInterleaved>
            <TitleSection
                title="Sobre mim"
                description="Quem sou, o que faço e como posso ajudar seu projeto a sair do papel."
            />

            <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:items-stretch">
                <img
                    src="/images/avatar.png"
                    alt="Avatar Carlos Alexandre"
                    className="w-sm shrink-0 self-stretch rounded-2xl object-cover shadow-lg"
                />

                <div className="flex flex-col gap-6 pb-8 text-center md:text-left">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">
                        Afinal, quem é Carlos Alexandre?
                    </h3>

                    <div className="flex flex-col gap-4">
                        <p className="text-base leading-relaxed text-muted-foreground">
                            Sou um desenvolvedor back-end focado no ecossistema
                            PHP (Laravel) com atuação full-stack e um forte
                            perfil voltado à automação. Graduando em Análise e
                            Desenvolvimento de Sistemas, construo soluções
                            robustas unindo minha base em Redes de Computadores
                            e Programação Orientada a Objetos com as melhores
                            práticas de mercado.
                        </p>

                        <p className="text-base leading-relaxed text-muted-foreground">
                            Prezo pela entrega de software com alta qualidade
                            estrutural, aplicando princípios SOLID, TDD e Design
                            Patterns. Minha esteira de trabalho engloba desde a
                            criação de interfaces responsivas com React e
                            Tailwind até a infraestrutura e deploy automatizado
                            utilizando Docker, CI/CD e AWS Cloud, garantindo que
                            o código em produção seja seguro, escalável e
                            sustentável.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-foreground"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <Button size="lg" asChild>
                        <a href="/files/cv_carlos_alexandre.pdf" download>
                            Baixar CV
                        </a>
                    </Button>
                </div>
            </div>
        </Container>
    );
}
