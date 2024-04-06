'use client';
import { CSSProperties, ReactNode, forwardRef } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type RTSideBarProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
};

const SideBar = forwardRef<HTMLElement, RTSideBarProps>(
    ({ children, className, style }, ref) => {
        const computedClassNames = twMerge(styles.base, className);

        return (
            <aside ref={ref} style={style} className={computedClassNames}>
                {children}
            </aside>
        );
    },
);

export default SideBar;
