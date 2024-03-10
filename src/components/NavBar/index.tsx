'use client';
import { reducer, initialState } from './reducer';
import { useReducer, CSSProperties, FC, ReactNode, memo } from 'react';
import classNames from 'classnames';

export type Props = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode
}

const NavBar: FC<Props> = ({
    children,
    className,
    style,
}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const navClassNames = classNames(state.styles.base, className);

    return (
        <nav
            style={style}
            className={navClassNames}
        >
            {children}
        </nav>
    )
}

export default memo(NavBar);