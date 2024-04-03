'use client';
import Tooltip from '../Tooltip';
import classNames from 'classnames';
import {
    CSSProperties,
    FC,
    useEffect,
    useReducer,
    useRef,
    useState,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { initialState, reducer, setValuesAction } from './store';
import { styles } from './styles';

export type RTSliderProps = {
    style?: CSSProperties;
    className?: string;
    min?: number;
    max?: number;
    step?: number;
    range?: boolean;
    value?: number | [number, number];
    onChange?: { (value: number): void } | { (value: [number, number]): void };
    defaultValue?: RTSliderProps['value'];
    disabled?: boolean;
};

const Slider: FC<RTSliderProps> = ({
    style,
    className,
    step = 1,
    min = 0,
    max = 100,
    range,
    value,
    onChange,
    defaultValue,
    disabled,
}) => {
    const baseRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number>(null);
    const initialInfoRef = useRef<{
        offsetLeft: number;
        pageX: number;
        index: number;
        value: number;
    }>(null);

    const [state, dispatch] = useReducer(reducer, {
        values: [min, min],
    });
    const baseClassName = twMerge(
        styles.box.base,
        classNames({
            [styles.box.disabled]: disabled,
        }),
        className,
    );
    const trackClassName = twMerge(styles.track.base);
    const barClassName = (index: number) =>
        twMerge(
            styles.bar.base,
            classNames({
                [styles.bar.active]: activeIndex === index,
                [styles.bar.disabled]: disabled,
            }),
        );

    const numClassName = (index: number) => twMerge(styles.num.base);

    const progClassName = twMerge(
        styles.prog.base,
        classNames({
            [styles.prog.disabled]: disabled,
        }),
    );

    const getWidthPerStep = () => {
        const width = baseRef.current.offsetWidth;
        setWidth(width / (max - min) / step);
    };

    useEffect(() => {
        getWidthPerStep();
        window.addEventListener('resize', getWidthPerStep);
        return () => window.removeEventListener('resize', getWidthPerStep);
    }, []);

    const setValues = (values: [number, number]) => {
        const actual: any = range ? values : values[1];
        if (onChange) onChange(actual);
        if (value !== undefined) return;
        dispatch(setValuesAction(values));
    };

    const getPosition = index => {
        const curValue = state.values[index];
        return (curValue - min) * width;
    };

    const onMouseMove = e => {
        const initialInfo = initialInfoRef.current;
        if (!initialInfo) return;
        const offset = e.pageX - initialInfo.pageX;
        const steps = Math.round(offset / width / step);
        if (initialInfo.value + steps > max) return;
        if (initialInfo.value + steps < min) return;
        if (initialInfo?.index === 1) {
            setValues([state.values[0], initialInfo.value + steps]);
        } else {
            setValues([initialInfo.value + steps, state.values[1]]);
        }
    };

    const onMouseUp = e => {
        setActiveIndex(null);
        initialInfoRef.current = null;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    useEffect(() => {
        if (value !== undefined) {
            const actual = typeof value === 'number' ? [min, value] : value;
            dispatch(setValuesAction(actual as [number, number]));
            return;
        }
        if (defaultValue !== undefined) {
            const actual =
                typeof defaultValue === 'number'
                    ? [min, defaultValue]
                    : defaultValue;
            dispatch(setValuesAction(actual as [number, number]));
        }
    }, [value]);

    return (
        <div style={style} className={baseClassName} ref={baseRef}>
            <div className={trackClassName}>
                <div
                    className={progClassName}
                    style={{
                        left: Math.min(getPosition(0), getPosition(1)),
                        width: Math.abs(getPosition(1) - getPosition(0)),
                    }}
                ></div>
            </div>
            {range ? (
                <Tooltip
                    title={state.values[0]}
                    placement='top'
                    open={activeIndex === 0}
                    arrow
                >
                    <div
                        className={barClassName(0)}
                        style={{ left: `${getPosition(0)}px` }}
                        onMouseDown={(e: any) => {
                            setActiveIndex(0);
                            initialInfoRef.current = {
                                index: 0,
                                pageX: e.pageX,
                                value: state.values[0],
                                offsetLeft: e.target.offsetLeft,
                            };
                            document.addEventListener('mousemove', onMouseMove);
                            document.addEventListener('mouseup', onMouseUp);
                        }}
                    ></div>
                </Tooltip>
            ) : null}
            <Tooltip
                title={state.values[1]}
                placement='top'
                open={activeIndex === 1}
                arrow
            >
                <div
                    className={barClassName(1)}
                    style={{ left: `${getPosition(1)}px` }}
                    onMouseDown={(e: any) => {
                        setActiveIndex(1);
                        initialInfoRef.current = {
                            index: 1,
                            pageX: e.pageX,
                            value: state.values[1],
                            offsetLeft: e.target.offsetLeft,
                        };
                        document.addEventListener('mousemove', onMouseMove);
                        document.addEventListener('mouseup', onMouseUp);
                    }}
                ></div>
            </Tooltip>
        </div>
    );
};

export default Slider;
