'use client'
import { reducer, initialState } from './reducer';
import { useReducer, CSSProperties, FC, ReactNode, memo } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export type Props = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    densed?: boolean;
    divider?: boolean;
}

const Text: FC<Props> = ({
    children,
    className,
    style,
    densed,
    divider,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const computedClassNames = twMerge(state.styles.base, classNames({
        '[&>li>div]:min-h-10': densed,
        '[&>li]:border-t': divider
    }), className);

    return (
        <ul
            style={style}
            className={computedClassNames}
        >
            {children}
        </ul>
    )
}

export default memo(Text);