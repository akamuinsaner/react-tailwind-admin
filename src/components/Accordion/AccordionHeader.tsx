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

    const computedClassNames = twMerge(styles.header.base, classNames({
        [styles.header.disabled]: disabled,
    }), className);

    const iconClassNames = twMerge(styles.icon.base, classNames({
        [styles.icon.open]: context.openKeys.includes(panelContext.name),
    }))

    return (
        <button
            disabled={disabled}
            style={style}
            className={computedClassNames}
            onClick={() => context.togglePanel(panelContext.name)}
        >
            <p>{children}</p>
            <div className={iconClassNames}>{expandIcon}</div>
        </button>
    )
}

export default memo(AccordionHeader);