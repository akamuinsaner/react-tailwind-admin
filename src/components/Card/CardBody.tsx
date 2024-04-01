'use client';
import { CSSProperties, FC, ReactNode, memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type Props = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
};

const CardHeader: FC<Props> = ({ children, className, style }) => {
    const computedClassNames = twMerge(styles.body, className);

    return (
        <div style={style} className={computedClassNames}>
            {children}
        </div>
    );
};

export default memo(CardHeader);
