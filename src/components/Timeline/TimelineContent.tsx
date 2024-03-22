'use client';
import { CSSProperties, FC, ReactNode, useContext, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { TimelineContext, RTTimelineContext } from './context';
import classNames from 'classnames';

export type RTTimelineContentProps = {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    align?: 'left' | 'right';
};

const TimelineContent: FC<RTTimelineContentProps> = ({
    style,
    className,
    children,
    align = 'right',
}) => {
    const context = useContext<RTTimelineContext>(TimelineContext);
    const { locate } = context;
    const actualAlign = useMemo(() => {
        if (locate === 'left') return 'right';
        if (locate === 'right') return 'left';
        return align;
    }, [locate, align]);

    const baseClassName = twMerge(
        styles.content.base,
        [styles.content[actualAlign]],
        classNames({
            ['w-full']: locate === 'left' || locate === 'right',
        }),
        className,
    );
    return (
        <div style={style} className={baseClassName}>
            {children}
        </div>
    );
};

export default TimelineContent;
