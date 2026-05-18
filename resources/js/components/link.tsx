import { Link as LinkReact } from '@inertiajs/react';
import * as React from 'react';
import type { JSX } from 'react';
import { cn } from '@/lib/utils';

export default function Link({
    href,
    className,
    children,
    ...props
}: {
    href: string;
    className?: string;
    children: React.ReactNode;
}): JSX.Element {
    return (
        <LinkReact
            href={href}
            className={cn(
                'text-lg font-bold text-muted-foreground transition-colors hover:text-foreground',
                className,
            )}
            {...props}
        >
            {children}
        </LinkReact>
    );
}
