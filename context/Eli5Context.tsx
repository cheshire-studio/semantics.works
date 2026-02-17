import { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';

interface Eli5ContextType {
    isEnabled: boolean;
    toggleEli5: () => void;
    reportHoverInteraction: (durationMs: number) => void;
    showReenablePrompt: boolean;
}

const Eli5Context = createContext<Eli5ContextType | undefined>(undefined);

export const Eli5Provider = ({ children }: { children: ReactNode }) => {
    // Default to true, or load from localStorage
    // Default to true on every load (per user request), ignoring localStorage for initialization.
    // We still persist changes to localStorage for potential future use or other tabs, 
    // but this specific requirement means a refresh resets to Enabled.
    const [isEnabled, setIsEnabled] = useState(true);

    // Fix: Declare the ref that was missing, causing the crash
    const quickExitCount = useRef(0);
    const [showReenablePrompt, setShowReenablePrompt] = useState(false);

    // Persist state changes
    useEffect(() => {
        localStorage.setItem('eli5_enabled', JSON.stringify(isEnabled));
    }, [isEnabled]);

    const toggleEli5 = () => {
        setIsEnabled((prev: boolean) => {
            const newState = !prev;
            // If manually enabled, reset annoyance counter to give them a fresh start
            if (newState) {
                quickExitCount.current = 0;
                setShowReenablePrompt(false);
            }
            return newState;
        });
    };

    const reportHoverInteraction = (durationMs: number) => {
        // Only track if currently enabled
        if (!isEnabled) return;

        // "Quick exit" threshold: < 1000ms
        if (durationMs < 1000) {
            quickExitCount.current += 1;

            // If 3 consecutive quick exits, auto-disable
            if (quickExitCount.current >= 3) {
                setIsEnabled(false);
                setShowReenablePrompt(true);

                // Auto-dismiss prompt after 5s
                setTimeout(() => setShowReenablePrompt(false), 5000);

                quickExitCount.current = 0; // Reset count
            }
        } else {
            // If they lingered > 1s, they are reading. Reset the annoyance counter.
            quickExitCount.current = 0;
        }
    };

    return (
        <Eli5Context.Provider value={{ isEnabled, toggleEli5, reportHoverInteraction, showReenablePrompt }}>
            {children}
        </Eli5Context.Provider>
    );
};

export const useEli5 = () => {
    const context = useContext(Eli5Context);
    if (context === undefined) {
        throw new Error('useEli5 must be used within an Eli5Provider');
    }
    return context;
};
