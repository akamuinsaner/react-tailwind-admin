import classNames from 'classnames';
import React, {
    CSSProperties,
    FC,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type RTScrollBarProps = {
    className?: string;
    style?: CSSProperties;
    direction?: 'horizontal' | 'vertical';
    scrollEle?: HTMLElement;
};

const ScrollBar: FC<RTScrollBarProps> = ({
    className,
    style,
    direction = 'vertical',
    scrollEle,
}) => {
    if (!scrollEle) return;
    const startPosRef = useRef<number>(null);
    const hoverTimer = useRef<NodeJS.Timeout>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [isOver, setIsOver] = useState<boolean>(false);
    const [thumbStyle, setThumbStyle] = useState<CSSProperties>({});
    const rect = useMemo(() => {
        return scrollEle.getBoundingClientRect();
    }, [
        scrollEle,
        scrollEle.offsetHeight,
        scrollEle.offsetWidth,
        scrollEle.scrollHeight,
        scrollEle.scrollWidth,
    ]);
    const actualSize = useMemo(() => {
        return direction === 'vertical'
            ? scrollEle.offsetHeight
            : scrollEle.offsetWidth;
    }, [scrollEle.offsetHeight, scrollEle.offsetWidth, direction]);

    const totalSize = useMemo(() => {
        return direction === 'vertical'
            ? scrollEle.scrollHeight
            : scrollEle.scrollWidth;
    }, [scrollEle.scrollHeight, scrollEle.scrollWidth, direction]);

    const offsetSize = useMemo(() => {
        return direction === 'vertical'
            ? scrollEle.scrollTop
            : scrollEle.scrollLeft;
    }, [scrollEle.scrollTop, scrollEle.scrollLeft, direction]);

    const isScroll = useMemo(() => {
        return totalSize > actualSize;
    }, [totalSize, actualSize]);

    const barClassName = twMerge(
        styles.bar.base,
        classNames({
            [styles.bar.horizontal]: direction === 'horizontal',
            [styles.bar.vertical]: direction === 'vertical',
            [styles.bar.active]: (isOver || isDragging) && isScroll,
        }),
        className,
    );
    const trackClassName = twMerge(styles.track.base);
    const thumbClassName = twMerge(
        styles.thumb.base,
        classNames({
            [styles.thumb.horizontal]: direction === 'horizontal',
            [styles.thumb.vertical]: direction === 'vertical',
            [styles.thumb.dragging]: isDragging,
        }),
    );
    const onMouseEnter = useCallback(e => {
        setTimeout(() => {
            clearTimeout(hoverTimer.current);
            setIsOver(true);
        }, 50);
    }, []);

    const onMouseLeave = useCallback(e => {
        hoverTimer.current = setTimeout(() => {
            setIsOver(false);
        }, 100);
    }, []);

    const onMouseMove = useCallback(
        (e: MouseEvent) => {
            let currentPos = direction === 'horizontal' ? e.clientX : e.clientY;
            const diff = currentPos - startPosRef.current;
            const distance = (diff / actualSize) * totalSize;
            scrollEle.scroll({
                top:
                    direction === 'vertical'
                        ? scrollEle.scrollTop + distance
                        : scrollEle.scrollTop,
                left:
                    direction === 'horizontal'
                        ? scrollEle.scrollLeft + distance
                        : scrollEle.scrollLeft,
            });
            startPosRef.current =
                direction === 'horizontal' ? e.clientX : e.clientY;
        },
        [direction, actualSize, totalSize, offsetSize],
    );

    const onMouseDown = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            setIsDragging(true);
            startPosRef.current =
                direction === 'horizontal' ? e.clientX : e.clientY;
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        },
        [direction, actualSize, totalSize, offsetSize],
    );

    const onMouseUp = useCallback(() => {
        setIsDragging(false);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }, [direction, actualSize, totalSize, offsetSize]);

    const onScroll = useCallback(() => {
        const offsetSize =
            direction === 'vertical'
                ? scrollEle.scrollTop
                : scrollEle.scrollLeft;
        const thumbSize = (actualSize / totalSize) * actualSize;
        const thumbOffset = (offsetSize / totalSize) * actualSize;
        if (direction === 'vertical') {
            setThumbStyle({
                height: `${thumbSize}px`,
                transform: `translate3D(0, ${thumbOffset}px, 0)`,
            });
        } else {
            setThumbStyle({
                width: `${thumbSize}px`,
                transform: `translate3D(${thumbOffset}px, 0, 0)`,
            });
        }
    }, [direction, actualSize, totalSize, offsetSize]);

    const onTrackClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const thumbRect = thumbRef.current.getBoundingClientRect();
            const diff =
                direction === 'vertical'
                    ? e.clientY - thumbRect.top - thumbRect.height / 2
                    : e.clientX - thumbRect.left - thumbRect.width / 2;
            const distance = (diff / actualSize) * totalSize;
            scrollEle.scroll({
                top:
                    direction === 'vertical'
                        ? scrollEle.scrollTop + distance
                        : scrollEle.scrollTop,
                left:
                    direction === 'horizontal'
                        ? scrollEle.scrollLeft + distance
                        : scrollEle.scrollLeft,
            });
        },
        [direction, actualSize, totalSize],
    );

    const getListenElement = () => {
        if (scrollEle === document.documentElement) {
            return window;
        }
        return scrollEle;
    };

    useEffect(() => {
        onScroll();
        let listenEle = getListenElement();
        listenEle.addEventListener('scroll', onScroll);
        scrollEle.addEventListener('mouseenter', onMouseEnter);
        scrollEle.addEventListener('mouseleave', onMouseLeave);
        return () => {
            listenEle.removeEventListener('scroll', onScroll);
            scrollEle.removeEventListener('mouseenter', onMouseEnter);
            scrollEle.removeEventListener('mouseleave', onMouseLeave);
        };
    }, [scrollEle, actualSize, totalSize]);

    return (
        <div
            ref={barRef}
            className={barClassName}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={style}
        >
            <div className={trackClassName} onClick={onTrackClick}></div>
            <div
                className={thumbClassName}
                style={thumbStyle}
                onMouseDown={onMouseDown}
                ref={thumbRef}
            ></div>
        </div>
    );
};

export default ScrollBar;
