'use client';
import {
    Children,
    cloneElement,
    CSSProperties,
    FC,
    HTMLAttributes,
    MouseEventHandler,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useReducer,
    useRef,
    WheelEventHandler,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import {
    setSizeAction,
    reducer,
    initialState,
    setActiveAction,
    setTransitioningAction,
    setTransformAction,
    setReverseAction,
} from './store';
import { CarouselContext, RTCarouselContext } from './context';
import CarouselPagination from './CarouselPagination';
import CarouselNavigation from './CarouselNavigation';

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
    effect?: any;
    pagination?: boolean;
    navigation?: boolean;
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
    effect,
    pagination,
    navigation,
    ...nativeProps
}) => {
    const childrenRefs = useRef<HTMLElement[]>([]);
    const autoPlayTimer = useRef<NodeJS.Timeout>(null);
    const initialTransform = useRef<number>(0);
    const initialPageXY = useRef<number>(0);
    const currentPageXY = useRef<number>(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    const containerRef = useRef<HTMLDivElement>(null);
    const containerClasses = twMerge(styles.container, className);
    const { size, active, transitioning, transform, reverse } = state;

    const isHorizontal = useMemo(() => {
        return direction === 'horizontal';
    }, [direction]);

    const span = useMemo(() => {
        return (size - (slidesPerView - 1) * space) / slidesPerView + space;
    }, [isHorizontal, size, slidesPerView, space]);

    const count = useMemo(() => {
        if (Array.isArray(children)) return children.length;
        return 1;
    }, [children]);

    const finalChildren = useMemo(() => {
        let preChildren;
        if (Array.isArray(children)) preChildren = [...children];
        else preChildren = [children];
        preChildren = [...preChildren, ...preChildren, ...preChildren];
        return Children.map(preChildren, (child: any, index) =>
            cloneElement(child, {
                index: index - count,
            }),
        );
    }, [children, loop, count]);

    const actualActive = useMemo(() => {
        if (active < 0) {
            return active + count;
        }
        if (active >= count) {
            return active - count;
        } else {
            return active;
        }
    }, [active, count]);

    const setSize = (span: number) => dispatch(setSizeAction(span));
    const setActive = (active: number) => dispatch(setActiveAction(active));
    const setTransitioning = (transitioning: boolean) =>
        dispatch(setTransitioningAction(transitioning));
    const setTransform = (transform: { x: number; y: number }) =>
        dispatch(setTransformAction(transform));
    const setReverse = (reverse: boolean) =>
        dispatch(setReverseAction(reverse));

    const wrapperClasses = twMerge(
        styles.wrapper.base,
        styles.wrapper[direction],
    );
    const contextValue: RTCarouselContext = {
        span,
        space,
        count,
        active,
        setActive,
        setTransitioning,
        actualActive,
        direction,
        childrenRefs,
    };

    const setAutoPlay = () => {
        autoPlayTimer.current = setInterval(() => {
            setTransitioning(true);
            setReverse(false);
            if (active === count - 1) {
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
        const ti = { ...transform };
        if (isHorizontal) {
            if (centered) {
                ti.x = -(active + count) * span + size / 2 - (span - space) / 2;
            } else {
                ti.x = -(active + count) * span;
            }
        } else {
            if (centered) {
                ti.y = -(active + count) * span + size / 2 - (span - space) / 2;
            } else {
                ti.y = -(active + count) * span;
            }
        }
        setTransform(ti);
    }, [active, span, count]);

    const computeSize = useCallback(() => {
        let size = isHorizontal
            ? containerRef.current.offsetWidth
            : containerRef.current.offsetHeight;
        setSize(size);
    }, [isHorizontal]);

    const debounce = useCallback(cb => {
        let timer;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                cb();
            }, 300);
        };
    }, []);

    const denoucedCompoteSize = debounce(computeSize);

    useEffect(() => {
        computeSize();
        window.addEventListener('resize', denoucedCompoteSize);
        return () => window.removeEventListener('resize', denoucedCompoteSize);
    }, []);

    useEffect(() => {
        if (autoPlay) setAutoPlay();
        return () => clearInterval(autoPlayTimer.current);
    }, [autoPlay, active]);

    const checkIfDraggable = (diff: number) => {
        if (!diff) return;
        if (!loop) {
            if (active === 0 && diff > 0) return false;
            if (active === count - 1 && diff < 0) return false;
        }
        return true;
    };

    const onMouseMove = (e: MouseEvent) => {
        currentPageXY.current = isHorizontal ? e.pageX : e.pageY;
        const pageXYDiff = currentPageXY.current - initialPageXY.current;
        if (!checkIfDraggable(pageXYDiff)) return;
        setTransform({
            x: isHorizontal
                ? initialTransform.current + pageXYDiff
                : transform.x,
            y: isHorizontal
                ? transform.y
                : initialTransform.current + pageXYDiff,
        });
    };

    const onMouseDown: MouseEventHandler<HTMLDivElement> = e => {
        initialPageXY.current = isHorizontal ? e.pageX : e.pageY;
        initialTransform.current = isHorizontal ? transform.x : transform.y;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseUp = e => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        currentPageXY.current = isHorizontal ? e.pageX : e.pageY;
        const pageXYDiff = currentPageXY.current - initialPageXY.current;
        if (!checkIfDraggable(pageXYDiff)) return;
        setTransitioning(true);
        if (pageXYDiff > 0) setReverse(true);
        else setReverse(false);
        if (Math.abs(pageXYDiff) > span / 2) {
            const steps =
                pageXYDiff < 0
                    ? Math.ceil(Math.abs(pageXYDiff) / span)
                    : -Math.ceil(Math.abs(pageXYDiff) / span);
            setActive(active + steps);
        } else {
            setTransform({
                x: isHorizontal ? initialTransform.current : transform.x,
                y: !isHorizontal ? initialTransform.current : transform.y,
            });
        }
    };

    const onTransitionEnd = () => {
        setTransitioning(false);
        // scroll to last one
        if (loop && active >= count - 1 && !reverse) {
            setActive(active - count);
        }
        // scroll to first one
        if (loop && active <= 0 && reverse) {
            setActive(active + count);
        }
    };

    const onMouseWheel: WheelEventHandler = e => {
        if (!mouseWheel) return;
        setTransitioning(true);
        if (e.deltaY > 0) {
            setReverse(true);
            setActive(active + 1);
        } else {
            setReverse(false);
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
                        transition: transitioning ? 'transform 0.3s' : null,
                        transform: `translate3d(
                            ${transform.x}px,
                            ${transform.y}px, 
                             0px
                        )`,
                    }}
                >
                    {finalChildren}
                </div>
                {pagination ? (
                    <CarouselPagination
                        onPagination={(active: number) => {
                            setTransitioning(true);
                            setActive(active);
                        }}
                    />
                ) : null}
                {navigation ? (
                    <CarouselNavigation
                        onNavigation={(active: number) => {
                            setTransitioning(true);
                            setActive(active);
                        }}
                    />
                ) : null}
            </div>
        </CarouselContext.Provider>
    );
};

export default Carousel;
