'use client';
import {
    CSSProperties,
    FC,
    ReactNode,
    memo,
    useCallback,
    forwardRef,
    LegacyRef,
    HTMLAttributes,
} from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { RTSize } from '../../types/size';
import { styles } from './styles';

export type RTAvatarProps = {
    className?: string;
    style?: CSSProperties;
    size?: RTSize;
    src?: string;
    alt?: string;
    children?: ReactNode;
    title?: string;
} & HTMLAttributes<HTMLDivElement>;

const Avatar: FC<RTAvatarProps> = forwardRef(
    (
        {
            className,
            style,
            size = 'medium',
            src,
            alt,
            children,
            title,
            ...nativeProps
        },
        ref: LegacyRef<HTMLDivElement>,
    ) => {
        const baseClassNames = twMerge(
            styles.base,
            classNames({
                'h-6 w-6': size === 'small',
                'h-10 w-10': size === 'medium',
                'h-14 w-14': size === 'large',
            }),
            className,
        );

        const getContent = useCallback(() => {
            if (src) {
                return <img src={src} alt={alt} />;
            }
            if (typeof children === 'string') {
                return children.slice(0, 2);
            }
            return children;
        }, [src, children]);

        return (
            <div
                style={style}
                className={baseClassNames}
                title={title}
                ref={ref}
                {...nativeProps}
            >
                {getContent()}
            </div>
        );
    },
);

export default Avatar;
