'use client';
import {
    reducer,
    initialState,
    setValueAction,
    setWrapperAction,
    setAnchorAction,
    setSearchAction,
    setHoverAction,
} from './store';
import {
    useReducer,
    CSSProperties,
    FC,
    ReactNode,
    memo,
    useEffect,
    useRef,
    ReactElement,
    Children,
    useMemo,
    cloneElement,
    useState,
    SyntheticEvent,
    KeyboardEvent,
} from 'react';
import classNames from 'classnames';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';
import { RTSize } from '@/src/types/size';
import { RTVariant } from '@/src/types/variant';
import { RTSeverity } from '@/src/types/severity';
import { RTMultiSelectContext, MultiSelectContext } from './context';
import SelectBox from './SelectBox';
import { v4 as uuidV4 } from 'uuid';
import { createWrapperAndAppendToBody } from '../Modal/utils';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { XCircleIcon } from '@heroicons/react/24/solid';
import SelectTag from './SelectTag';
import Popup from '../Tooltip/Popup';
import SelectOption, { RTOptionProps } from './SelectOption';

export type RTSelectProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    placeholder?: string;
    value?: string[];
    size?: RTSize;
    onChange?: (e: string[]) => void;
    variant?: RTVariant;
    status?: RTSeverity;
    disabled?: boolean;
    defaultValue?: string[];
    search?: boolean;
    onSearch?: (search: string) => void;
    tagLimit?: number;
    allowClear?: boolean;
};

type MultiSelectFC = FC<RTSelectProps> & {
    Option: FC<RTOptionProps>;
};

const MultiSelect: MultiSelectFC = ({
    className,
    style,
    placeholder,
    value,
    onChange,
    size = 'medium',
    variant = 'outlined',
    status,
    children,
    defaultValue,
    search,
    disabled,
    onSearch,
    tagLimit = Infinity,
    allowClear = true,
}) => {
    const wrapperIdRef = useRef(uuidV4());
    const anchorRef = useRef<HTMLDivElement>(null);
    const tagWidthRef = useRef<number[]>([]);

    const displayMap = useMemo(() => {
        let preChildren = [];
        let result = new Map<string, string>();
        if (!Array.isArray(children)) preChildren = [children];
        else preChildren = children;
        Children.map(preChildren, (child: ReactElement) => {
            result.set(child.props.value, child.props.children);
        });
        return result;
    }, [children]);

    const [state, dispatch] = useReducer(reducer, initialState);
    const { wrapper, anchor, searchValue, hover } = state;

    const displayTags = useMemo(() => {
        const renderValues = state.value.slice(0, tagLimit);
        const restCount = state.value.length - tagLimit;
        return renderValues
            .map((v, i) => {
                const text = displayMap.get(v);
                const ondelete = () => {
                    if (disabled) return;
                    const values = state.value.filter(vl => vl !== v);
                    setValue(values);
                    if (onChange) onChange(values);
                };
                const onInit = (width: number) => {
                    tagWidthRef.current[i] = width;
                };
                return (
                    <SelectTag
                        key={v}
                        ondelete={ondelete}
                        text={text}
                        size={size}
                        onInit={onInit}
                    />
                );
            })
            .concat(
                restCount > 0
                    ? [
                          <SelectTag
                              key={uuidV4()}
                              size={size}
                              text={`+${restCount}...`}
                          />,
                      ]
                    : [],
            );
    }, [state.value, displayMap, disabled, onChange, size, tagLimit]);

    const displayChildren = useMemo(() => {
        let preChildren = [];
        if (!Array.isArray(children)) preChildren = [children];
        else preChildren = children;
        return Children.map(preChildren, (child: ReactElement) => {
            if (
                (child.props.children as string)
                    .toUpperCase()
                    .includes(searchValue.toUpperCase())
            ) {
                return cloneElement(child);
            }
            return null;
        });
    }, [searchValue]);

    const displayIcon = useMemo(() => {
        if (hover && state.value.length && !disabled && allowClear)
            return (
                <XCircleIcon
                    onClick={e => {
                        e.stopPropagation();
                        setValue([]);
                        if (onChange) onChange([]);
                    }}
                />
            );
        return <ChevronDownIcon />;
    }, [hover, state.value, disabled]);

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
    const setValue = (curVal: string[]) => {
        if (onChange) onChange(curVal);
        if (value !== undefined) return;
        dispatch(setValueAction(curVal));
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
    }, [value]);

    const contextValue: RTMultiSelectContext = {
        onChange,
        value: state.value,
        anchor,
        wrapper,
        setWrapper,
        removeWrapper,
        setValue,
        size,
    };

    useEffect(() => {
        setAnchor(anchorRef.current);
    }, []);

    const onKeyDown = (e: KeyboardEvent) => {
        const key = e.key;
        if ((key === 'Backspace' || key === 'Delete') && state.value.length) {
            const value = state.value.filter(
                (v, i) => i !== state.value.length - 1,
            );
            setValue(value);
            onChange && onChange(value);
        }
    };

    return (
        <MultiSelectContext.Provider value={contextValue}>
            <div
                style={style}
                className={computedClassNames}
                ref={anchorRef}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={setWrapper}
            >
                {state.value.length ? (
                    <div className={styles.tagBox}>{displayTags}</div>
                ) : null}
                <div className={styles.wrapper}>
                    <input
                        readOnly={!search}
                        placeholder={state.value.length ? '' : placeholder}
                        value={searchValue}
                        className={styles.input}
                        disabled={disabled}
                        onChange={onInputChange}
                        onKeyDown={onKeyDown}
                    />
                </div>
                <div className={iconClassNames}>{displayIcon}</div>
            </div>
            <Popup
                style={{ ...style, width: state.anchor?.offsetWidth }}
                className={twMerge(styles.selectBox.base, className)}
                anchor={state.anchor}
                wrapper={state.wrapper}
                placement='bottom'
                visibleClassName={styles.selectBox.show}
                onClose={removeWrapper}
                arrow={false}
                timerRef={null}
                trigger='click'
            >
                {displayChildren}
            </Popup>
        </MultiSelectContext.Provider>
    );
};

MultiSelect.Option = SelectOption;

export default MultiSelect;
