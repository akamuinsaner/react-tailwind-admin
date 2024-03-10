'use client'
import { reducer, initialState } from './reducer';
import { useReducer, CSSProperties, FC, ReactNode, memo } from 'react';
import classNames from 'classnames';
import { RTSize } from '../../types/size';

export type Props = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    size: RTSize;
    type: 'contained' | 'outlined' | 'text'
}

const Text: FC<Props> = ({
    children,
    className,
    style,
    size = 'medium',
    type = 'contained'
}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const computedClassNames = classNames(state.styles.base, {
        'h-12 text-base': size === 'large',
        'h-10 text-sm': size === 'medium',
        'h-8 text-xs': size === 'small',
        'bg-primary text-white border-primary': type === 'contained',
        'bg-transparent text-primary border-primary': type === 'outlined',
        'bg-transparent text-primary border-transparent': type === 'text',
    }, className);

    return (
        <button
            style={style}
            className={computedClassNames}
        >
            {children}
        </button>
    )
}

export default memo(Text);