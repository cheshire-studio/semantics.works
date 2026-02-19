import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { WorkCard } from './components/WorkCard';
import { LogoMarquee } from './components/LogoMarquee';
import { ContactForm } from './components/ContactForm';
import { Imprint } from './components/Imprint';
import { Privacy } from './components/Privacy';
import { WORKS, SERVICES } from './constants';
import { Page } from './types';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { StructuredData } from './components/StructuredData';
import { organizationData } from './lib/structuredDataSchemas';
import { Eli5Text } from './components/Eli5Text';

const App = () => {
  // Initialize state from URL query param if present, or default to Home
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const view = params.get('view');
      if (view && Object.values(Page).includes(view as Page)) {
        return view as Page;
      }
    }
    return Page.Home;
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const view = params.get('view');
      if (view && Object.values(Page).includes(view as Page)) {
        setCurrentPage(view as Page);
      } else {
        setCurrentPage(Page.Home);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync state to URL without reloading
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL to match current page state
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (currentPage === Page.Home) {
        url.search = '';
      } else {
        url.searchParams.set('view', currentPage);
      }

      // Only push if the URL actually changed to avoid duplicate history entries
      if (window.location.href !== url.href) {
        window.history.pushState({}, '', url);
      }
    }
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case Page.Work:
        return (
          <section className="px-6 md:px-12 py-32 md:py-48 animate-in fade-in duration-1000">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 max-w-[1600px] mx-auto">
              <div className="md:col-span-12 mb-32">
                <Eli5Text
                  as="h1"
                  className="text-[clamp(3rem,10vw,10rem)] font-light tracking-tighter italic mb-12 uppercase"
                  text="Works"
                  eli5="Our Projects"
                />
                <div className="max-w-2xl mb-16">
                  <Eli5Text
                    as="p"
                    className="text-2xl md:text-3xl font-light opacity-80 leading-snug italic"
                    text='"Data is the invisible thread that holds the luxury experience together. We weave complexity into clarity."'
                    eli5='"Think of data like the plumbing in a house. You don&#39;t see it, but it makes everything work perfectly. We make sure your business flows smoothly."'
                  />
                </div>
                <div className="flex justify-between items-end border-b border-black/10 pb-8">
                  <Eli5Text
                    as="p"
                    className="text-[10px] tracking-[0.4em] uppercase opacity-40"
                    text="Architectural Archive"
                    eli5="Project Library"
                  />
                  <Eli5Text
                    as="p"
                    className="text-[10px] tracking-[0.4em] uppercase opacity-40"
                    text="Outcome-Driven Engineering"
                    eli5="We Build for Results"
                  />
                </div>
              </div>
              {WORKS.map((work, idx) => (
                <WorkCard key={work.id} work={work} index={idx} />
              ))}
            </div>
          </section>
        );

      case Page.Services:
        return (
          <section className="px-6 md:px-12 py-32 md:py-48 bg-white min-h-screen animate-in fade-in duration-1000">
            <div className="max-w-7xl mx-auto">
              <div className="mb-48 max-w-4xl">
                <Eli5Text
                  as="h1"
                  className="text-[clamp(3.5rem,12vw,9rem)] font-light tracking-tighter italic mb-12 uppercase"
                  text="Solutions"
                  eli5="What We Do"
                />
                <Eli5Text
                  as="p"
                  className="text-2xl md:text-3xl font-light opacity-80 leading-snug italic"
                  text="Making data make sense. We bridge the gap between technical complexity and business logic by building the semantic architectures that power modern, agent-ready enterprises."
                  eli5="We take all your messy numbers and lists and turn them into clear, easy-to-read dashboards so you can make smart decisions without a headache."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12">
                {SERVICES.map((service, idx) => (
                  <div key={idx} className="group border-t border-black/5 pt-12">
                    <div className="space-y-10">
                      <div className="flex items-baseline justify-between">
                        <h2 className="text-2xl font-light uppercase tracking-widest">
                          {service.title}
                        </h2>
                        <span className="text-[10px] font-mono opacity-20 group-hover:opacity-100 transition-opacity">
                          0{idx + 1}
                        </span>
                      </div>
                      <div className="min-h-[100px]">
                        <Eli5Text
                          as="p"
                          className="text-base font-light opacity-60 leading-relaxed"
                          text={service.description}
                          eli5={service.eli5Description || service.description}
                        />
                      </div>
                      <ul className="space-y-4 pt-8">
                        {service.details.map((detail, i) => (
                          <li
                            key={i}
                            className="text-[10px] uppercase tracking-[0.2em] opacity-40 flex items-center gap-3 group/item"
                          >
                            <span className="w-1 h-1 bg-black/10 rounded-full group-hover/item:bg-black transition-colors"></span>
                            <Eli5Text
                              as="span"
                              text={detail}
                              eli5={service.eli5Details?.[i] || detail}
                            />
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
                  <img
                    src="/assets/project_01.png"
                    alt="Studio Detail"
                    className="w-full grayscale brightness-95 hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="md:w-[55%] space-y-20">
                  <div>
                    <Eli5Text
                      as="span"
                      className="text-[10px] uppercase tracking-[0.5em] opacity-40 block mb-8"
                      text="Studio Profile"
                      eli5="Who We Are"
                    />
                    <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-light tracking-tighter italic leading-none uppercase">
                      SEMANTICS
                      <br />
                      .WORKS
                    </h2>
                    <Eli5Text
                      as="p"
                      className="text-xl md:text-2xl mt-6 opacity-40 font-light tracking-tight italic"
                      text="Make Data Make Sense"
                      eli5="We Fix Your Data"
                    />
                  </div>
                  <div className="space-y-10 max-w-xl">
                    <Eli5Text
                      as="p"
                      className="text-xl font-light opacity-80 leading-relaxed italic"
                      text="SEMANTICS.WORKS is a specialist consultancy focused on the architecture of data platforms for agile SMEs and high-growth B2C enterprises."
                      eli5="We are a team of experts who help you organize your information so you can grow even faster."
                    />
                    <Eli5Text
                      as="p"
                      className="text-sm font-light opacity-50 leading-relaxed"
                      text="By integrating modern engineering workflows with strategic customer modeling, we help companies transform technical friction into measurable competitive advantage."
                      eli5="We use the latest tech to solve your tech problems, so you can focus on selling your products and making customers happy."
                    />
                  </div>
                </div>
              </div>

              {/* Philosophy Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 py-32 border-y border-black/5">
                <div className="space-y-8">
                  <Eli5Text
                    as="span"
                    className="text-[10px] uppercase tracking-[0.5em] opacity-30 italic block"
                    text="— Our Philosophy"
                    eli5="— How We Think"
                  />
                  <Eli5Text
                    as="h3"
                    className="text-4xl md:text-6xl font-light italic leading-none uppercase"
                    text="Outcome > Output"
                    eli5="Results Matter Most"
                  />
                </div>
                <div className="max-w-xl space-y-12">
                  <Eli5Text
                    as="p"
                    className="text-2xl font-light leading-snug opacity-80"
                    text="We prioritize business impact over technical vanity. Every architectural decision is measured by the value it creates and the operational pain it resolves."
                    eli5="We don't just write code for fun. We build things that actually help you make more money and save you time. No fancy tech just for show."
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                    <div>
                      <Eli5Text
                        as="h4"
                        className="text-[9px] uppercase tracking-[0.3em] font-medium mb-4"
                        text="Focus"
                        eli5="The Goal"
                      />
                      <Eli5Text
                        as="p"
                        className="text-sm font-light opacity-50"
                        text="Our goal is to create foundations that empower your internal teams to scale without friction."
                        eli5="We build a strong base for your data so your team can work fast without getting stuck on technical problems."
                      />
                    </div>
                    <div>
                      <Eli5Text
                        as="h4"
                        className="text-[9px] uppercase tracking-[0.3em] font-medium mb-4"
                        text="Value"
                        eli5="The Win"
                      />
                      <Eli5Text
                        as="p"
                        className="text-sm font-light opacity-50"
                        text="Solving real pain-points in customer analytics, insights, and reporting is our primary metric for success."
                        eli5="If we make your life easier and your decisions better, then we've done our job. It's about fixing your headaches."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Semantic Block */}
              <div className="py-32 space-y-24">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                  <div className="md:w-1/2">
                    <Eli5Text
                      as="span"
                      className="text-[10px] uppercase tracking-[0.5em] opacity-30 italic block mb-8"
                      text="— The Core Thesis"
                      eli5="— The Big Idea"
                    />
                    <h3 className="text-4xl md:text-7xl font-light italic leading-tight uppercase">
                      <Eli5Text as="span" text="Without semantics," eli5="Data without meaning" />
                      <br />
                      <Eli5Text
                        as="span"
                        text="data is just noise."
                        eli5="is just a pile of legos."
                      />
                    </h3>
                  </div>
                  <div className="md:w-1/2 max-w-xl">
                    <Eli5Text
                      as="p"
                      className="text-xl font-light opacity-60 leading-relaxed italic"
                      text='In the era of Generative AI, the "Semantic Gap" is the biggest bottleneck. If your LLMs don&#39;t understand your business logic, they will hallucinate. We build the definition layer that ensures your data "makes sense" to both your team and your agents.'
                      eli5="AI is like a super-smart intern, but if you give it bad instructions (bad data), it makes mistakes. We give it the right dictionary so it understands your business perfectly."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-black/5">
                  <div className="space-y-6">
                    <Eli5Text
                      as="h4"
                      className="text-[10px] uppercase tracking-widest font-medium opacity-40"
                      text="Knowledge Hub"
                      eli5="One Truth"
                    />
                    <p className="text-sm font-light opacity-60 leading-relaxed">
                      <Eli5Text
                        as="span"
                        text='Centralized definitions for metrics, entities, and relationships. No more "definitions in spreadsheets".'
                        eli5="We keep all your definitions in one place, so everyone agrees on what the numbers assume. No more arguing over Excel sheets."
                      />
                    </p>
                  </div>
                  <div className="space-y-6">
                    <Eli5Text
                      as="h4"
                      className="text-[10px] uppercase tracking-widest font-medium opacity-40"
                      text="AI Readiness"
                      eli5="Future Proof"
                    />
                    <p className="text-sm font-light opacity-60 leading-relaxed">
                      <Eli5Text
                        as="span"
                        text="Agentic workflows require high-fidelity data context. We architect the schemas that LLMs can actually reason with."
                        eli5="AI needs clear instructions to work well. We build the maps that let the robots understand exactly where to go."
                      />
                    </p>
                  </div>
                  <div className="space-y-6">
                    <Eli5Text
                      as="h4"
                      className="text-[10px] uppercase tracking-widest font-medium opacity-40"
                      text="Human Clarity"
                      eli5="Easy Access"
                    />
                    <p className="text-sm font-light opacity-60 leading-relaxed">
                      <Eli5Text
                        as="span"
                        text="Removing the engineering bottleneck. Business users get direct access to self-serve data they can trust."
                        eli5="No more waiting for engineers to answer your questions. We make it easy for you to get the answers you need, yourself."
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case Page.Imprint:
        return <Imprint />;

      case Page.Privacy:
        return <Privacy />;

      default:
        return (
          <section className="min-h-screen flex items-center justify-center relative bg-black text-white overflow-hidden">
            <div className="absolute inset-0 opacity-40 overflow-hidden">
              <img
                src="/assets/hero.png"
                alt="Architecture Background"
                className="w-full h-full object-cover scale-105"
                fetchPriority="high"
              />
            </div>
            <div className="relative z-10 text-center space-y-16 px-6">
              <div className="space-y-4 flex flex-col items-center">
                <Eli5Text
                  as="span"
                  className="text-[10px] md:text-xs tracking-[0.6em] font-light opacity-50 animate-pulse uppercase"
                  text="Make Data Make Sense"
                  eli5="We Fix Your Data"
                />
                <h1 className="text-[clamp(3.5rem,14vw,11rem)] font-light tracking-tighter italic leading-none text-left w-fit">
                  SEMANTICS
                  <br />
                  .WORKS
                </h1>
              </div>
              <div className="max-w-2xl mx-auto space-y-12">
                <Eli5Text
                  as="p"
                  className="text-base md:text-lg font-light opacity-60 tracking-tight leading-relaxed italic"
                  text="Strategic data platforms for agile SMEs and high-growth eCommerce. We transform raw operational complexity into predictive competitive advantage."
                  eli5="We build the systems that help you turn your messy data into a secret weapon for beating your competition."
                />
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <button
                    onClick={() => setCurrentPage(Page.Work)}
                    className="group relative px-16 py-5 border border-white/10 hover:border-white transition-all duration-700 overflow-hidden min-w-[240px]"
                  >
                    <span className="relative z-10 text-[10px] tracking-[0.4em] font-light">
                      SELECTED WORKS
                    </span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <span className="absolute inset-0 z-20 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity text-[10px] tracking-[0.4em] font-light">
                      SELECTED WORKS
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 right-12 hidden md:block">
              <p className="text-[9px] tracking-[0.4em] opacity-30 uppercase">
                ©2026 SEMANTICS.WORKS
              </p>
            </div>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-700">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <StructuredData type="Organization" data={organizationData} />
      <Analytics />
      <SpeedInsights />
      <main id="main-content">{renderContent()}</main>

      <LogoMarquee />

      {currentPage !== Page.Home && (
        <footer className="px-6 md:px-12 py-32 border-t border-black/5 bg-neutral-50 text-black">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 max-w-[1400px] mx-auto">
            <div className="space-y-12 w-full md:w-1/2">
              <div className="space-y-10">
                <Eli5Text
                  as="span"
                  className="text-[9px] uppercase tracking-[0.5em] opacity-30 italic block"
                  text="Initiate Contact"
                  eli5="Say Hello"
                />
                <Eli5Text
                  as="h2"
                  className="text-[clamp(3rem,8vw,8rem)] font-light tracking-tighter italic leading-none hover:opacity-60 transition-opacity cursor-pointer uppercase"
                  text="Make Data Make Sense."
                  eli5="Let's solve your data challenges."
                />
              </div>

              <div className="pt-12">
                <ContactForm />
              </div>
            </div>
            <div className="space-y-8 text-left md:text-right w-full md:w-1/2">
              <div className="text-[9px] tracking-[0.4em] uppercase opacity-30 hidden md:block">
                <Eli5Text
                  as="span"
                  text="Starting with the why."
                  eli5="We align on strategy first."
                  placement="right"
                />
              </div>
              <div className="text-[9px] tracking-[0.4em] uppercase opacity-30 hidden md:block">
                <Eli5Text
                  as="span"
                  text="Data Platform Strategy — Semantic Architecture Data Engineering — Consumer Intelligence"
                  eli5="Strategy, Engineering, Intelligence — end-to-end execution."
                  placement="right"
                />
              </div>
              {currentPage === Page.About && (
                <div className="flex justify-start md:justify-end gap-8 text-[9px] tracking-[0.2em] uppercase opacity-40">
                  <button
                    onClick={() => setCurrentPage(Page.Imprint)}
                    className="hover:opacity-100 transition-opacity"
                  >
                    Imprint
                  </button>
                  <button
                    onClick={() => setCurrentPage(Page.Privacy)}
                    className="hover:opacity-100 transition-opacity"
                  >
                    Privacy
                  </button>
                </div>
              )}
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
