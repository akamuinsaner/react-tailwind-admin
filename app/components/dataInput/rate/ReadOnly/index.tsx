'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Rate from '@/src/components/Rate';

const ReadOnly = () => {
    const handleChange = e => {
        console.log(e.target.value);
    };
    return (
        <Card className='mb-6'>
            <CardHeader>ReadOnly</CardHeader>
            <CardBody className='flex'>
                <Rate value={2} readOnly />
            </CardBody>
        </Card>
    );
};

export default ReadOnly;
