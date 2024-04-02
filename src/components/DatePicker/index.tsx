'use client';
import { reducer, initialState } from './store';
import {
    useReducer,
    CSSProperties,
    FC,
    memo,
    useEffect,
    useRef,
    useMemo,
} from 'react';
import classNames from 'classnames';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';
import { RTSize } from '@/src/types/size';
import { RTVariant } from '@/src/types/variant';
import { RTSeverity } from '@/src/types/severity';
import { v4 as uuidV4 } from 'uuid';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { XCircleIcon } from '@heroicons/react/24/solid';
import {
    setValueAction,
    setAnchorAction,
    setSearchAction,
    setHoverAction,
    setWrapperAction,
} from './store';
import { createWrapperAndAppendToBody } from '../Modal/utils';
import DatePickerPanel from './DatePickerPanel';
import { Dayjs } from 'dayjs';
import Popup from '../Tooltip/Popup';

export type RTDatePickerProps = {
    className?: string;
    style?: CSSProperties;
    placeholder?: string;
    value?: Dayjs;
    size?: RTSize;
    onChange?: (value: Dayjs, valueStr: string) => void;
    variant?: RTVariant;
    status?: RTSeverity;
    disabled?: boolean;
    defaultValue?: Dayjs;
    search?: boolean;
    onSearch?: (search: string) => void;
    format?: string;
    mask?: string;
    minDate?: Dayjs;
    maxDate?: Dayjs;
    standalone?: Boolean;
    allowClear?: boolean;
};

const DatePicker: FC<RTDatePickerProps> = ({
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
    maxDate,
    standalone = false,
    allowClear = true,
}) => {
    const wrapperIdRef = useRef(uuidV4());
    const anchorRef = useRef<HTMLDivElement>(null);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { wrapper, anchor, searchValue, hover } = state;

    const showHolder = useMemo(() => {
        if (wrapper && state.value) return state.value.format(format);
        return placeholder;
    }, [wrapper, state.value, placeholder]);

    const displayIcon = useMemo(() => {
        if (hover && state.value && !disabled && allowClear)
            return (
                <XCircleIcon
                    onClick={e => {
                        e.stopPropagation();
                        setValue(null);
                        if (onChange) onChange(null, '');
                    }}
                />
            );
        return <CalendarIcon />;
    }, [hover, state.value, disabled]);

    const display = useMemo(() => {
        if (searchValue) return searchValue;
        if (wrapper) return '';
        if (!state.value) return mask || '';
        return state.value.format(format);
    }, [searchValue, wrapper, state.value, mask]);

    const computedClassNames = twMerge(
        styles.box.base,
        classNames({
            [styles.box[variant]]: true,
            [styles.box.underlinedFocus]: variant === 'underlined' && wrapper,
            [styles.box[status]]: !disabled,
            [styles.box.focused]: wrapper,
            [styles.box[size]]: true,
            [styles.box.disabled]: disabled,
        }),
        className,
    );

    const iconClassNames = twMerge(
        styles.icon.base,
        classNames({
            [styles.icon[size]]: true,
        }),
    );

    const setHover = (hover: boolean) => dispatch(setHoverAction(hover));
    const setValue = (curValue: Dayjs) => {
        if (onChange) onChange(curValue, curValue?.format(format) || '');
        if (!!value) return;
        dispatch(setValueAction(curValue));
    };
    const setWrapper = () => {
        const wrapperId = wrapperIdRef.current;
        let element = document.getElementById(wrapperId) as HTMLDivElement;
        if (!element) element = createWrapperAndAppendToBody(wrapperId);
        dispatch(setWrapperAction(element));
    };
    const removeWrapper = () => dispatch(setWrapperAction(null));
    const setAnchor = (anchor: HTMLDivElement) =>
        dispatch(setAnchorAction(anchor));
    const onInputChange = (e: any) => {
        dispatch(setSearchAction(e.currentTarget.value));
        if (onSearch) onSearch(e.currentTarget.value);
    };

    useEffect(() => {
        if (value !== undefined) dispatch(setValueAction(value));
        if (defaultValue !== undefined) dispatch(setValueAction(defaultValue));
    }, [value, defaultValue]);

    useEffect(() => {
        setAnchor(anchorRef.current);
    }, []);

    if (standalone) {
        return (
            <DatePickerPanel
                value={state.value}
                setValue={setValue}
                minDate={minDate}
                maxDate={maxDate}
            />
        );
    }

    return (
        <>
            <div
                style={style}
                className={computedClassNames}
                ref={anchorRef}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={setWrapper}
            >
                <div className={styles.wrapper}>
                    <input
                        readOnly={!search}
                        placeholder={showHolder}
                        value={display}
                        className={styles.input}
                        disabled={disabled}
                        onChange={onInputChange}
                    />
                </div>
                <span className={iconClassNames}>{displayIcon}</span>
            </div>
            <Popup
                style={style}
                className={twMerge(styles.selectBox.base, className)}
                anchor={state.anchor}
                wrapper={state.wrapper}
                placement='bottom-start'
                visibleClassName={styles.selectBox.show}
                onClose={removeWrapper}
                arrow={false}
                timerRef={null}
                trigger='click'
            >
                <DatePickerPanel
                    value={state.value}
                    setValue={setValue}
                    minDate={minDate}
                    maxDate={maxDate}
                />
            </Popup>
        </>
    );
};

export default memo(DatePicker);
