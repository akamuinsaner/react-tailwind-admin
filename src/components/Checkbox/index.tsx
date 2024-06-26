'use client';
import { styles } from './styles';
import {
    useReducer,
    CSSProperties,
    FC,
    ReactNode,
    memo,
    useRef,
    useEffect,
    forwardRef,
    HTMLAttributes,
} from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

import {
    initialState,
    reducer,
    setCheckedAction,
    setIndeterminateAction,
} from './store';
import { RTSeverity } from '@/src/types/severity';
import { RTSize } from '@/src/types/size';

export type RTCheckboxProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    checked?: boolean;
    status?: RTSeverity;
    indeterminate?: boolean;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    defaultChecked?: boolean;
    value?: boolean;
} & HTMLAttributes<HTMLSpanElement>;

const Checkbox = forwardRef<HTMLSpanElement, RTCheckboxProps>(
    (
        {
            children,
            className,
            style,
            checked,
            onChange,
            status,
            indeterminate,
            disabled,
            defaultChecked,
            value,
            ...nativeProps
        },
        ref,
    ) => {
        const inputRef = useRef<HTMLInputElement>(null);
        const [state, dispatch] = useReducer(reducer, initialState);
        checked =
            typeof value !== 'undefined' || typeof checked !== 'undefined'
                ? !!(value || checked)
                : undefined;
        const setChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange) onChange(e);
            if (typeof checked === 'boolean') return;
            if (indeterminate) return;
            dispatch(setCheckedAction(e.target.checked));
        };

        const computedClassNames = twMerge(
            styles.box.base,
            classNames({
                [styles.box.disabled]: disabled,
            }),
            className,
        );

        const innerClassNames = twMerge(
            styles.inner.base,
            classNames({
                [styles.inner.checked]: state.checked,
                [styles.inner.indeterminate]: state.indeterminate,
                [styles.inner[status]]: state.checked || state.indeterminate,
                [styles.inner.disabled]: disabled,
            }),
        );

        useEffect(() => {
            if (typeof checked === 'boolean') {
                dispatch(setCheckedAction(checked));
                return;
            }
            if (defaultChecked) {
                dispatch(setCheckedAction(true));
            }
        }, [checked]);

        useEffect(() => {
            if (typeof indeterminate === 'boolean') {
                dispatch(setIndeterminateAction(indeterminate));
            }
        }, [indeterminate]);

        useEffect(() => {}, []);

        return (
            <span
                {...nativeProps}
                style={style}
                ref={ref}
                className={computedClassNames}
                onClick={e => {
                    if (nativeProps.onClick) nativeProps.onClick(e);
                    inputRef.current.click();
                }}
            >
                <div className={styles.wrapper}>
                    <span className={innerClassNames}></span>
                    <input
                        disabled={disabled}
                        type='checkbox'
                        ref={inputRef}
                        className={styles.input}
                        onChange={setChecked}
                        checked={state.checked}
                        onClick={e => {
                            e.nativeEvent.stopImmediatePropagation();
                            e.stopPropagation();
                        }}
                    />
                </div>
                <span>{children}</span>
            </span>
        );
    },
);

export default Checkbox;
