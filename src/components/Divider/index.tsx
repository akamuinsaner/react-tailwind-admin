'use client';
import { useReducer, CSSProperties, FC, ReactNode, memo, useMemo } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type Props = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    vertical?: boolean;
    gap?: 'small' | 'medium' | 'large' | number;
    textAlign?: 'left' | 'center' | 'right';
};

const Page: FC<Props> = ({
    children,
    className,
    style,
    vertical = false,
    gap = 'medium',
    textAlign = 'center',
}) => {
    const gapClassStr = useMemo(() => {
        if (typeof gap === 'string') {
            if (!vertical) return styles[`gap-${gap}-y`];
            else return styles[`gap-${gap}-x`];
        } else {
            if (!vertical) return `my-[${gap}px]`;
            else return `mx-[${gap}px]`;
        }
    }, [gap, vertical]);

    const computedClassNames = twMerge(
        styles.base,
        gapClassStr,
        classNames({
            [styles.vertical]: vertical,
            [styles.withText]: children && !vertical,
            [styles[textAlign]]: children && !vertical,
        }),
        className,
    );

    let preChildren = null;
    if (children) preChildren = <span className={styles.text}>{children}</span>;

    return (
        <div style={style} className={computedClassNames}>
            {preChildren}
        </div>
    );
};

export default memo(Page);
