'use client';
import { reducer, initialState } from './reducer';
import { useReducer, CSSProperties, FC, ReactNode, memo } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type Props = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'tip';
};

const Text: FC<Props> = ({ children, className, style, size }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const computedClassNames = twMerge(
        styles.base,
        classNames({
            'text-8xl': size === 'h1',
            'text-6xl': size === 'h2',
            'text-5xl': size === 'h3',
            'text-4xl': size === 'h4',
            'text-2xl': size === 'h5',
            'text-xl': size === 'h6',
            'text-base': size === 'body',
            'text-xs': size === 'tip',
        }),
        className,
    );

    return (
        <p style={style} className={computedClassNames}>
            {children}
        </p>
    );
};

export default memo(Text);
