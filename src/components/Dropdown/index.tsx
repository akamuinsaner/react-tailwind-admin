'use client'
import { styles } from './styles';
import { useReducer, CSSProperties, FC, ReactNode, memo, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { DropDownContext } from './context';
import { initialState, reducer, setAnchorAction, setActiveAction } from './store';
import { RTPlacement } from '@/src/types/placement';

export type RTDropdownProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    placement?: RTPlacement;
    trigger?: 'hover' | 'click' | 'contextMenu';
    arrow?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

const Dropdown: FC<RTDropdownProps> = ({
    children,
    className,
    style,
    placement = 'bottom-start',
    trigger = 'hover',
    arrow,
    open,
    onOpenChange
}) => {
    let timer = useRef<NodeJS.Timeout>(null);
    const [state, dispatch] = useReducer(reducer, initialState);

    const computedClassNames = twMerge(styles.base, classNames({

    }), className);

    const setAnchor = (anchor: HTMLElement) => dispatch(setAnchorAction(anchor));

    const setActive = (active: boolean, triggerType?: RTDropdownProps["trigger"]) => {
        if (onOpenChange) onOpenChange(active);
        if (open !== undefined) return;
        if (triggerType && triggerType !== trigger) return;
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            dispatch(setActiveAction(active));
        }, 150);
    }

    useEffect(() => {
        if (open !== undefined) dispatch(setActiveAction(open));
    }, [open]);

    return (
        <DropDownContext.Provider value={{
            anchor: state.anchor,
            active: state.active,
            setAnchor,
            setActive,
            placement,
            trigger,
            arrow,
        }}>
            <div
                style={style}
                className={computedClassNames}
                onMouseLeave={() => setActive(false, 'hover')}
                onMouseEnter={() => clearTimeout(timer.current)}
            >
                {children}
            </div>
        </DropDownContext.Provider>

    )
}

export default memo(Dropdown);