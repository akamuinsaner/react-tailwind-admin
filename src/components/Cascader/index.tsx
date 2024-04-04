import { RTSeverity } from '@/src/types/severity';
import { RTSize } from '@/src/types/size';
import { RTVariant } from '@/src/types/variant';
import classNames from 'classnames';
import {
    CSSProperties,
    FC,
    forwardRef,
    ReactNode,
    useEffect,
    useMemo,
    useReducer,
    useRef,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidV4 } from 'uuid';
import { styles } from './styles';
import {
    reducer,
    initialState,
    setHoverAction,
    setWrapperAction,
    setAnchorAction,
    setSearchAction,
    setValueAction,
    setOpenKeysAction,
    setLoadingIdAction,
} from './store';
import { createWrapperAndAppendToBody } from '../Modal/utils';
import { getTreeDataFormatted } from './utils';
import DropBox from './DropBox';
import Options from './Options';
import useTag from './useTag';
import useValue from './useValue';
import useInput from './useInput';
import useSearch from './useSearch';

export type RTCascaderPlacement =
    | 'top'
    | 'bottom'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end';

export type RTCascaderOption = {
    id: number | string;
    name: ReactNode | string | number;
    parentId?: number | string;
    children?: RTCascaderOption[];
};

export type RTCascaderProps = {
    options: RTCascaderOption[];
    style?: CSSProperties;
    className?: string;
    size?: RTSize;
    variant?: RTVariant;
    status?: RTSeverity;
    disabled?: boolean;
    search?: boolean;
    placeholder?: string;
    onSearch?: (search: string) => void;
    onChange?: (value: any) => void;
    allowClear?: boolean;
    placement?: RTCascaderPlacement;
    popperClassName?: string;
    popperStyle?: CSSProperties;
    loadData?: (option: RTCascaderOption) => any;
    multiple?: boolean;
    checkable?: boolean;
    value?: any;
    defaultValue?: any;
    tagLimit?: number;
    checkWithRelation?: boolean;
};

const Cascader: FC<RTCascaderProps> = ({
    options,
    style,
    className,
    size = 'medium',
    variant = 'outlined',
    status,
    disabled,
    search,
    placeholder,
    onSearch,
    onChange,
    allowClear = true,
    placement = 'bottom-start',
    popperClassName,
    popperStyle,
    loadData,
    multiple = false,
    checkable = false,
    value: ctrlValue,
    defaultValue,
    tagLimit = Infinity,
    checkWithRelation,
}) => {
    const wrapperIdRef = useRef(uuidV4());
    const anchorRef = useRef<HTMLDivElement>(null);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { wrapper, searchValue, value, hover, anchor, openKeys, loadingId } =
        state;

    const dataSet = useMemo(() => {
        return getTreeDataFormatted(options);
    }, [options]);

    const {
        idChildrenMap,
        flattedData,
        idTreeNodeMap,
        idChildrenIdMap,
        parentChainMap,
    } = dataSet;

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

    const setLoadingId = (loadingId: number | string) =>
        dispatch(setLoadingIdAction(loadingId));
    const setHover = (hover: boolean) => dispatch(setHoverAction(hover));
    const setOpenKeys = (openKeys: any[]) =>
        dispatch(setOpenKeysAction(openKeys));
    const setWrapper = () => {
        const wrapperId = wrapperIdRef.current;
        let element = document.getElementById(wrapperId) as HTMLDivElement;
        if (!element) element = createWrapperAndAppendToBody(wrapperId);
        dispatch(setWrapperAction(element));
    };
    const removeWrapper = () => {
        dispatch(setWrapperAction(null));
    };
    const setValue = (curVal: (string | number)[]) => {
        dispatch(setValueAction(curVal));
    };
    const setAnchor = (anchor: HTMLDivElement) =>
        dispatch(setAnchorAction(anchor));

    const setSearchValue = (searchValue: string) => {
        dispatch(setSearchAction(searchValue));
    };

    useEffect(() => {
        setAnchor(anchorRef.current);
    }, []);

    const { onOptionSelect, toggleCheck, valueOnChange } =
        useValue<RTCascaderOption>({
            multiple,
            value,
            setValue,
            ctrlValue,
            defaultValue,
            checkWithRelation,
            idChildrenIdMap,
            parentChainMap,
            onChange,
        });

    const tags = useTag<RTCascaderOption>({
        value,
        tagLimit,
        size,
        valueOnChange,
        idTreeNodeMap,
        multiple,
    });

    const { display, displayIcon, showHolder } = useInput<RTCascaderOption>({
        searchValue,
        wrapper,
        multiple,
        value,
        hover,
        disabled,
        allowClear,
        idTreeNodeMap,
        valueOnChange,
        placeholder,
    });

    const { onInputChange, searchData, noData } = useSearch<RTCascaderOption>({
        searchValue,
        onSearch,
        flattedData,
        idChildrenMap,
        setSearchValue,
        setOpenKeys,
    });

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
            <DropBox
                noData={noData}
                placement={placement}
                anchor={anchor}
                wrapper={wrapper}
                removeWrapper={removeWrapper}
            >
                <Options
                    style={popperStyle}
                    className={popperClassName}
                    openKeys={openKeys}
                    searchValue={searchValue}
                    searchData={searchData}
                    value={value}
                    size={size}
                    loadingId={loadingId}
                    loadData={loadData}
                    setOpenKeys={setOpenKeys}
                    setLoadingId={setLoadingId}
                    showCheck={multiple && checkable}
                    multiple={multiple}
                    onSelect={onOptionSelect}
                    toggleCheck={toggleCheck}
                    checkWithRelation={checkWithRelation}
                    idChildrenIdMap={idChildrenIdMap}
                />
            </DropBox>
        </>
    );
};

export default Cascader;
