'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import { CircularProgress } from '@/src/components/Progress';

const Circular = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Circular</CardHeader>
            <CardBody className='py-20'>
                <Flex gap='medium' justify='center'>
                    <CircularProgress />
                    <CircularProgress color='secondary' />
                    <CircularProgress color='success' />
                    <CircularProgress color='info' />
                    <CircularProgress color='warning' />
                    <CircularProgress color='danger' />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Circular;
