import { RTSeverity } from '@/src/types/severity';
import classNames from 'classnames';
import { CSSProperties, forwardRef, useEffect, useRef, useState } from 'react';
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
        const [width, setWidth] = useState<number>(0);
        const svgRef = useRef<SVGSVGElement>(null);
        const boxClassName = twMerge(styles.circular.box.base, className);
        const innerClassName = twMerge(styles.circular.inner.base);
        const progClassName = twMerge(
            styles.circular.prog.base,
            styles.circular.prog[color],
            classNames({
                [styles.circular.prog.controlled]: value !== undefined,
            }),
        );

        useEffect(() => {
            setWidth(svgRef.current.clientWidth);
        }, []);
        return (
            <div ref={ref} className={boxClassName} style={style}>
                <svg ref={svgRef} className={innerClassName}>
                    <circle
                        className={progClassName}
                        strokeWidth={Math.ceil(width / 10)}
                        strokeDasharray={2 * 3.14 * (width / 2 - 2)}
                        cx={width / 2}
                        cy={width / 2}
                        r={width / 2 - 2}
                    />
                </svg>
            </div>
        );
    },
);

export default CircularProgress;
