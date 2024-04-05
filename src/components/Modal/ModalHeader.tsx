'use client';
import { CSSProperties, FC, memo, ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';
import { ModalContext } from './context';
import { XMarkIcon } from '@heroicons/react/24/outline';

export type RTModalHeaderProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    closeIcon?: ReactNode | false;
};

const ModalHeader: FC<RTModalHeaderProps> = ({
    children,
    className,
    style,
    closeIcon,
}) => {
    const context = useContext(ModalContext);
    const computedClassNames = twMerge(styles.header, className);

    return (
        <div style={style} className={computedClassNames}>
            {children}
            {context.closable && (
                <div className={styles.close} onClick={context.onClickClose}>
                    {closeIcon === false ? null : closeIcon || <XMarkIcon />}
                </div>
            )}
        </div>
    );
};

export default memo(ModalHeader);
