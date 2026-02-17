import { useState, ElementType, HTMLAttributes } from 'react';
import { useEli5 } from '../context/Eli5Context';

interface Eli5TextProps extends HTMLAttributes<HTMLElement> {
    text: string;
    eli5: string;
    as?: ElementType;
    placement?: 'left' | 'center' | 'right';
}

export const Eli5Text = ({
    text,
    eli5,
    className = '',
    as: Component = 'div',
    placement = 'left',
    ...props
}: Eli5TextProps) => {
    const { isEnabled, reportHoverInteraction } = useEli5();
    const [isActive, setIsActive] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
    const [startTime, setStartTime] = useState<number>(0);

    // Toggle for mobile/touch interactions
    const handleInteraction = () => {
        if (!isEnabled) return;
        setIsActive(!isActive);
    };

    const handleMouseEnter = () => {
        if (!isEnabled) return;
        setStartTime(Date.now());
        const id = setTimeout(() => {
            setIsActive(true);
        }, 300); // 300ms delay
        setTimeoutId(id);
    };

    const handleMouseLeave = () => {
        if (!isEnabled) return;

        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setIsActive(false);

        // Report interaction duration for "smart disable" logic
        if (startTime > 0) {
            const duration = Date.now() - startTime;
            reportHoverInteraction(duration);
            setStartTime(0);
        }
    };

    // If disabled, just render text without wrapper logic (or kept simple)
    if (!isEnabled) {
        return (
            <Component className={`${className} inline-block`} {...props}>
                {text}
            </Component>
        );
    }

    const justifyClass = {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
    }[placement];

    return (
        <Component
            className={`relative cursor-zoom-in group inline-block ${className}`}
            onClick={handleInteraction}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {/* Original Text */}
            <span
                className={`block transition-all duration-500 ease-out ${isActive ? 'blur-sm opacity-20' : 'blur-0 opacity-100'
                    }`}
            >
                {text}
            </span>

            {/* ELI5 Text Overlay */}
            <span
                className={`absolute inset-0 flex items-center ${justifyClass} transition-all duration-500 ease-out font-sans font-medium not-italic text-accent ${isActive
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-4 pointer-events-none'
                    }`}
            >
                {eli5}
            </span>
        </Component>
    );
};
