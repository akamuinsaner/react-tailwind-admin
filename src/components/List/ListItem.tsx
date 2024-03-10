'use client'
import { CSSProperties, FC, ReactNode, memo, MouseEventHandler } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type Props = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    active?: boolean;
    onClick?: MouseEventHandler<HTMLElement>
}

const ListItem: FC<Props> = ({
    children,
    className,
    style,
    active,
    onClick
}) => {
    const computedClassNames = twMerge(
        styles.item,
        classNames({
            'text-primary bg-primary/10 hover:bg-primary/10': active,
        }),
        className);

    return (
        <li onClick={onClick}>
            <div
                style={style}
                className={computedClassNames}
            >
                {children}
            </div>
        </li>
    )
}

export default memo(ListItem);