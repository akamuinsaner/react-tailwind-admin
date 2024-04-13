'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Rate from '@/src/components/Rate';
import { FaceSmileIcon } from '@heroicons/react/24/outline';

const Custom = () => {
    const handleChange = e => {
        console.log(e.target.value);
    };
    return (
        <Card className='mb-6'>
            <CardHeader>Custom</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <Rate size='small' token='A' />
                    <Rate size='small' token='哈' />
                    <Rate size='small' token={<FaceSmileIcon />} />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Custom;
