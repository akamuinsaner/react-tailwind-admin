'use client'
import { CSSProperties, FC, memo, ReactNode } from 'react';
import classNames from 'classnames';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';

export type RTModalFooterProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}


const ModalFooter: FC<RTModalFooterProps> = ({
    children,
    className,
    style,
}) => {
    const computedClassNames = twMerge(styles.footer, className);

    return (
        <div
            style={style}
            className={computedClassNames}
        >
            {children}
        </div>
    )
}

export default memo(ModalFooter);
