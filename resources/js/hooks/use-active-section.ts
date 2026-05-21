import { useEffect, useState } from 'react';

const sections = ['projects', 'about', 'contact'];

export function useActiveSection(): string | null {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        function updateActive() {
            if (window.scrollY < 100) {
                setActiveSection(null);

                return;
            }

            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id);

                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(id);

                    return;
                }
            }

            setActiveSection(null);
        }

        window.addEventListener('scroll', updateActive, { passive: true });
        updateActive();

        return () => window.removeEventListener('scroll', updateActive);
    }, []);

    return activeSection;
}
