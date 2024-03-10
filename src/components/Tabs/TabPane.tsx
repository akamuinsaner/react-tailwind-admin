'use client'
import { CSSProperties, FC, ReactNode, memo, useContext } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { TabsContext } from './index';

export type RTTabsListProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    value: string | number;
}

const TabPane: FC<RTTabsListProps> = ({
    children,
    className,
    style,
    value,
}) => {
    const context = useContext(TabsContext);

    const computedClassNames = twMerge(styles.pane, classNames({
        'block': context?.active === value
    }), className);

    return (
        <div
            style={style}
            className={computedClassNames}
        >
            {children}
        </div>
    )
}

export default memo(TabPane);