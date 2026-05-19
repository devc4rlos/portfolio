import TitleSection from '@/components/title-section';

export default function Projects() {
    return (
        <section id="projects" className="container mx-auto px-4 py-20">
            <TitleSection
                title="Meus projetos"
                description="Projetos que mostram um pouco do meu trabalho na prática"
            />
            <div className="mx-auto flex max-w-sm rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                <p className="my-12 w-full text-center text-lg font-bold text-red-800">
                    Em breve
                </p>
            </div>
        </section>
    );
}
