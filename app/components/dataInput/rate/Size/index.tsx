'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Rate from '@/src/components/Rate';

const Size = () => {
    const handleChange = e => {
        console.log(e.target.value);
    };
    return (
        <Card className='mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <Rate size='small' />
                    <Rate />
                    <Rate size='large' />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Size;
