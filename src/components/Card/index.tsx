'use client';
import { CSSProperties, FC, ReactNode, memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type Props = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
};

const Card: FC<Props> = ({ children, className, style }) => {
    const computedClassNames = twMerge(styles.base, className);

    return (
        <section style={style} className={computedClassNames}>
            {children}
        </section>
    );
};

export default memo(Card);
