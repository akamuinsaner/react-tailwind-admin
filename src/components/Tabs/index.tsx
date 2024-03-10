'use client'
import { useReducer, CSSProperties, FC, ReactNode, memo, createContext, useEffect } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { styles, RTTabsStyles } from './styles';
import { reducer, initialState, setActiveAction, setFocusInfoAction } from './store';

export type RTTabsProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    active?: string | number;
    onChange?: (active: string | number) => void;
    vertical?: boolean;
}

export type RTTabsContext = {
    styles: RTTabsStyles;
    setActive: (active: string | number) => void;
    controlled: boolean;
    active: string | number;
    focusInfo: { width: number; left: number; };
    setFocusInfo: (info: { width: number; left: number; }) => void;
    vertical: boolean;
}

export const TabsContext = createContext<RTTabsContext>(null);

const Tabs: FC<RTTabsProps> = ({
    children,
    className,
    style,
    active,
    onChange,
    vertical,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const isControlled = !!(active !== undefined);
    const computedClassNames = twMerge(classNames({
        [styles.base.base] : !vertical,
        [styles.base.vertical]: vertical
    }), className);

    const setActive = (activeTab: string | number) => {
        if (!active) dispatch(setActiveAction<string | number>(activeTab));
        onChange && onChange(activeTab);
    }

    const setFocusInfo = (info: { width: number, left: number; }) => {
        dispatch(setFocusInfoAction<{ width: number, left: number; }>(info));
    }

    useEffect(() => {
        if (active !== undefined) {
            dispatch(setActiveAction<string | number>(active));
        }
    }, [active]);

    return (
        <TabsContext.Provider value={{
            styles,
            controlled: isControlled,
            active: state.active,
            focusInfo: state.focusInfo,
            setActive,
            setFocusInfo,
            vertical
        }}>
            <div
                style={style}
                className={computedClassNames}
            >
                {children}
            </div>
        </TabsContext.Provider>

    )
}

export default memo(Tabs);