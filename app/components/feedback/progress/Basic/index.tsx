'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import { LinearProgress } from '@/src/components/Progress';

const Basic = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody className='py-20'>
                <LinearProgress />
            </CardBody>
        </Card>
    );
};

export default Basic;
