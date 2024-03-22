'use client';
import { CSSProperties, FC, ReactNode, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { TimelineContext, RTTimelineContext } from './context';
import classNames from 'classnames';

export type RTTimelineConnectorProps = {
    style?: CSSProperties;
    className?: string;
};

const TimelineConnector: FC<RTTimelineConnectorProps> = ({
    style,
    className,
}) => {
    const context = useContext(TimelineContext);
    const { locate } = context;
    const baseClassName = twMerge(
        styles.connector.base,
        styles.token[locate],
        classNames({}),
        className,
    );
    return <div style={style} className={baseClassName}></div>;
};

export default TimelineConnector;
