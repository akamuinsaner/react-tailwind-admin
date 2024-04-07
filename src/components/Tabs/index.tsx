'use client';
import {
    useReducer,
    CSSProperties,
    FC,
    ReactNode,
    memo,
    createContext,
    useEffect,
    forwardRef,
} from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { styles, RTTabsStyles } from './styles';
import {
    reducer,
    initialState,
    setActiveAction,
    setFocusInfoAction,
} from './store';

export type RTTabsProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    active?: string | number;
    onChange?: (active: any) => void;
    placement?: 'top' | 'left' | 'bottom' | 'right';
};

export type RTTabsContext = {
    styles: RTTabsStyles;
    setActive: (active: string | number) => void;
    controlled: boolean;
    active: string | number;
    focusInfo: { width: number; left: number };
    setFocusInfo: (info: { width: number; left: number }) => void;
    placement: 'top' | 'left' | 'bottom' | 'right';
};

export const TabsContext = createContext<RTTabsContext>(null);

const Tabs = forwardRef<HTMLDivElement, RTTabsProps>(
    (
        { children, className, style, active, onChange, placement = 'top' },
        ref,
    ) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        const isControlled = !!(active !== undefined);
        const computedClassNames = twMerge(
            styles.base.base,
            classNames({
                [styles.base.base]: placement === 'top',
                [styles.base.left]: placement === 'left',
                [styles.base.bottom]: placement === 'bottom',
                [styles.base.right]: placement === 'right',
            }),
            className,
        );

        const setActive = (activeTab: string | number) => {
            if (!active) dispatch(setActiveAction<string | number>(activeTab));
            onChange && onChange(activeTab);
        };

        const setFocusInfo = (info: { width: number; left: number }) => {
            dispatch(setFocusInfoAction<{ width: number; left: number }>(info));
        };

        useEffect(() => {
            if (active !== undefined) {
                dispatch(setActiveAction<string | number>(active));
            }
        }, [active]);

        return (
            <TabsContext.Provider
                value={{
                    styles,
                    controlled: isControlled,
                    active: state.active,
                    focusInfo: state.focusInfo,
                    setActive,
                    setFocusInfo,
                    placement,
                }}
            >
                <div ref={ref} style={style} className={computedClassNames}>
                    {children}
                </div>
            </TabsContext.Provider>
        );
    },
);

export default memo(Tabs);
