import { Link } from '@inertiajs/react';

export default function Logo() {
    return (
        <Link href="/">
            <img
                src="/images/logo.png"
                alt="Logo Carlos Alexandre"
                className="h-auto w-40"
            />
        </Link>
    );
}
