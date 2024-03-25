'use client';
import { reducer, initialState } from './reducer';
import {
    useReducer,
    CSSProperties,
    FC,
    ReactNode,
    memo,
    forwardRef,
    LegacyRef,
    HTMLAttributes,
} from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type RTBoxProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Box: FC<RTBoxProps> = forwardRef(
    (
        { children, className, style, ...nativeProps },
        ref: LegacyRef<HTMLDivElement>,
    ) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const computedClassNames = twMerge(styles.base, className);

        return (
            <div
                ref={ref}
                style={style}
                className={computedClassNames}
                {...nativeProps}
            >
                {children}
            </div>
        );
    },
);

export default Box;
