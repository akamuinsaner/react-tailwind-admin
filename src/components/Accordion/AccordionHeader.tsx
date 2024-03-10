'use client'
import { CSSProperties, FC, ReactNode, memo, useContext } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { AccordionContext } from './index';
import { AccordionPanelContext } from './AccordionPanel';
import { styles } from './styles'

export type RTAccordionHeaderProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    expandIcon?: ReactNode;
    disabled?: boolean;
}

const AccordionHeader: FC<RTAccordionHeaderProps> = ({
    children,
    className,
    style,
    expandIcon,
    disabled
}) => {
    const context = useContext(AccordionContext);
    const panelContext = useContext(AccordionPanelContext);
    const { name } = panelContext;
    const { openKeys, togglePanel } = context;
    const computedClassNames = twMerge(styles.header.base, classNames({
        [styles.header.open]: openKeys.includes(name),
        [styles.header.disabled]: disabled,
    }), className);

    const iconClassNames = twMerge(styles.icon.base, classNames({
        [styles.icon.open]: openKeys.includes(name),
    }))

    return (
        <button
            disabled={disabled}
            style={style}
            className={computedClassNames}
            onClick={() => togglePanel(name)}
        >
            <p>{children}</p>
            <div className={iconClassNames}>{expandIcon}</div>
        </button>
    )
}

export default memo(AccordionHeader);