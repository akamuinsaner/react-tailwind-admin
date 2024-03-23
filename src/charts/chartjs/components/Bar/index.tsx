'use client';
import { FC, useEffect, useMemo, useRef } from 'react';
import Chart, { LegendOptions, Point, TitleOptions } from 'chart.js/auto';
import { styles } from './styles';
import { TRBL } from 'chart.js/dist/types/geometric';
import useTitle from '../../hooks/useTitle';
import useSubtitle from '../../hooks/useSubtitle';

export type RTChartJSBarChartProps = {
    title?: Partial<TitleOptions>;
    subtitle?: Partial<TitleOptions>;
    legend?: LegendOptions<'bar'>;
    padding?: Partial<TRBL> | number | Point;
};

const BarChart: FC<RTChartJSBarChartProps> = ({
    padding,
    title,
    subtitle,
    legend,
}) => {
    const chartRef = useRef(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const layoutOptions = useMemo(() => {
        let layout = {};
        if (!padding) layout = Object.assign(layout, { autoPadding: true });
        else layout = Object.assign(layout, { padding });
        return layout;
    }, [padding]);

    const titleOptions = useTitle({ title });
    const subtitleOptions = useSubtitle({ subtitle });

    const legendOptions = useMemo(() => {
        return legend;
    }, [legend]);

    useEffect(() => {
        console.log(titleOptions);
        const data = [
            { year: 2010, count: 10 },
            { year: 2011, count: 20 },
            { year: 2012, count: 15 },
            { year: 2013, count: 25 },
            { year: 2014, count: 22 },
            { year: 2015, count: 30 },
            { year: 2016, count: 28 },
        ];
        chartRef.current = new Chart(canvasRef.current, {
            type: 'bar',
            data: {
                xLabels: data.map(row => row.year),
                yLabels: [0, 100],
                datasets: [
                    {
                        label: '12313',
                        data: data.map(row => row.count),
                    },
                    {
                        label: '12313',
                        data: data.map(row => row.count),
                    },
                ],
            },
            options: {
                layout: layoutOptions,
                plugins: {
                    title: titleOptions,
                    subtitle: subtitleOptions,
                    legend: legendOptions,
                },
            },
        });
        return () => {
            if (chartRef.current instanceof Chart) {
                chartRef.current.destroy();
            }
        };
    }, [layoutOptions, titleOptions, subtitleOptions]);

    return (
        <div className=''>
            <canvas ref={canvasRef} className={styles.canvas}></canvas>
        </div>
    );
};

export default BarChart;
