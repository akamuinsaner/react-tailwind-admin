import { CSSProperties, FC, ReactNode, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type RTColumnBreakPoints = {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
    [name: string]: number;
};

export type RTColumnsProps = {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    count?: number | RTColumnBreakPoints;
    gap?: 'small' | 'medium' | 'large' | number;
    space?: 'small' | 'medium' | 'large' | number;
};

const Columns: FC<RTColumnsProps> = ({
    style,
    className,
    children,
    count = 1,
    gap = 'medium',
    space = 'medium',
}) => {
    const columnClassStr = useMemo(() => {
        if (typeof count === 'number') return `columns-${count}`;
        const { default: defaultCount, ...responsiveItems } = count;
        return Object.keys(responsiveItems).reduce((pre, cur) => {
            return `${pre} ${cur}:columns-${responsiveItems[cur]}`;
        }, `columns-${defaultCount}`);
    }, [count]);

    const gapClassStr = useMemo(() => {
        if (typeof gap === 'string') return styles[`gap-${gap}`];
        return `gap-[${gap}px]`;
    }, [gap]);

    const spaceClassStr = useMemo(() => {
        if (typeof space === 'string') return styles[`space-${space}`];
        return `[&>*]:mb-[${space}px]`;
    }, [space]);

    const baseClassName = twMerge(
        'w-full',
        columnClassStr,
        gapClassStr,
        spaceClassStr,
        className,
    );

    return (
        <div style={style} className={baseClassName}>
            {children}
        </div>
    );
};

export default Columns;
