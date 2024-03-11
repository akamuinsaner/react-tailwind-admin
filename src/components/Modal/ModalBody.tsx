'use client'
import { CSSProperties, FC, memo, ReactNode } from 'react';
import classNames from 'classnames';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';

export type RTModalBodyProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}


const ModalBody: FC<RTModalBodyProps> = ({
    children,
    className,
    style,
}) => {
    const computedClassNames = twMerge(styles.body, className);

    return (
        <div
            style={style}
            className={computedClassNames}
        >
            {children}
        </div>
    )
}

export default memo(ModalBody);
