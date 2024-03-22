'use client';
import {
    CSSProperties,
    FC,
    MutableRefObject,
    ReactNode,
    SyntheticEvent,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { createPortal } from 'react-dom';
import { RTPlacement } from '@/src/types/placement';
import {
    computeArrowStyle,
    computePlacementStyle,
    getInsetData,
} from './utils';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

type RTPopupProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    anchor: HTMLElement;
    placement?: RTPlacement;
    wrapper: HTMLElement;
    visibleClassName?: string;
    onClose: () => void;
    arrow?: boolean;
    timerRef?: MutableRefObject<NodeJS.Timeout>;
    trigger: 'hover' | 'click' | 'contextMenu';
};

const Popup: FC<RTPopupProps> = ({
    className,
    style,
    children,
    anchor,
    placement,
    wrapper,
    visibleClassName,
    onClose,
    arrow = true,
    timerRef,
    trigger,
}) => {
    const popRef = useRef<HTMLDivElement>(null);
    const [popupStyle, setPopupStyle] = useState<CSSProperties>({});
    // const [insetData, setInsetData] = useState<{
    //     top: number | 'auto';
    //     right: number | 'auto';
    //     bottom: number | 'auto';
    //     left: number | 'auto';
    // }>(null);

    const baseClassName = useMemo(() => {
        return twMerge(
            className,
            `transition-[transform, opacity] opacity-0 duration-75 
            ease-linear overflow-hidden absolute z-50 shadow-[0_0_60px_rgba(0,0,0,0.3)]`,
            classNames({
                'origin-top scale-y-0': placement.includes('bottom'),
                'origin-bottom scale-y-0': placement.includes('top'),
                'origin-left scale-x-0': placement.includes('right'),
                'origin-right scale-x-0': placement.includes('left'),
            }),
        );
    }, [className, placement]);
    const showClassName = useMemo(() => {
        return twMerge(
            visibleClassName,
            classNames({
                'scale-y-100 overflow-visible opacity-100':
                    placement.includes('bottom') || placement.includes('top'),
                'scale-x-100 overflow-visible opacity-100':
                    placement.includes('right') || placement.includes('left'),
            }),
        );
    }, [visibleClassName, placement]);
    const [tempWrapper, setTempWrapper] = useState<HTMLElement>(null);
    const [boxClassName, setBoxClassName] = useState<string>(baseClassName);
    const onTransitionEnd = (e: SyntheticEvent) => {
        if (!!wrapper) {
        } else {
            setTempWrapper(null);
        }
    };

    const resetClassName = () => {
        setBoxClassName(baseClassName);
        document.removeEventListener('click', onClose);
    };

    useEffect(() => {
        if (tempWrapper) {
            setBoxClassName(twMerge(boxClassName, showClassName));
            document.addEventListener('click', onClose);
        }
    }, [tempWrapper]);

    useEffect(() => {
        if (wrapper) setTempWrapper(wrapper);
        else resetClassName();
    }, [wrapper]);

    const computeStyle = () => {
        setPopupStyle(computePlacementStyle(anchor, placement, popRef.current));
        // setInsetData(getInsetData(anchor, placement, popRef.current));
    };

    useEffect(() => {
        computeStyle();
        window.addEventListener('resize', computeStyle);
        window.addEventListener('scroll', computeStyle);
        return () => {
            window.removeEventListener('resize', computeStyle);
            window.removeEventListener('scroll', computeStyle);
        };
    }, [tempWrapper]);

    if (!tempWrapper) return null;
    return createPortal(
        <div
            ref={popRef}
            className={boxClassName}
            onTransitionEnd={onTransitionEnd}
            onMouseEnter={() => clearTimeout(timerRef.current)}
            onMouseLeave={() => {
                if (trigger === 'hover' && wrapper) {
                    onClose();
                }
            }}
            style={{
                ...popupStyle,
                ...style,
            }}
        >
            <div
                className={`h-3 w-3 absolute bg-inherit`}
                style={computeArrowStyle(anchor, placement, arrow)}
            ></div>
            {children}
        </div>,
        tempWrapper,
    );
};

export default Popup;