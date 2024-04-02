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
} from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

import {
    initialState,
    reducer,
    setCheckedAction,
    setLeftAction,
} from './store';
import { RTSeverity } from '@/src/types/severity';
import { RTSize } from '@/src/types/size';

export type RTSwitchProps = {
    className?: string;
    style?: CSSProperties;
    checked?: boolean;
    status?: RTSeverity;
    disabled?: boolean;
    value?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    defaultChecked?: boolean;
    checkedText?: ReactNode;
    unCheckedText?: ReactNode;
    size?: RTSize;
    children?: ReactNode;
};

const Switch: FC<RTSwitchProps> = ({
    className,
    style,
    checked,
    value,
    onChange,
    status,
    disabled,
    defaultChecked,
    checkedText,
    unCheckedText,
    size = 'medium',
    children,
}) => {
    const boxRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLSpanElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    checked =
        typeof value !== 'undefined' || typeof checked !== 'undefined'
            ? !!(value || checked)
            : undefined;
    const [state, dispatch] = useReducer(reducer, initialState);
    const setLeft = (left: number) => dispatch(setLeftAction(left));
    const setChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value = e.target.checked as any;
        if (onChange) onChange(e);
        if (typeof checked === 'boolean') return;
        dispatch(setCheckedAction(e.target.checked));
    };

    const wrapperClassName = twMerge(
        styles.box.base,
        classNames({
            [styles.box.checked]: state.checked,
            [styles.box[status]]: state.checked,
            [styles.box.disabled]: disabled,
            [styles.box[size]]: true,
        }),
        className,
    );

    const innerClassNames = twMerge(
        styles.inner.base,
        classNames({
            [styles.inner.disabled]: disabled,
            [styles.inner[size]]: true,
        }),
    );

    const textClassName = twMerge(
        styles.text.base,
        classNames({
            [styles.text.checked]: state.checked,
            [styles.text[size]]: true,
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
        const box = boxRef.current;
        const inner = innerRef.current;
        if (state.checked) {
            setLeft(box.offsetWidth - inner.offsetWidth - 2);
        } else {
            setLeft(2);
        }
    }, [state.checked]);

    return (
        <span
            style={style}
            className={styles.base}
            onClick={() => {
                if (disabled) return;
                inputRef.current.click();
            }}
        >
            <div className={wrapperClassName} ref={boxRef}>
                <span
                    className={innerClassNames}
                    ref={innerRef}
                    style={{ left: `${state.offsetLeft}px` }}
                ></span>
                <span className={textClassName}>
                    {state.checked ? checkedText : unCheckedText}
                </span>
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
};

export default memo(Switch);
