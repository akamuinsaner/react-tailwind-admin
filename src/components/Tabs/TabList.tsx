'use client'
import { CSSProperties, FC, ReactNode, memo, useContext, Children, cloneElement, ReactElement } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { TabsContext } from './index';

export type RTTabsListProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

const TabList: FC<RTTabsListProps> = ({
    children,
    className,
    style,
}) => {
    const context = useContext(TabsContext);
    const { active, focusInfo, vertical } = context;
    const computedClassNames = twMerge(classNames({
        [styles.tabs.base]: !vertical,
        [styles.tabs.vertical]: vertical
    }), className);

    const focusClassNames = twMerge(classNames(styles.focus.base, {
        [styles.focus.vertical]: vertical,
    }))

    const focusStyle = vertical ? {
        top: `${focusInfo?.left}px`,
        height: `${focusInfo?.width}px`,
    } : {
        left: `${focusInfo?.left}px`,
        width: `${focusInfo?.width}px`,
    }

    let finalChildren;
    if (!Array.isArray(children)) {
        finalChildren = cloneElement(children as React.ReactElement<any>, { index: 0 });
    } else {
        finalChildren = Children.map(children, (child: ReactElement, index) => cloneElement(child, {
            index
        }))
    }
    return (
        <div
            style={style}
            className={computedClassNames}
        >
            {finalChildren}
            <div className={focusClassNames} style={focusStyle}></div>
        </div>
    )
}

export default memo(TabList);