'use client';
import { CSSProperties, FC, ReactNode, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { TimelineContext, RTTimelineContext } from './context';
import classNames from 'classnames';

export type RTTimelineItemProps = {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
};

const TimelineItem: FC<RTTimelineItemProps> = ({
    style,
    className,
    children,
}) => {
    const context = useContext(TimelineContext);
    const baseClassName = twMerge(styles.item.base, classNames({}), className);
    return (
        <li style={style} className={baseClassName}>
            {children}
        </li>
    );
};

export default TimelineItem;
