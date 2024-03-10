'use client'
import { reducer, initialState } from './reducer';
import { useReducer, CSSProperties, FC, ReactNode, memo } from 'react';
import { twMerge } from 'tailwind-merge';

export type Props = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

const CardHeader: FC<Props> = ({
    children,
    className,
    style,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const computedClassNames = twMerge(state.styles.header, className);

    return (
        <div
            style={style}
            className={computedClassNames}
        >
            {children}
        </div>
    )
}

export default memo(CardHeader);