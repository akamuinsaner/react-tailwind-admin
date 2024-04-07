'use client';
import { CSSProperties, ReactNode, forwardRef } from 'react';
import classNames from 'classnames';
import { styles } from './styles';

export type RTScrollPageProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
};

const ScrollPage = forwardRef<HTMLDivElement, RTScrollPageProps>(
    ({ children, className, style }, ref) => {
        const computedClassNames = classNames(styles.base, className);

        return (
            <div ref={ref} style={style} className={computedClassNames}>
                {children}
            </div>
        );
    },
);

export default ScrollPage;
