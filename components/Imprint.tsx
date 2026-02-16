import React from 'react';

export const Imprint: React.FC = () => {
    return (
        <section className="px-6 md:px-12 py-32 md:py-48 animate-in fade-in duration-1000 min-h-screen bg-neutral-50">
            <div className="max-w-3xl mx-auto space-y-16">
                <div>
                    <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-light tracking-tighter italic mb-8 uppercase">Imprint</h1>
                    <p className="text-sm uppercase tracking-[0.2em] opacity-40">Legal Information</p>
                </div>

                <div className="space-y-12 text-sm font-light leading-relaxed opacity-80">
                    <div className="space-y-2">
                        <h2 className="uppercase tracking-widest text-xs opacity-40 mb-4">Angaben gemäß § 5 TMG</h2>
                        <p>
                            Klaus Werdenich<br />
                            SEMANTICS.WORKS<br />
                            [Musterstraße 123]<br />
                            [12345 Musterstadt]
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="uppercase tracking-widest text-xs opacity-40 mb-4">Kontakt</h2>
                        <p>
                            E-Mail: welcome@semantics.works<br />
                            Telefon: [Please insert phone number]<br />
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="uppercase tracking-widest text-xs opacity-40 mb-4">Umsatzsteuer-ID</h2>
                        <p>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                            [DE 123 456 789]
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="uppercase tracking-widest text-xs opacity-40 mb-4">Redaktionell verantwortlich</h2>
                        <p>
                            Klaus Werdenich<br />
                            [Musterstraße 123]<br />
                            [12345 Musterstadt]
                        </p>
                    </div>

                    <div className="pt-12 border-t border-black/10">
                        <p className="italic opacity-60">
                            Note: This is a placeholder Imprint. Please replace the bracketed information with your actual legal details before publishing.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
