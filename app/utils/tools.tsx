import { ReactNode } from 'react';
import { v4 as uuidV4 } from 'uuid';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@/tailwind.config';
import { flushSync } from 'react-dom';

export const debounce = cb => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        }, 300);
    };
};

export const highlightText = (
    text: ReactNode,
    highlight: string,
    highlightClassName: string = 'font-bold',
): ReactNode => {
    const parts = `${text}`.split(new RegExp(`(${highlight})`, 'gi'));
    return (
        <span>
            {parts.map((part, i) => {
                if (part.toLowerCase() !== highlight.toLowerCase()) {
                    return <span>{part}</span>;
                }
                return <span className={highlightClassName}>{part}</span>;
            })}
        </span>
    );
};

export const fullTWConfig = resolveConfig(tailwindConfig);
