'use client';
import classNames from 'classnames';
import {
    Children,
    cloneElement,
    CSSProperties,
    FC,
    forwardRef,
    HTMLAttributes,
    LegacyRef,
    ReactElement,
    ReactNode,
    useEffect,
    useReducer,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { RTSegmentContext, SegmentContext } from './context';
import {
    reducer,
    initialState,
    setActiveAction,
    setAnchorAction,
} from './store';
import { RTSize } from '@/src/types/size';

export type RTSegmentProps = {
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
    value?: string | number;
    defaultValue?: string | number;
    onChange?: (value: string | number) => void;
    size?: RTSize;
    disabled?: boolean;
    block?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const Segment: FC<RTSegmentProps> = forwardRef(
    (
        {
            className,
            style,
            children,
            value,
            defaultValue,
            onChange,
            size = 'medium',
            disabled,
            block = false,
            ...nativeProps
        },
        ref: LegacyRef<HTMLDivElement>,
    ) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        const wrapperClassName = twMerge(
            styles.wrapper.base,
            styles.wrapper[size],
            classNames({
                [styles.wrapper.disabled]: disabled,
                [styles.wrapper.block]: block,
            }),
            className,
        );

        const setActive = (active: string | number) => {
            if (onChange) onChange(active);
            if (value !== undefined) return;
            dispatch(setActiveAction(active));
        };

        const setAnchor = (anchor: HTMLElement) =>
            dispatch(setAnchorAction(anchor));

        const contextValue: RTSegmentContext = {
            active: state.active,
            setActive,
            setAnchor,
            size,
            disabled,
        };

        useEffect(() => {
            if (value !== undefined) {
                dispatch(setActiveAction(value));
                return;
            }
            if (defaultValue !== undefined) {
                dispatch(setActiveAction(defaultValue));
            }
        }, [value]);

        useEffect(() => {
            if (value === undefined && defaultValue === undefined && children) {
                if (Array.isArray(children)) {
                    setActive(children[0].props.value);
                } else {
                    setActive((children as ReactElement).props.value);
                }
            }
        }, []);

        return (
            <SegmentContext.Provider value={contextValue}>
                <div
                    ref={ref}
                    {...nativeProps}
                    style={style}
                    className={wrapperClassName}
                >
                    <div
                        className={styles.focus.base}
                        style={{
                            left: state.anchor?.offsetLeft + 2,
                            width: state.anchor?.offsetWidth - 4,
                        }}
                    ></div>
                    {children}
                </div>
            </SegmentContext.Provider>
        );
    },
);

export default Segment;
