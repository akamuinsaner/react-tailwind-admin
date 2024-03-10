'use client'
import { CSSProperties, FC, ReactNode, memo, useContext, SyntheticEvent } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { AccordionContext } from './index';
import { AccordionPanelContext } from './AccordionPanel';
import { styles } from './styles'

export type RTAccordionBodyProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

const AccordionBody: FC<RTAccordionBodyProps> = ({
    children,
    className,
    style,
}) => {
    const context = useContext(AccordionContext);
    const panelContext = useContext(AccordionPanelContext);
    const computedClassNames = twMerge(styles.body.base, classNames({
        [styles.body.closed]: !context.openKeys.includes(panelContext.name)
    }), className);

    const onTransitionEnd = (e: SyntheticEvent) => {
        const element = e.currentTarget;
        if (!element.classList.contains('max-h-0')) {
            element.className = twMerge(element.className, 'overflow-auto')
        }
    }

    return (
        <div
            style={style}
            className={computedClassNames}
            onTransitionEnd={onTransitionEnd}
        >
            <div className='py-4 px-6'>
                {children}
            </div>
            
        </div>
    )
}

export default memo(AccordionBody);