'use client'
import { reducer, initialState } from './reducer';
import { useReducer, CSSProperties, FC, ReactNode, memo } from 'react';
import { twMerge } from 'tailwind-merge';

export type Props = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

const Card: FC<Props> = ({
    children,
    className,
    style,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const computedClassNames = twMerge(state.styles.base, className);

    return (
        <section
            style={style}
            className={computedClassNames}
        >
            {children}
        </section>
    )
}

export default memo(Card);