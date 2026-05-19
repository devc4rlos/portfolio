interface TitleProps {
    title: string;
    description?: string;
}
export default function TitleSection({ title, description }: TitleProps) {
    return (
        <div className="mb-12 flex flex-col gap-3">
            <h2 className="text-4xl leading-tight font-bold tracking-tight text-foreground">
                {title}
            </h2>
            {description && (
                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    );
}
