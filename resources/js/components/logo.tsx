import { Link } from '@inertiajs/react';

export default function Logo() {
    return (
        <Link href="/">
            <img
                src="/images/logo.svg"
                alt="Logo Carlos Alexandre"
                className="h-auto w-40"
                width={160}
                height={50}
            />
        </Link>
    );
}
