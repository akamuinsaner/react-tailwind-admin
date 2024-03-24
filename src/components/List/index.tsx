'use client';
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
import { ListContext, RTListContext } from './context';
import { RTSize } from '@/src/types/size';

export type RTListProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    size?: RTSize;
    divider?: boolean;
} & HTMLAttributes<HTMLUListElement>;

const List: FC<RTListProps> = forwardRef(
    (
        { children, className, style, divider, size, ...nativeProps },
        ref: LegacyRef<HTMLUListElement>,
    ) => {
        const computedClassNames = twMerge(
            styles.base,
            className,
        );

        const contextValue: RTListContext = {
            divider,
            size
        };

        return (
            <ListContext.Provider value={contextValue}>
                <ul
                    style={style}
                    className={computedClassNames}
                    ref={ref}
                    {...nativeProps}
                >
                    {children}
                </ul>
            </ListContext.Provider>
        );
    },
);

export default List;
