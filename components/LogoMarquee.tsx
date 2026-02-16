import React from 'react';
import { CLIENT_LOGOS } from '../constants';

export const LogoMarquee: React.FC = () => {
  return (
    <div className="py-24 border-y border-black/5 bg-white overflow-hidden select-none">
      <div className="flex space-x-24 animate-marquee whitespace-nowrap">
        {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
          <span
            key={i}
            className="text-xs md:text-sm font-light tracking-[0.5em] opacity-30 uppercase hover:opacity-100 transition-opacity cursor-default"
          >
            {logo}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};
