import React, { useEffect } from 'react';

export const Imprint: React.FC = () => {
    useEffect(() => {
        // Add noindex meta tag to prevent indexing of this page
        const meta = document.createElement('meta');
        meta.name = "robots";
        meta.content = "noindex, nofollow";
        document.head.appendChild(meta);

        return () => {
            // Clean up when leaving the page
            if (document.head.contains(meta)) {
                document.head.removeChild(meta);
            }
        };
    }, []);

    return (
        <section className="px-6 md:px-12 py-32 md:py-48 animate-in fade-in duration-1000 min-h-screen bg-neutral-50">
            <div className="max-w-3xl mx-auto space-y-16">
                <div className="space-y-0 flex flex-col items-start opacity-90">
                    <img
                        src="/assets/o_1.png"
                        alt="Max Mustermann, SEMANTICS.WORKS, Musterstraße 12, 34567 Musterstadt"
                        className="max-w-full w-auto mix-blend-multiply"
                    />
                    <img
                        src="/assets/o_2.png"
                        alt="Telefon: 089 / 123 456 78"
                        className="max-w-full w-auto mix-blend-multiply"
                    />
                    <img
                        src="/assets/o_6.png"
                        alt="E-Mail: welcome AT semantics"
                        className="max-w-full w-auto mix-blend-multiply"
                    />
                    <img
                        src="/assets/o_3.png"
                        alt="USt-IdNr.: DE123456789"
                        className="max-w-full w-auto mix-blend-multiply"
                    />
                    <img
                        src="/assets/o_4.png"
                        alt="Redaktionelle Verantwortung: Max Mustermann, SEMANTICS.WORKS, Musterstraße 12, 34567 Musterstadt"
                        className="max-w-full w-auto mix-blend-multiply"
                    />
                    <img
                        src="/assets/o_5.png"
                        alt="E-Mail: welcome AT semantics"
                        className="max-w-full w-auto mix-blend-multiply"
                    />
                </div>
            </div>
        </section>
    );
};
