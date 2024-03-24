'use client';
import {
    CSSProperties,
    FC,
    ReactNode,
    memo,
    SyntheticEvent,
    ButtonHTMLAttributes,
    forwardRef,
    LegacyRef,
} from 'react';
import classNames from 'classnames';
import { RTSize } from '../../types/size';
import { styles } from './styles';
import { RTSeverity } from '../../types/severity';
import { twMerge } from 'tailwind-merge';

export type RTButtonProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    size?: RTSize;
    color?: 'primary' | 'secondary' | RTSeverity;
    disabled?: boolean;
    onClick?: (e: SyntheticEvent) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: FC<RTButtonProps> = forwardRef(
    (
        {
            children,
            className,
            style,
            size = 'medium',
            color,
            disabled,
            onClick,
            ...nativeProps
        },
        ref: LegacyRef<HTMLButtonElement>,
    ) => {
        const computedClassNames = twMerge(
            styles.icon,
            styles.iconButton.base,
            classNames({
                [styles.iconButton.large]: size === 'large',
                [styles.iconButton.medium]: size === 'medium',
                [styles.iconButton.small]: size === 'small',
                [styles.large]: size === 'large',
                [styles.medium]: size === 'medium',
                [styles.small]: size === 'small',
                [styles.primary]: color === 'primary',
                [styles.secondary]: color === 'secondary',
                [styles.success]: color === 'success',
                [styles.info]: color === 'info',
                [styles.warning]: color === 'warning',
                [styles.danger]: color === 'danger',
                [styles.disabled]: disabled,
            }),
            className,
        );

        return (
            <button
                ref={ref}
                style={style}
                className={computedClassNames}
                disabled={disabled}
                onClick={onClick}
                {...nativeProps}
            >
                {children}
            </button>
        );
    },
);

export default IconButton;
