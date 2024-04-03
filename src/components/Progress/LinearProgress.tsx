import { RTSeverity } from '@/src/types/severity';
import classNames from 'classnames';
import { CSSProperties, forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type RTlinearProgressProps = {
    color?: 'primary' | 'secondary' | RTSeverity;
    style?: CSSProperties;
    className?: string;
    value?: number;
};

const LinearProgress = forwardRef<HTMLDivElement, RTlinearProgressProps>(
    ({ style, className, color = 'primary', value }, ref) => {
        const boxClassName = twMerge(styles.linear.box.base, className);
        const innerClassName = twMerge(
            styles.linear.inner.base,
            styles.linear.inner[color],
        );
        const progClassName = twMerge(
            styles.linear.prog.base,
            styles.linear.prog[color],
            classNames({
                [styles.linear.prog.controlled]: value !== undefined,
            }),
        );
        const progStyle = useMemo(() => {
            if (value === undefined) return {};
            return {
                left: `-${100 - value}%`,
            };
        }, [value]);
        return (
            <div ref={ref} className={boxClassName} style={style}>
                <div className={innerClassName}>
                    <div
                        className={progClassName}
                        style={{ ...progStyle }}
                    ></div>
                </div>
            </div>
        );
    },
);

export default LinearProgress;
