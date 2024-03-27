'use client';
import {
    cloneElement,
    CSSProperties,
    FC,
    Fragment,
    ReactElement,
    ReactNode,
    SyntheticEvent,
    useEffect,
    useMemo,
    useReducer,
    useRef,
} from 'react';
import { v4 as uuidV4 } from 'uuid';
import { createWrapperAndAppendToBody } from '../Modal/utils';
import {
    setAnchorAction,
    reducer,
    initialState,
    setWrapperAction,
} from './store';
import Popup from './Popup';
import { RTPlacement } from '@/src/types/placement';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';

export type RTTooltipTrigger = 'hover' | 'click' | 'contextMenu';

export type RTTooltipProps = {
    style?: CSSProperties;
    className?: string;
    children: ReactNode;
    title?: ReactNode;
    placement?: RTPlacement;
    trigger?: RTTooltipTrigger;
    arrow?: boolean;
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
};

const Tooltip: FC<RTTooltipProps> = ({
    style,
    className,
    children,
    title,
    placement = 'bottom',
    trigger = 'hover',
    arrow = false,
    defaultOpen,
    open,
    onOpenChange,
}) => {
    const leaveTimerRef = useRef<NodeJS.Timeout>(null);
    const wrapperIdRef = useRef(uuidV4());
    const anchorRef = useRef<HTMLElement>(null);
    const [state, dispatch] = useReducer(reducer, initialState);
    const setAnchor = (anchor: HTMLElement) =>
        dispatch(setAnchorAction(anchor));
    const setWrapper = (e?: SyntheticEvent) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
            e.nativeEvent.stopImmediatePropagation();
        }
        if (onOpenChange) onOpenChange(true);
        if (open !== undefined) return;
        const wrapperId = wrapperIdRef.current;
        let element = document.getElementById(wrapperId) as HTMLDivElement;
        if (!element) element = createWrapperAndAppendToBody(wrapperId);
        dispatch(setWrapperAction(element));
    };
    const removeWrapper = () => {
        if (onOpenChange) onOpenChange(false);
        if (open !== undefined) return;
        dispatch(setWrapperAction(null));
    };
    useEffect(() => {
        setAnchor(anchorRef.current);
    }, []);

    const childProps = useMemo(() => {
        let props = { ref: anchorRef };
        if (trigger === 'hover')
            props = Object.assign({}, props, {
                onMouseEnter: setWrapper,
                onClick: e => {
                    e.stopPropagation();
                    e.preventDefault();
                    e.nativeEvent.stopImmediatePropagation();
                },
                onMouseLeave: e => {
                    leaveTimerRef.current = setTimeout(() => {
                        removeWrapper();
                    }, 100);
                },
            });
        if (trigger === 'click') {
            props = Object.assign({}, props, {
                onClick: setWrapper,
            });
        }
        if (trigger === 'contextMenu') {
            props = Object.assign({}, props, {
                onContextMenu: setWrapper,
            });
        }
        return props;
    }, [trigger]);

    const child = useMemo(() => {
        if (Array.isArray(children)) {
            return cloneElement(children[0], childProps);
        } else {
            return cloneElement(children as ReactElement, childProps);
        }
    }, [children, childProps]);

    useEffect(() => {
        if (open !== undefined) {
            if (open) {
                const wrapperId = wrapperIdRef.current;
                let element = document.getElementById(
                    wrapperId,
                ) as HTMLDivElement;
                if (!element) element = createWrapperAndAppendToBody(wrapperId);
                dispatch(setWrapperAction(element));
            } else dispatch(setWrapperAction(null));
            return;
        }
        if (defaultOpen) setWrapper();
    }, [open]);

    return (
        <>
            {child}
            <Popup
                style={style}
                className={twMerge(styles.box.base, className)}
                anchor={state.anchor}
                wrapper={state.wrapper}
                placement={placement}
                visibleClassName={styles.box.show}
                onClose={removeWrapper}
                arrow={arrow}
                timerRef={leaveTimerRef}
                trigger={trigger}
            >
                {title}
            </Popup>
        </>
    );
};

export default Tooltip;
