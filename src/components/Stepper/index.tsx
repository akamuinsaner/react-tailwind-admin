'use client';
import classNames from 'classnames';
import {
    Children,
    cloneElement,
    CSSProperties,
    FC,
    forwardRef,
    LegacyRef,
    ReactElement,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useReducer,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { RTStepperContext, StepperContext } from './context';
import { styles } from './styles';
import { reducer, initialState, setActiveAction } from './store';

export type RTStepperDirection = 'horizontal' | 'vertical';

export type RTStepperProps = {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
    direction?: RTStepperDirection;
    alternative?: boolean;
    active?: number;
    onChange?: (active: number) => void;
};

const Stepper: FC<RTStepperProps> = forwardRef(
    (
        {
            children,
            style,
            className,
            direction = 'horizontal',
            alternative = false,
            active,
            onChange,
        },
        ref: LegacyRef<HTMLUListElement>,
    ) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const baseClasses = twMerge(
            styles.wrapper.base,
            styles.wrapper[direction],
            classNames({}),
            className,
        );

        const contextValue: RTStepperContext = {
            length: Array.isArray(children) ? children.length : 1,
            alternative,
            direction,
            active: state.active,
        };

        const setActive = (curActive: number) => {
            if (onChange) onChange(curActive);
            if (active !== undefined) return;
            dispatch(setActiveAction(curActive));
        };

        useEffect(() => {
            if (active !== undefined) dispatch(setActiveAction(active));
        }, [active]);

        const finalChildren = useMemo(() => {
            if (!Array.isArray(children)) {
                return cloneElement(children as ReactElement, { index: 1 });
            } else {
                return Children.map(children, (child, index) =>
                    cloneElement(child, { index: index + 1 }),
                );
            }
        }, [children]);

        return (
            <StepperContext.Provider value={contextValue}>
                <ul ref={ref} style={style} className={baseClasses}>
                    {finalChildren}
                </ul>
            </StepperContext.Provider>
        );
    },
);

export default Stepper;
