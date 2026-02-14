
import React, { useState } from 'react';
import { getDataStrategy } from '../services/geminiService';

export const Consultant: React.FC = () => {
  const [industry, setIndustry] = useState('eCommerce');
  const [scale, setScale] = useState('Scale-up');
  const [focus, setFocus] = useState('Customer Retention');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await getDataStrategy(industry, scale, focus);
      setStrategy(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-light tracking-tighter mb-4 italic">Strategy Blueprint</h2>
        <p className="text-[10px] opacity-50 uppercase tracking-[0.4em]">AI-Powered Architectural Audit</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-3">
            <label className="text-[9px] uppercase tracking-[0.3em] font-medium opacity-40">Industry Sector</label>
            <select 
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="bg-transparent border-b border-black/10 py-3 text-sm outline-none focus:border-black transition-all cursor-pointer appearance-none"
            >
              <option>eCommerce & Retail</option>
              <option>FinTech & Trading</option>
              <option>SME Manufacturing</option>
              <option>Digital Media</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-[9px] uppercase tracking-[0.3em] font-medium opacity-40">Operational Scale</label>
            <select 
              value={scale}
              onChange={(e) => setScale(e.target.value)}
              className="bg-transparent border-b border-black/10 py-3 text-sm outline-none focus:border-black transition-all cursor-pointer appearance-none"
            >
              <option>Early Stage / Startup</option>
              <option>High-Growth Scale-up</option>
              <option>Established Enterprise</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-[9px] uppercase tracking-[0.3em] font-medium opacity-40">Core Objective</label>
            <select 
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
              className="bg-transparent border-b border-black/10 py-3 text-sm outline-none focus:border-black transition-all cursor-pointer appearance-none"
            >
              <option>Data Mesh Adoption</option>
              <option>Predictive CRM / AI</option>
              <option>Operational DWH</option>
              <option>Real-time Analytics</option>
            </select>
          </div>
        </div>

        <button 
          disabled={loading}
          className="group relative w-full py-6 bg-black text-white text-[10px] uppercase tracking-[0.4em] font-light overflow-hidden transition-all disabled:opacity-20"
        >
          <span className="relative z-10">{loading ? 'ANALYZING INFRASTRUCTURE...' : 'GENERATE STRATEGIC BLUEPRINT'}</span>
          <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </button>
      </form>

      {strategy && (
        <div className="mt-24 space-y-16 border-t border-black/10 pt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <div className="max-w-2xl">
            <h3 className="text-[9px] uppercase tracking-[0.4em] opacity-40 mb-6 italic">— Strategic Summary</h3>
            <p className="text-2xl font-light italic leading-snug text-neutral-800">{strategy.summary}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-[9px] uppercase tracking-[0.4em] opacity-40 mb-8 font-medium">High-Level Roadmap</h3>
              <ul className="space-y-6">
                {strategy.keyActionables.map((item: string, i: number) => (
                  <li key={i} className="text-sm font-light flex items-start gap-6 group">
                    <span className="text-[10px] opacity-20 font-mono mt-1 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                    <span className="leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[9px] uppercase tracking-[0.4em] opacity-40 mb-8 font-medium">Recommended Tech Ecosystem</h3>
              <div className="flex flex-wrap gap-3">
                {strategy.recommendedStack.map((tech: string, i: number) => (
                  <span key={i} className="px-4 py-2 bg-neutral-50 border border-black/5 text-[9px] uppercase tracking-[0.2em] font-medium text-neutral-600 hover:border-black transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
