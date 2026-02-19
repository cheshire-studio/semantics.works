import { Page } from '../types';
import { useEli5 } from '../context/Eli5Context';

interface NavigationProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export const Navigation = ({ currentPage, setCurrentPage }: NavigationProps) => {
  const { isEnabled, toggleEli5, showReenablePrompt } = useEli5();
  const navItems = [
    { name: 'WORKS', value: Page.Work },
    { name: 'SOLUTIONS', value: Page.Services },
    { name: 'ABOUT', value: Page.About },
  ];

  const isDark = currentPage === Page.Home;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 py-6 md:px-12 md:py-8 flex justify-between items-center transition-colors duration-500 ${isDark ? 'text-white' : 'text-black bg-white/80 backdrop-blur-md border-b border-black/5'}`}
      aria-label="Main navigation"
    >
      <div
        className="cursor-pointer font-medium tracking-tighter text-base md:text-xl transition-opacity hover:opacity-60"
        onClick={() => setCurrentPage(Page.Home)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setCurrentPage(Page.Home)}
        aria-label="Go to homepage"
      >
        SEMANTICS.WORKS
      </div>

      {/* Smart ELI5 Toggle */}
      <div className="relative ml-4 z-50">
        <button
          onClick={toggleEli5}
          className="w-4 h-4 relative group focus:outline-none block"
          aria-label={isEnabled ? 'Disable Semantics' : 'Enable Semantics'}
          title={isEnabled ? 'Disable Semantics' : 'Enable Semantics'}
        >
          {/* ON State: Favicon */}
          <div
            className={`w-full h-full transition-all duration-300 ${isEnabled ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          >
            <img src="/assets/favicon.png" alt="Toggle" className="w-full h-full object-contain" />
          </div>

          {/* OFF State: Black Square (Solid) */}
          <div
            className={`absolute inset-0 bg-black border border-white/20 rounded-[1px] transition-all duration-300 ${isEnabled ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}
          ></div>
        </button>

        {/* Re-enable Prompt: Clean Gray Text + Curved Arrow */}
        <div
          className={`absolute left-full top-1/2 -translate-y-1/2 ml-2 flex items-center gap-1 transition-all duration-500 ${showReenablePrompt ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'}`}
          onClick={() => toggleEli5()}
        >
          {/* Curved Arrow (SVG) */}
          <svg
            width="30"
            height="20"
            viewBox="0 0 30 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-neutral-400 rotate-6 transform -mt-2 opacity-60"
          >
            <path
              d="M28 8C18 8 12 12 2 12M2 12L6 9M2 12L6 15"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Text */}
          <span className="text-neutral-400 text-[11px] font-normal whitespace-nowrap select-none cursor-pointer hover:text-neutral-600 transition-colors">
            click here to enable semantics again
          </span>
        </div>
      </div>

      <div className="flex gap-3 md:gap-8 text-[9px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] font-light flex-1 justify-end">
        {navItems.map((item) => (
          <button
            key={item.value}
            onClick={() => setCurrentPage(item.value)}
            className={`transition-all uppercase relative group py-2 whitespace-nowrap ${
              currentPage === item.value ? 'opacity-100' : 'opacity-40 hover:opacity-100'
            }`}
            aria-label={`Navigate to ${item.name}`}
            aria-current={currentPage === item.value ? 'page' : undefined}
          >
            {item.name}
            <span
              className={`absolute bottom-0 left-0 w-full h-[1px] bg-current transition-transform duration-500 origin-left ${currentPage === item.value ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
            ></span>
          </button>
        ))}
      </div>
    </nav>
  );
};
