import { ReactNode } from 'react';

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
