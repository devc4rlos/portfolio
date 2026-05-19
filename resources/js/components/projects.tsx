export default function Projects() {
    return (
        <section id="projects" className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 flex flex-col gap-3">
                    <h2 className="text-4xl leading-tight font-bold tracking-tight text-foreground">
                        Meus Projetos
                    </h2>
                    <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                        Projetos que mostram um pouco do meu trabalho na prática
                    </p>
                </div>
                <div className="mx-auto flex max-w-sm rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                    <p className="my-12 w-full text-center text-lg font-bold text-red-800">
                        Em breve
                    </p>
                </div>
            </div>
        </section>
    );
}
