
import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { ProjectCard } from './components/ProjectCard';
import { LogoMarquee } from './components/LogoMarquee';
import { ContactForm } from './components/ContactForm';
import { PROJECTS, SERVICES } from './constants';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case Page.Work:
        return (
          <section className="px-6 md:px-12 py-32 md:py-48 animate-in fade-in duration-1000">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 max-w-[1600px] mx-auto">
              <div className="md:col-span-12 mb-32">
                <h1 className="text-[clamp(3rem,10vw,10rem)] font-light tracking-tighter italic mb-12 uppercase">Projects</h1>
                <div className="max-w-2xl mb-16">
                  <p className="text-2xl md:text-3xl font-light opacity-80 leading-snug italic">
                    "Data is the invisible thread that holds the luxury experience together. We weave complexity into clarity."
                  </p>
                </div>
                <div className="flex justify-between items-end border-b border-black/10 pb-8">
                  <p className="text-[10px] tracking-[0.4em] uppercase opacity-40">Architectural Archive</p>
                  <p className="text-[10px] tracking-[0.4em] uppercase opacity-40">Outcome-Driven Engineering</p>
                </div>
              </div>
              {PROJECTS.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          </section>
        );

      case Page.Services:
        return (
          <section className="px-6 md:px-12 py-32 md:py-48 bg-white min-h-screen animate-in fade-in duration-1000">
            <div className="max-w-7xl mx-auto">
              <div className="mb-48 max-w-4xl">
                <h1 className="text-[clamp(3.5rem,12vw,9rem)] font-light tracking-tighter italic mb-12 uppercase">Solutions</h1>
                <p className="text-2xl md:text-3xl font-light opacity-80 leading-snug italic">
                  Bridging the gap between high-level architectural strategy and business impact. We build the data platforms that make scaling effortless for modern businesses.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12">
                {SERVICES.map((service, idx) => (
                  <div key={idx} className="group border-t border-black/5 pt-12">
                    <div className="space-y-10">
                      <div className="flex items-baseline justify-between">
                        <h2 className="text-2xl font-light uppercase tracking-widest">{service.title}</h2>
                        <span className="text-[10px] font-mono opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                      </div>
                      <p className="text-base font-light opacity-60 leading-relaxed min-h-[100px]">{service.description}</p>
                      <ul className="space-y-4 pt-8">
                        {service.details.map((detail, i) => (
                          <li key={i} className="text-[10px] uppercase tracking-[0.2em] opacity-40 flex items-center gap-3 group/item">
                            <span className="w-1 h-1 bg-black/10 rounded-full group-hover/item:bg-black transition-colors"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case Page.About:
        return (
          <section className="px-6 md:px-12 py-32 md:py-48 animate-in fade-in duration-1000">
            <div className="max-w-[1400px] mx-auto space-y-48">
              <div className="flex flex-col md:flex-row gap-24 items-start">
                <div className="md:w-[45%] overflow-hidden grayscale border border-black/5">
                  <img src="/assets/project_01.png" alt="Studio Detail" className="w-full grayscale brightness-95 hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="md:w-[55%] space-y-20">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.5em] opacity-40 block mb-8">Studio Profile</span>
                    <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-light tracking-tighter italic leading-none uppercase">DATA.BUILD</h2>
                    <p className="text-xl md:text-2xl mt-6 opacity-40 font-light tracking-tight italic">Engineering Data Advantage</p>
                  </div>
                  <div className="space-y-10 max-w-xl">
                    <p className="text-xl font-light opacity-80 leading-relaxed italic">
                      DATA.BUILD is a specialist consultancy focused on the architecture of data platforms for agile SMEs and high-growth B2C enterprises.
                    </p>
                    <p className="text-sm font-light opacity-50 leading-relaxed">
                      We specialize in BigQuery-centric architectures on GCP. By integrating modern engineering workflows with strategic customer modeling, we help companies transform technical friction into measurable competitive advantage.
                    </p>
                  </div>
                </div>
              </div>

              {/* Philosophy Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 py-32 border-y border-black/5">
                <div className="space-y-8">
                  <span className="text-[10px] uppercase tracking-[0.5em] opacity-30 italic block">— Our Philosophy</span>
                  <h3 className="text-4xl md:text-6xl font-light italic leading-none uppercase">Outcome {'>'} Output</h3>
                </div>
                <div className="max-w-xl space-y-12">
                  <p className="text-2xl font-light leading-snug opacity-80">
                    We prioritize business impact over technical vanity. Every architectural decision is measured by the value it creates and the operational pain it resolves.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                    <div>
                      <h4 className="text-[9px] uppercase tracking-[0.3em] font-medium mb-4">Focus</h4>
                      <p className="text-sm font-light opacity-50">We don't just maintain; we build. Our goal is to create foundations that empower your internal teams to scale without friction.</p>
                    </div>
                    <div>
                      <h4 className="text-[9px] uppercase tracking-[0.3em] font-medium mb-4">Value</h4>
                      <p className="text-sm font-light opacity-50">Solving real pain-points in customer analytics, attribution, and reporting is our primary metric for success.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-20 grid grid-cols-2 md:grid-cols-3 gap-12">
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-6">Verticals</h3>
                  <p className="text-sm font-light space-y-1">eCommerce<br />Retail<br />FinTech</p>
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-6">Network</h3>
                  <a href="https://de.linkedin.com/in/klaus-werdenich" target="https://de.linkedin.com/in/klaus-werdenich" rel="noopener noreferrer" className="text-sm font-light border-b border-black/10 hover:border-black transition-colors pb-1 block w-fit">LinkedIn</a>
                  <a href="mailto:hello@data.build" className="text-sm font-light border-b border-black/10 hover:border-black transition-colors pb-1 block w-fit mt-3">Email</a>
                </div>
                <div className="hidden md:block">
                  <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-6">Presence</h3>
                  <p className="text-sm font-light italic">Located in CET<br />Remote Globally</p>
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return (
          <section className="min-h-screen flex items-center justify-center relative bg-black text-white overflow-hidden">
            <div className="absolute inset-0 opacity-40 overflow-hidden">
              <img
                src="/assets/hero.png"
                alt="Architecture Background"
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="relative z-10 text-center space-y-16 px-6">
              <div className="space-y-4">
                <span className="text-[10px] md:text-xs tracking-[0.6em] font-light opacity-50 animate-pulse uppercase">Engineering Data Advantage</span>
                <h1 className="text-[clamp(4rem,18vw,14rem)] font-light tracking-tighter italic leading-none">DATA.BUILD</h1>
              </div>
              <div className="max-w-2xl mx-auto space-y-12">
                <p className="text-base md:text-lg font-light opacity-60 tracking-tight leading-relaxed italic">
                  Strategic data platforms for agile SMEs and high-growth eCommerce. <br className="hidden md:block" />
                  We transform raw operational complexity into predictive competitive advantage.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <button
                    onClick={() => setCurrentPage(Page.Work)}
                    className="group relative px-16 py-5 border border-white/10 hover:border-white transition-all duration-700 overflow-hidden min-w-[240px]"
                  >
                    <span className="relative z-10 text-[10px] tracking-[0.4em] font-light">SELECTED PROJECTS</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <span className="absolute inset-0 z-20 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity text-[10px] tracking-[0.4em] font-light">SELECTED PROJECTS</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 right-12 hidden md:block">
              <p className="text-[9px] tracking-[0.4em] opacity-30 uppercase">©2025 DATA.BUILD</p>
            </div>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-700">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderContent()}
      </main>

      <LogoMarquee />

      {currentPage !== Page.Home && (
        <footer className="px-6 md:px-12 py-32 border-t border-black/5 bg-neutral-50 text-black">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 max-w-[1400px] mx-auto">
            <div className="space-y-12 w-full md:w-1/2">
              <div className="space-y-10">
                <span className="text-[9px] uppercase tracking-[0.5em] opacity-30 italic block">Initiate Contact</span>
                <h2 className="text-[clamp(3rem,8vw,8rem)] font-light tracking-tighter italic leading-none hover:opacity-60 transition-opacity cursor-pointer uppercase">Start the Build.</h2>
                <p className="text-xl font-light opacity-40">hello@data.build</p>
              </div>

              <div className="pt-12">
                <ContactForm />
              </div>
            </div>
            <div className="space-y-8 text-right hidden md:block w-full md:w-1/2">
              <div className="text-[9px] tracking-[0.4em] uppercase opacity-30">
                Starting with the why: Solving pain to create value.
              </div>
              <div className="text-[9px] tracking-[0.4em] uppercase opacity-30">
                Data Platform Strategy — Data Engineering — Consumer Intelligence
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
