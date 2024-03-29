'use client';
import {
    CSSProperties,
    FC,
    ReactNode,
    memo,
    SyntheticEvent,
    ButtonHTMLAttributes,
    cloneElement,
    Children,
    forwardRef,
    LegacyRef,
} from 'react';
import { RTSize } from '../../types/size';
import { styles } from './styles';
import { RTSeverity } from '../../types/severity';
import { twMerge } from 'tailwind-merge';

export type RTButtonProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    size?: RTSize;
    variant?: 'contained' | 'outlined' | 'text';
    color?: 'primary' | 'secondary' | RTSeverity;
    disabled?: boolean;
    onClick?: (e: SyntheticEvent) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonGroup: FC<RTButtonProps> = forwardRef(
    ({ ...props }, ref: LegacyRef<HTMLDivElement>) => {
        const { className, children, style } = props;
        const computedClassNames = twMerge(styles.group, className);

        let preChildren;
        if (!Array.isArray(children)) {
            return cloneElement(children as any, {
                ...props,
                ...(children as any).props,
            });
        } else {
            const childrenCount = Children.count(children);
            preChildren = Children.map(children, (child: any, index) => {
                if (index === 0 && index !== childrenCount - 1) {
                    return cloneElement(child, {
                        ...props,
                        ...child.props,
                        className: twMerge(
                            child?.props.className,
                            '!rounded-r-none',
                        ),
                    });
                }
                if (index === childrenCount - 1 && index !== 0) {
                    return cloneElement(child, {
                        ...props,
                        ...child.props,
                        className: twMerge(
                            child?.props.className,
                            '!rounded-l-none',
                            '-ml-px'
                        ),
                    });
                }
                if (childrenCount === 1) return child;
                return cloneElement(child, {
                    ...props,
                    ...child.props,
                    className: twMerge(child?.props.className, '!rounded-none', '-ml-px'),
                });
            });
        }

        return (
            <div ref={ref} style={style} className={computedClassNames}>
                {preChildren}
            </div>
        );
    },
);

export default ButtonGroup;
