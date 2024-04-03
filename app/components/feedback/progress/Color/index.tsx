'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import { LinearProgress } from '@/src/components/Progress';

const Color = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Color</CardHeader>
            <CardBody>
                <Flex direction='column' gap='large'>
                    <LinearProgress color='primary' />
                    <LinearProgress color='secondary' />
                    <LinearProgress color='success' />
                    <LinearProgress color='info' />
                    <LinearProgress color='warning' />
                    <LinearProgress color='danger' />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Color;
