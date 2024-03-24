'use client';
import {
    CSSProperties,
    FC,
    ReactNode,
    forwardRef,
    LegacyRef,
    HTMLAttributes,
    useContext,
} from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { ListContext } from './context';

export type RTListItemProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    active?: boolean;
} & HTMLAttributes<HTMLLIElement>;

const ListItem: FC<RTListItemProps> = forwardRef(
    (
        { children, className, style, active, ...nativeProps },
        ref: LegacyRef<HTMLLIElement>,
    ) => {
        const context = useContext(ListContext);
        const computedClassNames = twMerge(
            styles.item.base,
            [styles.item[context.size]],
            classNames({
                [styles.item.active]: active,
                [styles.item.divider]: context.divider,
            }),
            className,
        );

        return (
            <li
                style={style}
                className={computedClassNames}
                ref={ref}
                {...nativeProps}
            >
                {children}
            </li>
        );
    },
);

export default ListItem;
