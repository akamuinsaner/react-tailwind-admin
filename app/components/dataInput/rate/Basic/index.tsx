'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Rate from '@/src/components/Rate';

const Basic = () => {
    const handleChange = e => {
        console.log(e.target.value);
    };
    return (
        <Card className='mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody className='flex'>
                <Rate />
            </CardBody>
        </Card>
    );
};

export default Basic;
