'use client';
import classNames from 'classnames';
import {
    CSSProperties,
    FC,
    forwardRef,
    HTMLAttributes,
    LegacyRef,
    ReactNode,
    useContext,
    useEffect,
    useRef,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { RTSegmentContext, SegmentContext } from './context';
import { styles } from './styles';

export type RTSegmentItemProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    value: string | number;
    disabled?: boolean;
    icon?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const SegmentItem: FC<RTSegmentItemProps> = ({
    className,
    style,
    children,
    value,
    disabled,
    icon,
    ...nativeProps
}) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const {
        active,
        setAnchor,
        setActive,
        size,
        disabled: dis,
    } = useContext<RTSegmentContext>(SegmentContext);

    const itemClassName = twMerge(
        styles.item.base,
        styles.item[size],
        classNames({
            [styles.item.disabled]: dis || disabled,
        }),
        className,
    );

    const iconClassName = twMerge(
        styles.icon.base,
        classNames({
            [styles.icon.children]: !!children,
        }),
    );

    useEffect(() => {
        if (active === value) setAnchor(itemRef.current);
    }, [active]);

    return (
        <div
            ref={itemRef}
            style={style}
            className={itemClassName}
            {...nativeProps}
            onClick={() => setActive(value)}
        >
            {icon && <div className={iconClassName}>{icon}</div>}
            {children}
        </div>
    );
};

export default SegmentItem;
