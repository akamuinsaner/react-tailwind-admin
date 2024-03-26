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
    useEffect,
    useMemo,
    useReducer,
    useRef,
    useState,
    WheelEventHandler,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { setSpanAction, reducer, initialState, setActiveAction } from './store';
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
    const isX = direction === 'horizontal';
    const initialTransform = useRef<number>(0);
    const initialPageXY = useRef<number>(0);
    const currentPageXY = useRef<number>(0);
    const [transformInfo, setTransformInfo] = useState({ x: 0, y: 0 });
    const [state, dispatch] = useReducer(reducer, initialState);
    const containerRef = useRef<HTMLDivElement>(null);
    const containerClasses = twMerge(styles.container, className);
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
        span: state.span,
        space,
        direction,
        childrenRefs,
    };
    const setSpan = (span: number) => dispatch(setSpanAction(span));
    const setActive = (active: number) => dispatch(setActiveAction(active));

    const setAutoPlay = () => {
        autoPlayTimer.current = setInterval(() => {
            setIsTransitioning(true);
            if (state.active === finalChildren.length - 1) {
                setActive(0);
            } else {
                setActive(state.active + 1);
            }
        }, speed);
    };

    useEffect(() => {
        if (onCarousel) {
            onCarousel(state.active, childrenRefs.current);
        }
    }, [state.active]);

    useEffect(() => {
        const ti = { ...transformInfo };
        if (isX) {
            if (centered) {
                ti.x =
                    -state.active * state.span +
                    containerRef.current.offsetWidth / 2 -
                    (state.span - space) / 2;
            } else {
                ti.x = -state.active * state.span;
            }
        } else {
            if (centered) {
                ti.y =
                    -state.active * state.span +
                    containerRef.current.offsetHeight / 2 -
                    (state.span - space) / 2;
            } else {
                ti.y = -state.active * state.span;
            }
        }
        setTransformInfo(ti);
    }, [state.active, state.span]);

    useEffect(() => {
        let span = isX
            ? containerRef.current.offsetWidth
            : containerRef.current.offsetHeight;
        span = (span - (slidesPerView - 1) * space) / slidesPerView + space;
        setSpan(span);
    }, []);

    useEffect(() => {
        if (autoPlay) setAutoPlay();
        return () => clearInterval(autoPlayTimer.current);
    }, [autoPlay, state.active]);

    const onMouseMove = (e: MouseEvent) => {
        currentPageXY.current = isX ? e.pageX : e.pageY;
        const curActive = state.active;
        const pageXYDiff = currentPageXY.current - initialPageXY.current;
        if (curActive === 0 && pageXYDiff > 0) return;
        if (curActive === finalChildren.length - 1 && pageXYDiff < 0) return;
        setTransformInfo({
            x: isX ? initialTransform.current + pageXYDiff : transformInfo.x,
            y: isX ? transformInfo.y : initialTransform.current + pageXYDiff,
        });
    };

    const onMouseDown: MouseEventHandler<HTMLDivElement> = e => {
        initialPageXY.current = isX ? e.pageX : e.pageY;
        initialTransform.current = isX ? transformInfo.x : transformInfo.y;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseUp = e => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        currentPageXY.current = isX ? e.pageX : e.pageY;
        const curActive = state.active;
        const pageXYDiff = currentPageXY.current - initialPageXY.current;
        if (curActive === 0 && pageXYDiff > 0) return;
        if (curActive === finalChildren.length - 1 && pageXYDiff < 0) return;
        if (pageXYDiff === 0) return;
        console.log(pageXYDiff);
        setIsTransitioning(true);
        if (Math.abs(pageXYDiff) > state.span / 2) {
            setActive(
                pageXYDiff < 0
                    ? state.active +
                          Math.ceil(Math.abs(pageXYDiff) / state.span)
                    : state.active -
                          Math.ceil(Math.abs(pageXYDiff) / state.span),
            );
        } else {
            setTransformInfo({
                x: isX ? initialTransform.current : transformInfo.x,
                y: !isX ? initialTransform.current : transformInfo.y,
            });
        }
    };

    const onTransitionEnd = () => {
        setIsTransitioning(false);
        // scroll to last one
        if (loop && state.active === finalChildren.length - 1) {
            setActive(finalChildren.length / 2 - 1);
        }
        // scroll to first one
        if (loop && state.active === 0) {
            setActive(finalChildren.length / 2);
        }
    };

    const onMouseWheel: WheelEventHandler = e => {
        if (!mouseWheel) return;
        setIsTransitioning(true);
        if (e.deltaY > 0) {
            setActive(state.active + 1);
        } else {
            setActive(state.active - 1);
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
