import classNames from 'classnames';
import { CSSProperties, FC, ReactNode, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type RTGridProps = {
    wrapper?: boolean;
    style?: CSSProperties;
    className?: string;
    itemClassName?: string;
    children?: ReactNode;
    span?:
        | number
        | {
              default: number;
              sm?: number;
              md?: number;
              lg?: number;
              xl?: number;
              '2xl'?: number;
          };
    offset?:
        | number
        | {
              default: number;
              sm?: number;
              md?: number;
              lg?: number;
              xl?: number;
              '2xl'?: number;
          };
    rowGap?: 'small' | 'medium' | 'large';
    colGap?: 'small' | 'medium' | 'large';
};

const Grid: FC<RTGridProps> = ({
    wrapper,
    style,
    itemClassName,
    className,
    children,
    span = 12,
    offset = 0,
    rowGap,
    colGap,
}) => {
    const spanClassStr = useMemo(() => {
        if (typeof span === 'number') return styles.inner[`span-${span}`];
        const { default: defaultSpan, ...responsiveItems } = span;
        return Object.keys(responsiveItems).reduce(
            (pre, cur) => {
                return `${pre} ${styles.inner[`${cur}:span-${responsiveItems[cur]}`]}`;
            },
            `${styles.inner[`span-${defaultSpan}`]}`,
        );
    }, [span]);
    const offsetClassStr = useMemo(() => {
        if (typeof offset === 'number') return styles.inner[`offset-${offset}`];
        const { default: defaultoffset, ...responsiveItems } = offset;
        return Object.keys(responsiveItems).reduce(
            (pre, cur) => {
                return `${pre} ${styles.inner[`${cur}:offset-${responsiveItems[cur]}`]}`;
            },
            `${styles.inner[`offset-${defaultoffset}`]}`,
        );
    }, [offset]);
    const colGapClassStr = useMemo(() => {
        return styles.inner[`col-gap-${colGap}`];
    }, [colGap]);
    const rowGapClassStr = useMemo(() => {
        return styles.inner[`row-gap-${rowGap}`];
    }, [rowGap]);
    const wrapperColGapClassStr = useMemo(() => {
        return styles.wrapper[`col-gap-${colGap}`];
    }, [colGap]);
    const wrapperRowGapClassStr = useMemo(() => {
        return styles.wrapper[`row-gap-${rowGap}`];
    }, [rowGap]);
    const gridClassName = twMerge(
        styles.inner.base,
        spanClassStr,
        offsetClassStr,
        rowGapClassStr,
        colGapClassStr,
        itemClassName,
        classNames({
            [styles.wrapper.base]: wrapper,
            [wrapperColGapClassStr]: wrapper,
            [wrapperRowGapClassStr]: wrapper,
        }),
    );
    const contentClassName = twMerge(styles.inner.content, className);

    if (wrapper) {
        return (
            <div className={twMerge(gridClassName, className)}>{children}</div>
        );
    }
    return (
        <div className={gridClassName}>
            <div className={contentClassName} style={style}>
                {children}
            </div>
        </div>
    );
};

export default Grid;
