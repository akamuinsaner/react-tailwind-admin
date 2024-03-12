'use client'
import { styles } from './styles';
import { CSSProperties, FC, ReactNode, memo, Children, cloneElement } from 'react';
import { twMerge } from 'tailwind-merge';

export type RTGroupProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode | ReactNode;
}

const Group: FC<RTGroupProps> = ({
    children,
    className,
    style,
}) => {

    const computedClassName = twMerge(styles.base, className);
    let preChildren;
    if (!Array.isArray(children)) {
        preChildren = children
    } else {
        const childrenCount = Children.count(children);
        preChildren = Children.map(children, (child: any, index) => {
            if (index === 0 && index !== (childrenCount - 1)) {
                return cloneElement(child, {
                    className: twMerge(child?.props.className, '!rounded-r-none')
                })
            }
            if (index === (childrenCount - 1) && index !== 0) {
                return cloneElement(child, {
                    className: twMerge(child?.props.className, '!rounded-l-none')
                })
            }
            if (childrenCount === 1) return child;
            return cloneElement(child, {
                className: twMerge(child?.props.className, '!rounded-none')
            })
        })
    }

    return (
        <div
            style={style}
            className={computedClassName}
        >
            {preChildren}
        </div>
    )
}

export default memo(Group);