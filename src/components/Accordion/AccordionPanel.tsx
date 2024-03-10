'use client'
import { CSSProperties, FC, ReactNode, memo, useContext, createContext } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { AccordionContext } from './index';
import { styles } from './styles';

export type RTAccordionProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    name: string | number;
}

export const AccordionPanelContext = createContext({
    name: null
});

const Accordion: FC<RTAccordionProps> = ({
    children,
    className,
    style,
    name
}) => {
    const context = useContext(AccordionContext);

    const computedClassNames = twMerge(styles.panel, classNames({

    }), className);

    return (
        <AccordionPanelContext.Provider value={{ name }}>
            <div
                style={style}
                className={computedClassNames}
            >
                {children}
            </div>
        </AccordionPanelContext.Provider>

    )
}

export default memo(Accordion);