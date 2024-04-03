'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import { LinearProgress } from '@/src/components/Progress';
import { useEffect, useState } from 'react';

const Controlled = () => {
    const [value, setValue] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setValue(oldProgress => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Controlled</CardHeader>
            <CardBody className='py-20'>
                <LinearProgress value={value} />
            </CardBody>
        </Card>
    );
};

export default Controlled;
