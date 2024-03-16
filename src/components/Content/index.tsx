'use client'
import { reducer, initialState } from './reducer';
import { useReducer, CSSProperties, FC, ReactNode, memo } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export type Props = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

const Content: FC<Props> = ({
    children,
    className,
    style,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const computedClassNames = twMerge(state.styles.base, className);

    return (
        <article
            style={style}
            className={computedClassNames}
        >
            {children}
        </article>
    )
}

export default memo(Content);