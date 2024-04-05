'use client';
import {
    reducer,
    initialState,
    setFocusedAction,
    setValueAction,
} from './store';
import {
    useReducer,
    CSSProperties,
    FC,
    ReactNode,
    memo,
    SyntheticEvent,
    useEffect,
    ChangeEvent,
    EventHandler,
    InputHTMLAttributes,
    HTMLAttributes,
    forwardRef,
    ReactElement,
} from 'react';
import classNames from 'classnames';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';
import { RTSize } from '@/src/types/size';
import { RTVariant } from '@/src/types/variant';
import { RTSeverity } from '@/src/types/severity';

export type RTInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'size'
> & {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    placeholder?: string;
    value?: string;
    size?: RTSize;
    prefix?: ReactNode;
    suffix?: ReactNode;
    addOnBefore?: ReactNode;
    addOnAfter?: ReactNode;
    onChange?: (e: SyntheticEvent) => void;
    variant?: RTVariant;
    status?: RTSeverity;
    showCount?: boolean;
    disabled?: boolean;
    maxLength?: number;
};

const Input = forwardRef<HTMLDivElement, RTInputProps>(
    (
        {
            className,
            style,
            placeholder,
            value,
            onChange,
            size = 'medium',
            prefix,
            suffix,
            addOnBefore,
            addOnAfter,
            variant = 'outlined',
            status,
            showCount,
            disabled,
            maxLength,
            ...nativeProps
        },
        ref,
    ) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        const computedClassNames = twMerge(
            styles.box.base,
            classNames({
                [styles.box[variant]]: true,
                [styles.box.underlinedFocus]:
                    variant === 'underlined' && state.focused,
                [styles.box[status]]: !disabled,
                [styles.box.focused]: state.focused,
                [styles.box[size]]: true,
                [styles.box.disabled]: disabled,
            }),
            className,
        );
        const prefixClassNames = twMerge(
            styles.prefix.base,
            classNames({
                [styles.prefix[status]]: true,
            }),
        );

        const suffixClassNames = twMerge(
            styles.suffix.base,
            classNames({
                [styles.suffix[status]]: true,
            }),
        );

        const setFocused = (focus: boolean) =>
            dispatch(setFocusedAction(focus));
        const setValue = (value: string) => dispatch(setValueAction(value));

        const onValueChange: EventHandler<
            ChangeEvent<HTMLInputElement>
        > = e => {
            if (onChange) onChange(e);
            if (value !== undefined) return;
            setValue(e.target.value);
        };

        useEffect(() => {
            if (value !== undefined) setValue(value);
        }, [value]);

        return (
            <div ref={ref} style={style} className={computedClassNames}>
                {addOnBefore ? (
                    <span className={styles.addOnBefore}>{addOnBefore}</span>
                ) : null}
                <div className={styles.wrapper}>
                    {prefix ? (
                        <span className={prefixClassNames}>{prefix}</span>
                    ) : null}
                    <div className={styles.inner}>
                        <input
                            {...nativeProps}
                            placeholder={placeholder}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            value={state.value}
                            onChange={onValueChange}
                            className={styles.input}
                            disabled={disabled}
                        />
                        {showCount ? (
                            <span
                                className={styles.count}
                            >{`${state.value.length} ${maxLength ? `/ ${maxLength}` : ''}`}</span>
                        ) : null}
                    </div>
                    {suffix ? (
                        <span className={suffixClassNames}>{suffix}</span>
                    ) : null}
                </div>

                {addOnAfter ? (
                    <span className={styles.addOnAfter}>{addOnAfter}</span>
                ) : null}
            </div>
        );
    },
);

export default memo(Input);
