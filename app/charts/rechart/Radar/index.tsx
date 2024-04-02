'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import { useEffect, useRef } from 'react';
import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    BarChart,
    Legend,
    Bar,
    Tooltip,
    CartesianGrid,
    Text,
} from 'recharts';
import { SALESOFXIAOMIANDHUAWEI } from '../../../utils/data';
import randomColor from 'randomcolor';

const ChartJSRadarChart = () => {
    return (
        <Card>
            <CardHeader>Sales volume of Xiaomi and Huawei</CardHeader>
            <CardBody>
                <ResponsiveContainer height={384} width='100%'>
                    <BarChart data={SALESOFXIAOMIANDHUAWEI}>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='year' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey='xiaomi' fill={randomColor()} />
                        <Bar dataKey='huawei' fill={randomColor()} />
                    </BarChart>
                </ResponsiveContainer>
            </CardBody>
        </Card>
    );
};

export default ChartJSRadarChart;
