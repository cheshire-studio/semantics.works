
import React from 'react';
import { Page } from '../types';

interface NavigationProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { name: 'PROJECTS', value: Page.Work },
    { name: 'SOLUTIONS', value: Page.Services },
    { name: 'ABOUT', value: Page.About },
  ];

  const isDark = currentPage === Page.Home;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center transition-colors duration-500 ${isDark ? 'text-white' : 'text-black bg-white/80 backdrop-blur-md border-b border-black/5'}`}>
      <div 
        className="cursor-pointer font-medium tracking-tighter text-xl transition-opacity hover:opacity-60"
        onClick={() => setCurrentPage(Page.Home)}
      >
        DATA.BUILD
      </div>
      <div className="flex gap-8 text-[10px] md:text-xs tracking-[0.2em] font-light">
        {navItems.map((item) => (
          <button
            key={item.value}
            onClick={() => setCurrentPage(item.value)}
            className={`transition-all uppercase relative group py-2 ${
              currentPage === item.value ? 'opacity-100' : 'opacity-40 hover:opacity-100'
            }`}
          >
            {item.name}
            <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-current transition-transform duration-500 origin-left ${currentPage === item.value ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </button>
        ))}
      </div>
    </nav>
  );
};
