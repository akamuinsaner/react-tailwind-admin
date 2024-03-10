'use client'
import { useReducer, CSSProperties, FC, ReactNode, memo } from 'react';
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
    type?: 'contained' | 'outlined' | 'text',
    color?: 'primary' | 'secondary' | RTSeverity | 'disabled';
    disabled?: boolean;
    prefix?: ReactNode;
    suffix?: ReactNode
}

const Button: FC<RTButtonProps> = ({
    children,
    className,
    style,
    size = 'medium',
    type = 'contained',
    color = 'primary',
    disabled,
    prefix,
    suffix
}) => {

    const computedClassNames = twMerge(styles.base, classNames({
        [styles.large]: size === 'large',
        [styles.medium]: size === 'medium',
        [styles.small]: size === 'small',
        [styles.primary] : color === 'primary',
        [styles.secondary] : color === 'secondary',
        [styles.success] : color === 'success',
        [styles.info] : color === 'info',
        [styles.warning] : color === 'warning',
        [styles.danger] : color === 'danger',
        [styles.disabled]: disabled,
        [styles.contained]: type === 'contained',
        [styles.outlined]: type === 'outlined',
        [styles.text]: type === 'text',
    }), className);

    const preFixIconClassNames = twMerge(styles.prefix, classNames({
        [styles.largeIcon]: size === 'large',
        [styles.smallIcon]: size === 'small',
        [styles.mediumIcon]: size === 'medium',
    }))

    const suffixIconClassNames = twMerge(styles.suffix, classNames({
        [styles.largeIcon]: size === 'large',
        [styles.smallIcon]: size === 'small',
        [styles.mediumIcon]: size === 'medium',
    }))

    return (
        <button
            style={style}
            className={computedClassNames}
            disabled={disabled}
        >
            {prefix && <div className={preFixIconClassNames}>{prefix}</div>}
            {children}
            {suffix && <div className={suffixIconClassNames}>{suffix}</div>}
        </button>
    )
}

export default memo(Button);