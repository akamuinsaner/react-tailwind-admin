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
} from 'react';
import classNames from 'classnames';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';
import { RTSize } from '@/src/types/size';
import { RTVariant } from '@/src/types/variant';
import { RTSeverity } from '@/src/types/severity';
import { RTSelectContext, SelectContext } from './context';
import { v4 as uuidV4 } from 'uuid';
import { createWrapperAndAppendToBody } from '../Modal/utils';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { XCircleIcon } from '@heroicons/react/24/solid';
import Popup from '../Tooltip/Popup';
import SelectOption, { RTOptionProps } from './SelectOption';
import useTag from './useTag';
import useValue from './useValue';
import useInput from './useInput';
import useChildren from './useChildren';

export type RTSelectProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    placeholder?: string;
    value?: any;
    size?: RTSize;
    onChange?: (value: any) => void;
    variant?: RTVariant;
    status?: RTSeverity;
    disabled?: boolean;
    defaultValue?: any;
    search?: boolean;
    onSearch?: (search: string) => void;
    allowClear?: boolean;
    multiple?: boolean;
    tagLimit?: number;
};

type SelectFC = FC<RTSelectProps> & {
    Option: FC<RTOptionProps>;
};

const Select: SelectFC = ({
    className,
    style,
    placeholder,
    value: ctrlValue,
    onChange,
    size = 'medium',
    variant = 'outlined',
    status,
    children,
    defaultValue,
    search,
    disabled,
    onSearch,
    allowClear = true,
    multiple = false,
    tagLimit,
}) => {
    const wrapperIdRef = useRef(uuidV4());
    const anchorRef = useRef<HTMLDivElement>(null);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { wrapper, anchor, searchValue, hover, value } = state;

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
    const setValue = (curVal: string[]) => dispatch(setValueAction(curVal));
    const setWrapper = () => {
        const wrapperId = wrapperIdRef.current;
        let element = document.getElementById(wrapperId) as HTMLDivElement;
        if (!element) element = createWrapperAndAppendToBody(wrapperId);
        dispatch(setWrapperAction(element));
    };
    const removeWrapper = () => {
        dispatch(setWrapperAction(null));
    };
    const setAnchor = (anchor: HTMLDivElement) =>
        dispatch(setAnchorAction(anchor));
    const onInputChange = (e: any) => {
        dispatch(setSearchAction(e.currentTarget.value));
        if (onSearch) onSearch(e.currentTarget.value);
    };

    useEffect(() => {
        setAnchor(anchorRef.current);
    }, []);

    const { displayMap, displayChildren } = useChildren({
        children,
        searchValue,
    });

    const { onOptionSelect, valueOnChange } = useValue({
        multiple,
        value,
        setValue,
        ctrlValue,
        defaultValue,
        onChange,
    });

    const tags = useTag({
        value,
        tagLimit,
        size,
        valueOnChange,
        displayMap,
        multiple,
    });

    const { display, displayIcon, showHolder } = useInput({
        searchValue,
        wrapper,
        multiple,
        value,
        hover,
        disabled,
        allowClear,
        displayMap,
        valueOnChange,
        placeholder,
    });

    const contextValue: RTSelectContext = {
        value: state.value,
        anchor,
        wrapper,
        setWrapper,
        removeWrapper,
        onOptionSelect: onOptionSelect,
        size,
    };

    return (
        <SelectContext.Provider value={contextValue}>
            <div
                style={style}
                className={computedClassNames}
                ref={anchorRef}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={setWrapper}
            >
                {tags}
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
        </SelectContext.Provider>
    );
};

Select.Option = SelectOption;

export default Select;
