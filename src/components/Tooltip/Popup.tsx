'use client';
import {
    CSSProperties,
    FC,
    MutableRefObject,
    ReactNode,
    SyntheticEvent,
    useCallback,
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
    // const [popupStyle, setPopupStyle] = useState<CSSProperties>({});
    const [insetData, setInsetData] = useState<{
        top: number | 'auto';
        right: number | 'auto';
        bottom: number | 'auto';
        left: number | 'auto';
    }>(null);

    const insetStyle = useMemo(() => {
        if (!insetData) return '';
        return `
        ${insetData.top === 'auto' ? 'auto' : `${insetData.top}px`}
        ${insetData.right === 'auto' ? 'auto' : `${insetData.right}px`}
        ${insetData.bottom === 'auto' ? 'auto' : `${insetData.bottom}px`}
        ${insetData.left === 'auto' ? 'auto' : `${insetData.left}px`}
        `;
    }, [insetData]);

    const baseClassName = useMemo(() => {
        return twMerge(
            `transition-all opacity-0
            overflow-hidden absolute z-50 shadow-[0_0_10px_rgba(0,0,0,0.3)]`,
            classNames({
                'origin-top scale-y-0': placement.includes('bottom'),
                'origin-bottom scale-y-0': placement.includes('top'),
                'origin-left scale-x-0': placement.includes('right'),
                'origin-right scale-x-0': placement.includes('left'),
            }),
            className,
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

    const close = useCallback(onClose, []);

    const onTransitionEnd = (e: SyntheticEvent) => {
        if (!!wrapper) {
            document.addEventListener('click', close);
        } else {
            setTempWrapper(null);
        }
    };

    const resetClassName = () => {
        setBoxClassName(baseClassName);
        document.removeEventListener('click', close);
    };

    useEffect(() => {
        if (tempWrapper) {
            setBoxClassName(twMerge(boxClassName, showClassName));
        }
    }, [tempWrapper]);

    useEffect(() => {
        if (wrapper) setTempWrapper(wrapper);
        else resetClassName();
    }, [wrapper]);

    const computeStyle = () => {
        // setPopupStyle(computePlacementStyle(anchor, placement, popRef.current));
        setInsetData(getInsetData(anchor, placement, popRef.current));
    };

    useEffect(() => {
        computeStyle();
    }, [anchor?.offsetLeft, anchor?.offsetTop]);

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
            onMouseEnter={() => timerRef && clearTimeout(timerRef.current)}
            onMouseLeave={() => {
                if (trigger === 'hover' && wrapper) {
                    onClose();
                }
            }}
            style={{
                inset: insetStyle,
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
