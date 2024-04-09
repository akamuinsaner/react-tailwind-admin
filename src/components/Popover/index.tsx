'use client';
import {
    cloneElement,
    FC,
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
import Popup from '../Tooltip/Popup';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';
import { RTTooltipProps } from '../Tooltip';

export type RTPopoverProps = {
    title?: ReactNode;
    content?: ReactNode;
} & RTTooltipProps;

const Popover: FC<RTPopoverProps> = ({
    style,
    className,
    children,
    title,
    placement = 'bottom-start',
    trigger = 'hover',
    arrow = false,
    defaultOpen,
    open,
    onOpenChange,
    content,
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

    const childProps = (ps: any) => {
        let props = { ref: anchorRef };
        if (trigger === 'hover')
            props = Object.assign({}, props, {
                onMouseEnter: e => {
                    setWrapper();
                    ps.onMouseEnter && ps.onMouseEnter(e);
                },
                onClick: e => {
                    e.stopPropagation();
                    e.preventDefault();
                    e.nativeEvent.stopImmediatePropagation();
                    ps.onClick && ps.onClick(e);
                },
                onMouseLeave: e => {
                    ps.onMouseLeave && ps.onMouseLeave(e);
                    leaveTimerRef.current = setTimeout(() => {
                        removeWrapper();
                    }, 100);
                },
            });
        if (trigger === 'click') {
            props = Object.assign({}, props, {
                onClick: e => {
                    setWrapper();
                    ps.onClick && ps.onClick(e);
                },
            });
        }
        if (trigger === 'contextMenu') {
            props = Object.assign({}, props, {
                onContextMenu: setWrapper,
            });
        }
        return props;
    };

    const child = useMemo(() => {
        if (Array.isArray(children)) {
            const child = children[0] as ReactElement;
            return cloneElement(child, childProps(child.props));
        } else {
            const child = children as ReactElement;
            return cloneElement(child, childProps(child.props));
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
                {title ? <div className={styles.box.title}>{title}</div> : null}
                {content ? (
                    <div className={styles.box.content}>{content}</div>
                ) : null}
            </Popup>
        </>
    );
};

export default Popover;
