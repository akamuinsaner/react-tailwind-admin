'use client'
import { reducer, initialState, computeOpenKeys, setKeysAction, toggleKeysAction } from './store';
import { useReducer, CSSProperties, FC, ReactNode, memo, useEffect, createContext } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type RTAccordionProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    openKeys?: (string | number)[];
    onChange?: (keys: (string | number)[], key: string | number, expand: boolean) => void;
}

export type RTAccordionContext = {
    controlled: boolean;
    openKeys: Array<string | number>;
    togglePanel: (name: string | number) => void;
}

export const AccordionContext = createContext<RTAccordionContext>(null);

const Accordion: FC<RTAccordionProps> = ({
    children,
    className,
    style,
    openKeys,
    onChange
}) => {
    const isControlled = !!openKeys;
    const [state, dispatch] = useReducer(reducer, initialState);

    const computedClassNames = twMerge(styles.base, classNames({

    }), className);

    useEffect(() => {
        if (openKeys) {
            console.log(1111111111, openKeys)
            dispatch(setKeysAction(openKeys));
        }
    }, [openKeys]);

    const togglePanel = (name: string | number) => {
        if (!openKeys) dispatch(toggleKeysAction(name));
        if (onChange) {
            onChange(
                computeOpenKeys(state.openKeys, name),
                name,
                !state.openKeys.includes(name)
            );
        }
    }

    return (
        <AccordionContext.Provider value={{
            controlled: isControlled,
            openKeys: state.openKeys,
            togglePanel
        }}>
            <div
                style={style}
                className={computedClassNames}
            >
                {children}
            </div>
        </AccordionContext.Provider>

    )
}

export default memo(Accordion);