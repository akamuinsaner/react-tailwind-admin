'use client';
import { CSSProperties, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { TimelineContext, RTTimelineContext } from './context';
import { RTSeverity } from '@/src/types/severity';

export type RTTImelineLocate = 'left' | 'right' | 'center';

export type RTTImelineVariant = 'outlined' | 'contained';

export type RTTimelineTokenColor =
    | 'primary'
    | 'secondary'
    | RTSeverity
    | 'disable';

export type RTTimelineProps = {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    locate?: RTTImelineLocate;
    color?: RTTimelineTokenColor;
    variant?: RTTImelineVariant;
};

const Timeline: FC<RTTimelineProps> = ({
    style,
    className,
    children,
    locate = 'center',
    color = 'primary',
    variant = 'contained',
}) => {
    const baseClassName = twMerge(
        styles.box.base,
        styles.box[locate],
        className,
    );
    const contextValue: RTTimelineContext = {
        locate,
        color,
        variant,
    };
    return (
        <TimelineContext.Provider value={contextValue}>
            <ul style={style} className={baseClassName}>
                {children}
            </ul>
        </TimelineContext.Provider>
    );
};

export default Timeline;
