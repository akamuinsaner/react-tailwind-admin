import { RTSeverity } from '@/src/types/severity';
import classNames from 'classnames';
import { CSSProperties, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type RTCircularProgressProps = {
    color?: 'primary' | 'secondary' | RTSeverity;
    style?: CSSProperties;
    className?: string;
    value?: number;
};

const CircularProgress = forwardRef<HTMLDivElement, RTCircularProgressProps>(
    ({ style, className, color = 'primary', value }, ref) => {
        const boxClassName = twMerge(styles.circular.box.base, className);
        const innerClassName = twMerge(styles.circular.inner.base);
        const progClassName = twMerge(
            styles.circular.prog.base,
            styles.circular.prog[color],
            classNames({
                [styles.circular.prog.controlled]: value !== undefined,
            }),
        );
        return (
            <div ref={ref} className={boxClassName} style={style}>
                <svg className={innerClassName}>
                    <circle
                        className={progClassName}
                        r={18}
                        cx={20}
                        cy={20}
                        strokeDasharray='80px, 200px'
                    />
                </svg>
            </div>
        );
    },
);

export default CircularProgress;
