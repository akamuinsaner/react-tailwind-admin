'use client';
import { styles } from './styles';
import {
    useReducer,
    CSSProperties,
    FC,
    ReactNode,
    memo,
    useRef,
    useEffect,
    SyntheticEvent,
} from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { DropDownContext } from './context';
import {
    initialState,
    reducer,
    setAnchorAction,
    setWrapperAction,
} from './store';
import { RTPlacement } from '@/src/types/placement';
import { v4 as uuidV4 } from 'uuid';
import { createWrapperAndAppendToBody } from '../Modal/utils';

export type RTDropdownProps = {
    children?: ReactNode;
    placement?: RTPlacement;
    trigger?: 'hover' | 'click' | 'contextMenu';
    arrow?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
};

const Dropdown: FC<RTDropdownProps> = ({
    children,
    placement = 'bottom-start',
    trigger = 'hover',
    arrow,
    open,
    onOpenChange,
    defaultOpen,
}) => {
    const leaveTimerRef = useRef<NodeJS.Timeout>(null);
    const wrapperIdRef = useRef(uuidV4());
    const [state, dispatch] = useReducer(reducer, initialState);

    const setAnchor = (anchor: HTMLElement) =>
        dispatch(setAnchorAction(anchor));

    const removeWrapper = () => {
        if (onOpenChange) onOpenChange(false);
        if (open !== undefined) return;
        dispatch(setWrapperAction(null));
    };

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
        <DropDownContext.Provider
            value={{
                anchor: state.anchor,
                wrapper: state.wrapper,
                setAnchor,
                setWrapper,
                removeWrapper,
                placement,
                trigger,
                arrow,
                leaveTimerRef,
            }}
        >
            {children}
        </DropDownContext.Provider>
    );
};

export default memo(Dropdown);
