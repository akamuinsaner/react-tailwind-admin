'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Skeleton from '@/src/components/Skeleton';

const Basic = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium' className='w-96 mx-auto'>
                    <Skeleton className='w-20 h-20 rounded-full' />
                    <Skeleton />
                    <Skeleton className='h-20' />
                    <Skeleton className='h-20 rounded' />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Basic;
