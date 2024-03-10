'use client'
import { reducer, initialState } from './reducer';
import { useReducer, CSSProperties, FC, ReactNode, memo } from 'react';
import classNames from 'classnames';

export type Props = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

const Box: FC<Props> = ({
    children,
    className,
    style,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const computedClassNames = classNames(state.styles.base, className);

    return (
        <div
            style={style}
            className={computedClassNames}
        >
            {children}
        </div>
    )
}

export default memo(Box);