'use client';
import {
    useReducer,
    CSSProperties,
    FC,
    ReactNode,
    memo,
    forwardRef,
    LegacyRef,
    HTMLAttributes,
} from 'react';
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
} & HTMLAttributes<HTMLDivElement>;

const Flex: FC<RTFlexProps> = forwardRef(
    (
        {
            inline,
            children,
            className,
            style,
            direction = 'row',
            gap,
            wrap = 'nowrap',
            align = 'stretch',
            justify = 'normal',
            ...nativeProps
        },
        ref: LegacyRef<HTMLDivElement>,
    ) => {
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
            <div
                ref={ref}
                style={style}
                className={computedClassNames}
                {...nativeProps}
            >
                {children}
            </div>
        );
    },
);

export default Flex;
