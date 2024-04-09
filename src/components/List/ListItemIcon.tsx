'use client';
import { CSSProperties, FC, ReactNode, memo, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type Props = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const ListItemIcon: FC<Props> = ({
    children,
    className,
    style,
    ...nativeProps
}) => {
    const computedClassNames = twMerge(styles.icon, className);

    return (
        <div style={style} className={computedClassNames} {...nativeProps}>
            {children}
        </div>
    );
};

export default memo(ListItemIcon);
