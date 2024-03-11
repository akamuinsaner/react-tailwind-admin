'use client'
import { CSSProperties, FC, ReactNode, memo, useContext, SyntheticEvent, useRef, useEffect } from 'react';
import { DropDownContext } from './context';
import { RTDropdownProps } from './index';

export type RTDropdownAnchorProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

const DropdownAnchor: FC<RTDropdownAnchorProps> = ({
    children,
    className,
    style,
}) => {
    const context = useContext(DropDownContext);
    const anchorRef = useRef<HTMLDivElement>(null);
    const openDropdown = (trigger: RTDropdownProps["trigger"]) => {
        return (e: SyntheticEvent) => {
            e.preventDefault();
            context.setActive(true, trigger);
        }
    }

    useEffect(() => {
        context.setAnchor(anchorRef.current);
    }, []);
    return (
        <div
            ref={anchorRef}
            onMouseEnter={openDropdown('hover')}
            onClick={openDropdown('click')}
            onContextMenu={openDropdown('contextMenu')}
            className={className}
            style={style}
        >
            {children}
        </div>
    )
}

export default memo(DropdownAnchor);