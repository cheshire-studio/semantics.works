import React from 'react';

export const Privacy: React.FC = () => {
    return (
        <section className="px-6 md:px-12 py-32 md:py-48 animate-in fade-in duration-1000 min-h-screen bg-neutral-50">
            <div className="max-w-3xl mx-auto space-y-16">
                <div>
                    <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-light tracking-tighter italic mb-8 uppercase">Privacy</h1>
                    <p className="text-sm uppercase tracking-[0.2em] opacity-40">Datenschutzerklärung</p>
                </div>

                <div className="space-y-12 text-sm font-light leading-relaxed opacity-80">

                    <div className="space-y-4">
                        <h2 className="text-lg font-normal uppercase tracking-widest">1. Datenschutz auf einen Blick</h2>
                        <h3 className="uppercase tracking-widest text-xs opacity-60">Allgemeine Hinweise</h3>
                        <p>
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                        </p>
                        <h3 className="uppercase tracking-widest text-xs opacity-60">Datenerfassung auf dieser Website</h3>
                        <p>
                            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                        </p>
                        <p>
                            <strong>Wie erfassen wir Ihre Daten?</strong><br />
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B. per Kontaktformular). Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-lg font-normal uppercase tracking-widest">2. Hosting</h2>
                        <p>
                            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br />
                            [Hoster Name, e.g., Vercel / Netlify / GitHub Pages]<br />
                            [Address of Hoster]
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-lg font-normal uppercase tracking-widest">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                        <h3 className="uppercase tracking-widest text-xs opacity-60">Datenschutz</h3>
                        <p>
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                        <h3 className="uppercase tracking-widest text-xs opacity-60">Hinweis zur verantwortlichen Stelle</h3>
                        <p>
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                            Klaus Werdenich<br />
                            SEMANTICS.WORKS<br />
                            [Musterstraße 123]<br />
                            [12345 Musterstadt]<br /><br />
                            E-Mail: welcome@semantics.works
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-lg font-normal uppercase tracking-widest">4. Datenerfassung auf dieser Website</h2>

                        <h3 className="uppercase tracking-widest text-xs opacity-60">Cookies</h3>
                        <p>
                            Unsere Website verwendet <strong>keine</strong> Cookies, die eine Einwilligung erfordern. Wir verzichten bewusst auf Tracking-Tools, die personenbezogene Daten speichern oder an Dritte weitergeben (wie z.B. Google Analytics).
                        </p>
                        <p>
                            Technisch notwendige Cookies oder ähnliche Technologien, die für die Funktion der Website zwingend erforderlich sind, können unter Umständen eingesetzt werden (z.B. zur Sicherstellung der Sicherheit oder Lastverteilung). Für diese ist keine Einwilligung erforderlich.
                        </p>

                        <h3 className="uppercase tracking-widest text-xs opacity-60">Server-Log-Dateien</h3>
                        <p>
                            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Browsertyp und Browserversion</li>
                            <li>Verwendetes Betriebssystem</li>
                            <li>Referrer URL</li>
                            <li>Hostname des zugreifenden Rechners</li>
                            <li>Uhrzeit der Serveranfrage</li>
                            <li>IP-Adresse</li>
                        </ul>
                        <p>
                            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                        </p>

                        <h3 className="uppercase tracking-widest text-xs opacity-60">Kontaktformular</h3>
                        <p>
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                        </p>
                    </div>

                    <div className="pt-12 border-t border-black/10">
                        <p className="italic opacity-60">
                            Note: This is a standard template tailored for a "no-cookie" setup. Please review and replace the bracketed placeholder information.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};
