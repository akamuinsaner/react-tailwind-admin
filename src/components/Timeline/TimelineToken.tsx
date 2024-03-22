'use client';
import {
    cloneElement,
    CSSProperties,
    FC,
    ReactNode,
    useContext,
    useMemo,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { TimelineContext, RTTimelineContext } from './context';
import classNames from 'classnames';
import { RTTimelineTokenColor, RTTImelineVariant } from '.';

export type RTTimelineTokenProps = {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    color?: RTTimelineTokenColor;
    variant?: RTTImelineVariant;
};

const TimelineToken: FC<RTTimelineTokenProps> = ({
    style,
    className,
    children,
    color,
    variant,
}) => {
    const context = useContext(TimelineContext);
    const baseClassName = twMerge(
        styles.token.base,
        styles.token[color || context.color],
        styles.token[variant || context.variant],
        styles.token[context.locate],
        classNames({
            [styles.token.children]: !!children,
        }),
        className,
    );

    let child = useMemo(() => {
        const child: any = children;
        if (!child) return null;
        if (Array.isArray(child))
            return cloneElement(child[0], {
                className: twMerge(
                    styles.token.children,
                    children[0].props?.className,
                ),
            });
        return cloneElement(child, {
            className: twMerge(styles.token.children, child?.props?.className),
        });
    }, [children]);

    return (
        <div style={style} className={baseClassName}>
            {child}
        </div>
    );
};

export default TimelineToken;
