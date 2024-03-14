'use client'
import { styles } from './styles';
import React, { CSSProperties, FC, ReactNode, memo, useRef, useContext } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { RTSeverity } from '@/src/types/severity';
import { RadioContext } from './context';

export type RTRadioProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    status?: RTSeverity;
    disabled?: boolean
    value?: string | number;
}

const Radio: FC<RTRadioProps> = ({
    children,
    className,
    style,
    value,
    status,
    disabled,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const context = useContext(RadioContext);
    const checked = value === context.value;
    const finalStatus = status || context.status;
    const disable = disabled || context.disabled;
    const computedClassNames = twMerge(styles.box.base, classNames({
        [styles.box.disabled]: disabled
    }), className);

    const innerClassNames = twMerge(styles.inner.base, classNames({
        [styles.inner.checked]: checked,
        [styles.inner[finalStatus]]: checked,
        [styles.inner.disabled]: disable,
    }));


    return (
        <span
            style={style}
            className={computedClassNames}
            onClick={() => {
                if (disabled) return;
                inputRef.current.click()
            }}
        >
            <div className={styles.wrapper}>
                <span className={innerClassNames}></span>
                <input
                    disabled={disabled}
                    type="radio"
                    value={value}
                    ref={inputRef}
                    className={styles.input}
                    onClick={(e) => {
                        context.onRadioChange(e as any)
                        e.nativeEvent.stopImmediatePropagation();
                        e.stopPropagation();
                    }}
                />
            </div>
            <span>{children}</span>
        </span>

    )
}

export default memo(Radio);