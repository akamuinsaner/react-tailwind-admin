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
    variant?: 'contained' | 'outlined' | 'text';
    color?: 'primary' | 'secondary' | RTSeverity;
    disabled?: boolean;
    prefix?: ReactNode;
    suffix?: ReactNode;
    onClick?: (e: SyntheticEvent) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<RTButtonProps> = forwardRef(
    (
        {
            children,
            className,
            style,
            size = 'medium',
            variant = 'contained',
            color = 'primary',
            disabled,
            prefix,
            suffix,
            onClick,
            ...nativeProps
        },
        ref: LegacyRef<HTMLButtonElement>,
    ) => {
        const computedClassNames = twMerge(
            styles.base,
            classNames({
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
                [styles.contained]: variant === 'contained',
                [styles.outlined]: variant === 'outlined',
                [styles.text]: variant === 'text',
            }),
            className,
        );

        const preFixIconClassNames = twMerge(
            styles.prefix,
            classNames({
                [styles.largeIcon]: size === 'large',
                [styles.smallIcon]: size === 'small',
                [styles.mediumIcon]: size === 'medium',
            }),
        );

        const suffixIconClassNames = twMerge(
            styles.suffix,
            classNames({
                [styles.largeIcon]: size === 'large',
                [styles.smallIcon]: size === 'small',
                [styles.mediumIcon]: size === 'medium',
            }),
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
                {prefix && <div className={preFixIconClassNames}>{prefix}</div>}
                {children}
                {suffix && <div className={suffixIconClassNames}>{suffix}</div>}
            </button>
        );
    },
);

export default Button;
