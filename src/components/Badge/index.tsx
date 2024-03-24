import { RTSeverity } from '@/src/types/severity';
import classNames from 'classnames';
import { CSSProperties, forwardRef, LegacyRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type RTBadgeColor = 'primary' | 'secondary' | RTSeverity;
export type RTBadgeVertical = 'top' | 'middle' | 'bottom';
export type RTBadgeHorizontal = 'left' | 'center' | 'right';

export type RTBadgeProps = {
    children?: ReactNode;
    style?: CSSProperties;
    className?: string;
    count?: number;
    color?: RTBadgeColor;
    vertical?: RTBadgeVertical;
    horizontal?: RTBadgeHorizontal;
    maxCount?: number;
};

const Badge = forwardRef(
    (
        {
            children,
            style,
            className,
            count,
            color = 'danger',
            vertical = 'top',
            horizontal = 'right',
            maxCount = Infinity,
        }: RTBadgeProps,
        ref: LegacyRef<HTMLSpanElement>,
    ) => {
        const wrapperClassName = twMerge(
            styles.wrapper.base,
            classNames({
                [styles.wrapper.alone]: !children,
            }),
        );
        const computedClassName = twMerge(
            styles.sup.base,
            styles.sup[color],
            styles.sup[vertical],
            styles.sup[horizontal],
            classNames({
                [styles.sup.count]: count !== undefined,
                [styles.sup.alone]: !children,
            }),
            className,
        );
        return (
            <span ref={ref} className={wrapperClassName}>
                {children}
                <span style={style} className={computedClassName}>
                    {count > maxCount ? `${maxCount}+` : count}
                </span>
            </span>
        );
    },
);

export default Badge;
