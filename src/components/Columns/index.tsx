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
    count,
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

    const baseClassName = twMerge(
        columnClassStr,
        styles[`gap-${gap}`],
        styles[`space-${space}`],
        className,
    );

    const finalStyle = useMemo(() => {
        if (typeof gap === 'number') {
            style = Object.assign({}, style, { gap: `${gap}px` });
        }
        if (typeof space === 'number') {
            style = Object.assign({}, style, { marginBottom: `${space}px` });
        }
        return style;
    }, [style, gap, space]);
    return (
        <div style={finalStyle} className={baseClassName}>
            {children}
        </div>
    );
};

export default Columns;
