'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import { useEffect, useRef } from 'react';
import {
    ResponsiveContainer,
    XAxis,
    Cell,
    PieChart,
    Legend,
    Pie,
    Tooltip,
    CartesianGrid,
} from 'recharts';
import { SALESOFCELLPHONEBRANDS } from '../../../utils/data';
import randomColor from 'randomcolor';

const ChartJSPieChart = () => {
    return (
        <Card>
            <CardHeader>Cell phone sales in 2023</CardHeader>
            <CardBody>
                <ResponsiveContainer height={384} width='100%'>
                    <PieChart>
                        <Tooltip />
                        <Legend />
                        <Pie
                            data={SALESOFCELLPHONEBRANDS}
                            dataKey='sales'
                            nameKey='brand'
                            label
                        >
                            {SALESOFCELLPHONEBRANDS.map(item => (
                                <Cell fill={randomColor()} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </CardBody>
        </Card>
    );
};

export default ChartJSPieChart;
