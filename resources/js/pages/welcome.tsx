import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <Button variant="outline">Welcome</Button>
        </>
    );
}
