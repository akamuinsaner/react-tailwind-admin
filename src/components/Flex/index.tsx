'use client'
import { useReducer, CSSProperties, FC, ReactNode, memo } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type Props = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    direction: 'row' | 'column' | 'row-reserse' | 'column-reverse',
    gap: 
}

const Text: FC<Props> = ({
    children,
    className,
    style,
}) => {

    const computedClassNames = twMerge(styles.base, classNames({
        
    }), className);

    return (
        <div
            style={style}
            className={computedClassNames}
        >
            {children}
        </div>
    )
}

export default memo(Text);