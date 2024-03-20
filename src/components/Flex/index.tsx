'use client';
import { useReducer, CSSProperties, FC, ReactNode, memo } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type RTFlexProps = {
    inline?: boolean;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    direction?: 'row' | 'column' | 'row-reserse' | 'column-reverse';
    gap?: 'small' | 'medium' | 'large' | number;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    justify?:
        | 'normal'
        | 'start'
        | 'end'
        | 'center'
        | 'between'
        | 'around'
        | 'evenly'
        | 'stretch';
};

const Flex: FC<RTFlexProps> = ({
    inline,
    children,
    className,
    style,
    direction = 'row',
    gap,
    wrap = 'nowrap',
    align = 'stretch',
    justify = 'normal',
}) => {
    const computedClassNames = twMerge(
        styles.base,
        styles[direction],
        styles[wrap],
        styles[`align-${align}`],
        styles[`justify-${justify}`],
        styles[`gap-${gap}`],
        classNames({
            [styles.inline]: inline,
        }),
        className,
    );

    if (typeof gap === 'number') {
        style = Object.assign({}, { gap: `${gap}px` }, style);
    }

    return (
        <div style={style} className={computedClassNames}>
            {children}
        </div>
    );
};

export default memo(Flex);
