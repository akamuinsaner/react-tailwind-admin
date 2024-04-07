'use client';
import {
    CSSProperties,
    FC,
    ReactNode,
    memo,
    useContext,
    useEffect,
    useRef,
} from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { styles, RTTabsStyles } from './styles';
import { TabsContext } from './index';

export type RTTabProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    value: string | number;
    index?: number;
    disabled?: boolean;
    icon?: ReactNode;
};

const Tab: FC<RTTabProps> = ({
    children,
    className,
    style,
    value,
    index,
    disabled,
    icon,
}) => {
    const tabRef = useRef<HTMLButtonElement>(null);
    const context = useContext(TabsContext);
    const { placement } = context;
    const computedClassNames = twMerge(
        classNames(styles.tab.base, {
            [styles.tab.active]: context.active === value,
            [styles.tab.disabled]: disabled,
        }),
        className,
    );

    const onTabClick = (value: string | number) => {
        context.setActive(value);
    };

    useEffect(() => {
        if (context.active === value) {
            const element = tabRef.current;
            context.setFocusInfo({
                width:
                    placement === 'top' || placement === 'bottom'
                        ? element.offsetWidth
                        : element.offsetHeight,
                left:
                    placement === 'left' || placement === 'right'
                        ? element.offsetTop
                        : element.offsetLeft,
            });
        }
    }, [context.active, children]);

    useEffect(() => {
        if (index === 0 && !context.controlled) onTabClick(value);
    }, [index]);

    return (
        <button
            disabled={disabled}
            style={style}
            className={computedClassNames}
            onClick={() => onTabClick(value)}
            ref={tabRef}
        >
            {icon && <div className='h-6 w-6'>{icon}</div>}
            {children}
        </button>
    );
};

export default memo(Tab);
