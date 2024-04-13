import { RTVariant } from '@/src/types/variant';
import classNames from 'classnames';
import { CSSProperties, forwardRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type RTTagColors =
    | 'slate'
    | 'gray'
    | 'zinc'
    | 'neutral'
    | 'stone'
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose';

export type RTTagVariant = 'outlined' | 'contained';

export type RTTagProps = {
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
    color?: RTTagColors;
    variant?: RTTagVariant;
};

const Tag = forwardRef<HTMLSpanElement, RTTagProps>(
    ({ className, style, children, color, variant }, ref) => {
        const baseClassName = twMerge(
            styles.box,
            classNames({
                [styles[color]]: color,
                [styles[variant]]: variant,
                [styles[`${variant}-${color}`]]: variant && color,
            }),
            className,
        );
        return (
            <span ref={ref} style={style} className={baseClassName}>
                {children}
            </span>
        );
    },
);

export default Tag;
