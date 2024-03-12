'use client'
import { reducer, initialState, setFocusedAction, setValueAction } from './store';
import {
    useReducer, CSSProperties, FC, ReactNode, memo,
    SyntheticEvent, useEffect, ChangeEvent, EventHandler,
    TextareaHTMLAttributes
} from 'react';
import classNames from 'classnames';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';
import { RTSize } from '@/src/types/size';
import { RTSeverity } from '@/src/types/severity';

export type RTTextareaProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    placeholder?: string;
    value?: string;
    size?: RTSize;
    onChange?: (e: SyntheticEvent) => void;
    status?: RTSeverity;
    showCount?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: FC<RTTextareaProps> = ({
    className,
    style,
    placeholder,
    value,
    onChange,
    size = 'medium',
    status,
    showCount,
    ...nativeProps
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const computedClassNames = twMerge(styles.box.base, classNames({
        [styles.box[status]]: !nativeProps.disabled,
        [styles.box.focused]: state.focused,
        [styles.box[size]]: true,
        [styles.box.disabled]: nativeProps.disabled
    }), className);

    const setFocused = (focus: boolean) => dispatch(setFocusedAction(focus));
    const setValue = (value: string) => dispatch(setValueAction(value));

    const onValueChange: EventHandler<ChangeEvent<HTMLTextAreaElement>> = (e) => {
        if (onChange) onChange(e);
        if (value !== undefined) return;
        setValue(e.target.value);
    }

    useEffect(() => {
        if (value !== undefined) setValue(value);
    }, [value]);

    return (
        <div
            style={style}
            className={computedClassNames}
        >
            <textarea
                {...nativeProps}
                placeholder={placeholder}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={state.value}
                onChange={onValueChange}
                className={styles.input}
            ></textarea>
            {showCount
                ? <span className={styles.count}>{`${state.value.length} ${nativeProps.maxLength ? `/ ${nativeProps.maxLength}` : ''}`}</span>
                : null}
        </div>
    )
}

export default memo(Textarea);