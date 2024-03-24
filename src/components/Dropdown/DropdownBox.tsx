'use client';
import { styles } from './styles';
import { CSSProperties, FC, ReactNode, memo, useContext } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { DropDownContext } from './context';
import Popup from '../Tooltip/Popup';
import List from '../List';

export type RTDropdownBoxProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
};

const DropdownBox: FC<RTDropdownBoxProps> = ({
    children,
    className,
    style,
}) => {
    const context = useContext(DropDownContext);
    const {
        anchor,
        placement,
        arrow,
        wrapper,
        removeWrapper,
        trigger,
        leaveTimerRef,
    } = context;

    return (
        <Popup
            style={{
                ...style,
                minWidth: anchor?.offsetWidth,
            }}
            className={twMerge(styles.box.base, className)}
            anchor={anchor}
            wrapper={wrapper}
            placement={placement}
            visibleClassName={styles.box.show}
            onClose={removeWrapper}
            arrow={arrow}
            timerRef={leaveTimerRef}
            trigger={trigger}
        >
            <List>{children}</List>
        </Popup>
    );
};

export default memo(DropdownBox);
