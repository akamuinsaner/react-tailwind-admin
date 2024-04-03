import classNames from 'classnames';
import { CSSProperties, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type RTSkeletonProps = {
    className?: string;
    style?: CSSProperties;
    animation?: 'flow' | 'pulse' | false;
};

const Skeleton = forwardRef<HTMLDivElement, RTSkeletonProps>(
    ({ className, style, animation = 'pulse' }, ref) => {
        const baseClassName = twMerge(
            styles.base,
            classNames({
                [styles[animation || '']]: !!animation,
            }),
            className,
        );
        return <div ref={ref} style={style} className={baseClassName}></div>;
    },
);

export default Skeleton;
