'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import { useEffect, useRef } from 'react';
import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    LineChart,
    Legend,
    Line,
    Tooltip,
    CartesianGrid,
} from 'recharts';
import { SALESOFXIAOMIANDHUAWEI } from '../../../utils/data';
import randomColor from 'randomcolor';

const ChartJSLineChart = () => {
    return (
        <Card>
            <CardHeader>Sales trend of Xiaomi and Huawei</CardHeader>
            <CardBody>
                <ResponsiveContainer height={384} width='100%'>
                    <LineChart data={SALESOFXIAOMIANDHUAWEI}>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='year' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line dataKey='xiaomi' stroke={randomColor()} />
                        <Line dataKey='huawei' stroke={randomColor()} />
                    </LineChart>
                </ResponsiveContainer>
            </CardBody>
        </Card>
    );
};

export default ChartJSLineChart;
