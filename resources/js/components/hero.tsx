import type { ReactNode } from 'react';
import Container from '@/components/container';

interface HeroRoles {
    primary: string;
    secondary: string;
}

interface HeroProps {
    greeting?: string;
    title: string;
    roles?: HeroRoles;
    description: string;
    avatarSrc?: string;
    avatarAlt?: string;
    primaryAction?: ReactNode;
    secondaryAction?: ReactNode;
}

export default function Hero({
    greeting,
    title,
    roles,
    description,
    avatarSrc,
    avatarAlt = 'Avatar',
    primaryAction,
    secondaryAction,
}: HeroProps) {
    return (
        <Container
            id="hero"
            className="relative flex min-h-[calc(80vh-64px)] items-center justify-center overflow-hidden bg-linear-to-r from-[#5e3eef1c] to-[#d4dfdf0a] to-50% bg-cover bg-no-repeat px-6 py-20"
        >
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-16">
                <div className="flex max-w-xl flex-col gap-6">
                    {greeting && (
                        <span className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                            {greeting}
                        </span>
                    )}

                    <h1 className="text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        {title}{' '}
                        {roles && (
                            <>
                                <span className="block">{roles.primary}</span>
                                <span className="text-muted-foreground">
                                    {roles.secondary}
                                </span>
                            </>
                        )}
                    </h1>

                    <p className="text-lg leading-relaxed text-muted-foreground">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {primaryAction}
                        {secondaryAction}
                    </div>
                </div>

                {avatarSrc && (
                    <div className="hidden shrink-0 lg:block">
                        <img
                            src={avatarSrc}
                            alt={avatarAlt}
                            width={448}
                            height={448}
                            fetchPriority="high"
                            className="h-auto w-md rounded-2xl object-cover shadow-2xl"
                        />
                    </div>
                )}
            </div>
        </Container>
    );
}
