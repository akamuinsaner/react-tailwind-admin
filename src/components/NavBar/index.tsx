'use client';
import { reducer, initialState } from './reducer';
import {
    useReducer,
    CSSProperties,
    FC,
    ReactNode,
    memo,
    forwardRef,
} from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type RTNavBarProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
};

const NavBar = forwardRef<HTMLElement, RTNavBarProps>(
    ({ children, className, style }, ref) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const navClassNames = twMerge(styles.base, className);

        return (
            <nav ref={ref} style={style} className={navClassNames}>
                {children}
            </nav>
        );
    },
);

export default memo(NavBar);
