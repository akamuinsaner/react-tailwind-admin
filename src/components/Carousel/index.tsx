'use client';
import {
    Children,
    cloneElement,
    CSSProperties,
    FC,
    forwardRef,
    HTMLAttributes,
    LegacyRef,
    MouseEventHandler,
    ReactElement,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useReducer,
    useRef,
    useState,
    WheelEventHandler,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { setSizeAction, reducer, initialState, setActiveAction } from './store';
import { CarouselContext, RTCarouselContext } from './context';
import classNames from 'classnames';

export type RTCarouselDirection = 'horizontal' | 'vertical';

export type RTCarouselProps = {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
    direction?: RTCarouselDirection;
    autoPlay?: boolean;
    autoPlayAfterIntraction?: boolean;
    speed?: number;
    loop?: boolean;
    space?: number;
    mouseWheel?: boolean;
    slidesPerView?: number;
    centered?: boolean;
    onCarousel?: (active: number, children: any) => void;
} & HTMLAttributes<HTMLDivElement>;

const Carousel: FC<RTCarouselProps> = ({
    style,
    className,
    children,
    direction = 'horizontal',
    autoPlay,
    speed = 3000,
    loop = false,
    space = 0,
    mouseWheel = false,
    slidesPerView = 1,
    centered = false,
    onCarousel,
    ...nativeProps
}) => {
    const childrenRefs = useRef<HTMLElement[]>([]);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const autoPlayTimer = useRef<NodeJS.Timeout>(null);
    const initialTransform = useRef<number>(0);
    const initialPageXY = useRef<number>(0);
    const currentPageXY = useRef<number>(0);
    const [transformInfo, setTransformInfo] = useState({ x: 0, y: 0 });
    const [state, dispatch] = useReducer(reducer, initialState);
    const containerRef = useRef<HTMLDivElement>(null);
    const containerClasses = twMerge(styles.container, className);
    const { size, active } = state;
    const isHorizontal = useMemo(() => {
        return direction === 'horizontal';
    }, [direction]);
    const span = useMemo(() => {
        return (size - (slidesPerView - 1) * space) / slidesPerView + space;
    }, [isHorizontal, size, slidesPerView, space]);
    const finalChildren = useMemo(() => {
        let preChildren;
        if (Array.isArray(children)) preChildren = [...children];
        else preChildren = [children];
        if (loop) preChildren = [...preChildren, ...preChildren];
        const length = preChildren.length / 2;
        return Children.map(preChildren, (child: any, index) =>
            cloneElement(child, {
                index,
                actualIndex: index < length ? index : index - length,
            }),
        );
    }, [children, loop]);
    const wrapperClasses = twMerge(
        styles.wrapper.base,
        styles.wrapper[direction],
    );
    const contextValue: RTCarouselContext = {
        span,
        space,
        direction,
        childrenRefs,
    };
    const setSize = (span: number) => dispatch(setSizeAction(span));
    const setActive = (active: number) => dispatch(setActiveAction(active));

    const setAutoPlay = () => {
        autoPlayTimer.current = setInterval(() => {
            setIsTransitioning(true);
            if (active === finalChildren.length - 1) {
                setActive(0);
            } else {
                setActive(active + 1);
            }
        }, speed);
    };

    useEffect(() => {
        if (onCarousel) {
            onCarousel(active, childrenRefs.current);
        }
    }, [active]);

    useEffect(() => {
        const ti = { ...transformInfo };
        if (isHorizontal) {
            if (centered) {
                ti.x =
                    -active * span +
                    containerRef.current.offsetWidth / 2 -
                    (span - space) / 2;
            } else {
                ti.x = -active * span;
            }
        } else {
            if (centered) {
                ti.y =
                    -active * span +
                    containerRef.current.offsetHeight / 2 -
                    (span - space) / 2;
            } else {
                ti.y = -active * span;
            }
        }
        setTransformInfo(ti);
    }, [active, span]);

    const computeSize = useCallback(() => {
        let size = isHorizontal
            ? containerRef.current.offsetWidth
            : containerRef.current.offsetHeight;
        setSize(size);
    }, [isHorizontal]);

    useEffect(() => {
        computeSize();
        window.addEventListener('resize', computeSize);
        return () => window.removeEventListener('resize', computeSize);
    }, []);

    useEffect(() => {
        if (autoPlay) setAutoPlay();
        return () => clearInterval(autoPlayTimer.current);
    }, [autoPlay, active]);

    const onMouseMove = (e: MouseEvent) => {
        currentPageXY.current = isHorizontal ? e.pageX : e.pageY;
        const curActive = active;
        const pageXYDiff = currentPageXY.current - initialPageXY.current;
        if (curActive === 0 && pageXYDiff > 0) return;
        if (curActive === finalChildren.length - 1 && pageXYDiff < 0) return;
        setTransformInfo({
            x: isHorizontal
                ? initialTransform.current + pageXYDiff
                : transformInfo.x,
            y: isHorizontal
                ? transformInfo.y
                : initialTransform.current + pageXYDiff,
        });
    };

    const onMouseDown: MouseEventHandler<HTMLDivElement> = e => {
        initialPageXY.current = isHorizontal ? e.pageX : e.pageY;
        initialTransform.current = isHorizontal
            ? transformInfo.x
            : transformInfo.y;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseUp = e => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        currentPageXY.current = isHorizontal ? e.pageX : e.pageY;
        const curActive = active;
        const pageXYDiff = currentPageXY.current - initialPageXY.current;
        if (curActive === 0 && pageXYDiff > 0) return;
        if (curActive === finalChildren.length - 1 && pageXYDiff < 0) return;
        if (pageXYDiff === 0) return;
        console.log(pageXYDiff);
        setIsTransitioning(true);
        if (Math.abs(pageXYDiff) > span / 2) {
            setActive(
                pageXYDiff < 0
                    ? active + Math.ceil(Math.abs(pageXYDiff) / span)
                    : active - Math.ceil(Math.abs(pageXYDiff) / span),
            );
        } else {
            setTransformInfo({
                x: isHorizontal ? initialTransform.current : transformInfo.x,
                y: !isHorizontal ? initialTransform.current : transformInfo.y,
            });
        }
    };

    const onTransitionEnd = () => {
        setIsTransitioning(false);
        // scroll to last one
        if (loop && active === finalChildren.length - 1) {
            setActive(finalChildren.length / 2 - 1);
        }
        // scroll to first one
        if (loop && active === 0) {
            setActive(finalChildren.length / 2);
        }
    };

    const onMouseWheel: WheelEventHandler = e => {
        if (!mouseWheel) return;
        setIsTransitioning(true);
        if (e.deltaY > 0) {
            setActive(active + 1);
        } else {
            setActive(active - 1);
        }
    };

    return (
        <CarouselContext.Provider value={contextValue}>
            <div
                ref={containerRef}
                className={containerClasses}
                style={style}
                {...nativeProps}
            >
                <div
                    onMouseDown={onMouseDown}
                    className={wrapperClasses}
                    onTransitionEnd={onTransitionEnd}
                    onWheel={onMouseWheel}
                    style={{
                        transition: isTransitioning ? 'transform 0.3s' : null,
                        transform: `translate3d(
                            ${transformInfo.x}px,
                            ${transformInfo.y}px, 
                             0px
                        )`,
                    }}
                >
                    {finalChildren}
                </div>
            </div>
        </CarouselContext.Provider>
    );
};

export default Carousel;
