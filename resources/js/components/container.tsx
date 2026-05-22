import type { ElementType, ReactNode, ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type ContainerProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
    innerClassName?: string;
    hasBackgroundInterleaved?: boolean;
} & ComponentPropsWithoutRef<T>;

export default function Container<T extends ElementType = 'section'>({
    as,
    children,
    hasBackgroundInterleaved = false,
    className,
    innerClassName,
    ...props
}: ContainerProps<T>) {
    const Component = as || 'section';

    return (
        <Component
            className={cn(
                'px-4 py-16',
                hasBackgroundInterleaved ? 'container-bg-interleaved' : '',
                className,
            )}
            {...props}
        >
            <div className={cn('container mx-auto', innerClassName)}>
                {children}
            </div>
        </Component>
    );
}
