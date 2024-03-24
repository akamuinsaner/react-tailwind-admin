'use client';
import {
    CSSProperties,
    FC,
    ReactNode,
    memo,
    useContext,
    SyntheticEvent,
    useRef,
    useEffect,
    useMemo,
    cloneElement,
    ReactElement,
} from 'react';
import { DropDownContext } from './context';
import { RTDropdownProps } from './index';

export type RTDropdownAnchorProps = {
    children?: ReactNode;
};

const DropdownAnchor: FC<RTDropdownAnchorProps> = ({ children }) => {
    const { trigger, setWrapper, removeWrapper, setAnchor, leaveTimerRef } =
        useContext(DropDownContext);
    const anchorRef = useRef<HTMLDivElement>(null);

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
        setAnchor(anchorRef.current);
    }, []);
    return child;
};

export default memo(DropdownAnchor);
