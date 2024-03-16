'use client'
import { reducer, initialState, setRangeValueAction } from './store';
import {
    useReducer, CSSProperties, FC, memo,
    useEffect, useRef, useMemo, useCallback
} from 'react';
import classNames from 'classnames';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';
import { RTSize } from '@/src/types/size';
import { RTVariant } from '@/src/types/variant';
import { RTSeverity } from '@/src/types/severity';
import { v4 as uuidV4 } from 'uuid';
import { CalendarIcon, MinusIcon } from '@heroicons/react/24/outline';
import { XCircleIcon } from '@heroicons/react/24/solid';
import {
    setAnchorAction,
    setSearchAction,
    setHoverAction,
    setWrapperAction,
} from './store';
import { createWrapperAndAppendToBody } from '../Modal/utils';
import { DateRangePickerContext, RTDateRangePickerContext } from './context';
import DatePickerBox from './DatePickerBox';
import DatePickerPanel from './DatePickerPanel';
import dayjs, { Dayjs } from 'dayjs';
import DateRangePickerPanel from './DateRangePickerPanel';

export type RTDateRangePickerProps = {
    className?: string;
    style?: CSSProperties;
    placeholder?: [string, string];
    value?: [Dayjs, Dayjs];
    size?: RTSize;
    onChange?: (value: [Dayjs, Dayjs], valueStr: [string, string]) => void;
    variant?: RTVariant;
    status?: RTSeverity;
    disabled?: boolean
    defaultValue?: [Dayjs, Dayjs];
    search?: boolean;
    onSearch?: (search: string) => void;
    format?: string;
    mask?: string;
    minDate?: Dayjs;
    maxDate?: Dayjs;
};

const DateRangePicker: FC<RTDateRangePickerProps> = ({
    className,
    style,
    placeholder,
    value,
    onChange,
    size = 'medium',
    variant = 'outlined',
    status,
    defaultValue,
    search,
    disabled,
    onSearch,
    format = 'YYYY-MM-DD',
    mask = '',
    minDate,
    maxDate
}) => {
    const wrapperIdRef = useRef(uuidV4());
    const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
    const anchorRef = useRef<HTMLDivElement>(null);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { wrapper, anchor, searchValue, hover } = state;

    const showHolder = useCallback((index) => {
        if (wrapper && state.rangeValue?.[index]) return state.rangeValue?.[index].format(format);
        return placeholder?.[index];
    }, [wrapper, state.rangeValue, placeholder]);

    const displayIcon = useMemo(() => {
        if (hover && (state.rangeValue?.[0] || state.rangeValue?.[1]) && !disabled) return (
            <XCircleIcon onClick={() => {
                setValue([null, null]);
                if (onChange) onChange([null, null], ['', '']);
            }} />
        );
        return <CalendarIcon />
    }, [hover, state.rangeValue, disabled]);

    const display = useCallback((index) => {
        if (searchValue) return searchValue;
        if (wrapper) return '';
        if (!state.rangeValue?.[index]) return mask || '';
        return state.rangeValue?.[index].format(format)
    }, [searchValue, wrapper, state.rangeValue]);

    const computedClassNames = twMerge(styles.box.base, classNames({
        [styles.box[variant]]: true,
        [styles.box.underlinedFocus]: variant === 'underlined' && wrapper,
        [styles.box[status]]: !disabled,
        [styles.box.focused]: wrapper,
        [styles.box[size]]: true,
        [styles.box.disabled]: disabled
    }), className);

    const iconClassNames = twMerge(styles.icon.base, classNames({
        [styles.icon[size]]: true,
    }));

    const setHover = (hover: boolean) => dispatch(setHoverAction(hover));
    const setValue = (curValue: [Dayjs, Dayjs]) => {
        console.log(curValue)
        if (onChange) onChange(curValue, [
            curValue[0] ? curValue[0].format(format) : '',
            curValue[1] ? curValue[1].format(format) : ''
        ])
        if (!!value) return;
        dispatch(setRangeValueAction(curValue))
    };
    const setWrapper = () => {
        const wrapperId = wrapperIdRef.current;
        let element = document.getElementById(wrapperId) as HTMLDivElement;
        if (!element) element = createWrapperAndAppendToBody(wrapperId);
        dispatch(setWrapperAction(element))
    };
    const removeWrapper = () => dispatch(setWrapperAction(null));
    const setAnchor = (anchor: HTMLDivElement) => dispatch(setAnchorAction(anchor));
    const onInputChange = (e: any) => {
        dispatch(setSearchAction(e.currentTarget.value));
        if (onSearch) onSearch(e.currentTarget.value);
    }

    useEffect(() => {
        if (value !== undefined) dispatch(setRangeValueAction(value));
        if (defaultValue !== undefined) dispatch(setRangeValueAction(defaultValue));
    }, [value]);

    const contextValue: RTDateRangePickerContext = {
        onChange,
        value: state.rangeValue,
        anchor,
        wrapper,
        setWrapper,
        removeWrapper,
        setValue,
        size,
    }

    useEffect(() => {
        setAnchor(anchorRef.current);
    }, []);

    return (
        <DateRangePickerContext.Provider
            value={contextValue}
        >
            <div
                style={style}
                className={computedClassNames}
                ref={anchorRef}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={ev => {
                    ev.stopPropagation();
                    ev.preventDefault();
                    ev.nativeEvent.stopImmediatePropagation();
                }}
            >
                <div className={styles.wrapper}>
                    <input
                        ref={inputRefs[0]}
                        readOnly={!search}
                        placeholder={showHolder(0)}
                        onFocus={setWrapper}
                        // onBlur={removeWrapper}
                        value={display(0)}
                        className={styles.input}
                        disabled={disabled}
                        onChange={onInputChange}
                    />
                    <MinusIcon className={styles.range.connector} />
                    <input
                        ref={inputRefs[1]}
                        readOnly={!search}
                        placeholder={showHolder(1)}
                        onFocus={setWrapper}
                        // onBlur={removeWrapper}
                        value={display(1)}
                        className={styles.input}
                        disabled={disabled}
                        onChange={onInputChange}
                    />
                </div>
                <span className={iconClassNames}>{displayIcon}</span>
            </div>
            <DatePickerBox
                wrapper={wrapper}
                anchor={anchor}
                removeWrapper={removeWrapper}
            >
                <DateRangePickerPanel
                    value={state.rangeValue}
                    setValue={setValue}
                    minDate={minDate}
                    maxDate={maxDate}
                />
            </DatePickerBox>
        </DateRangePickerContext.Provider>

    )
}

export default memo(DateRangePicker);