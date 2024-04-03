'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Skeleton from '@/src/components/Skeleton';

const Animation = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Animation</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium' className='w-96 mx-auto'>
                    <Skeleton animation={false} />
                    <Skeleton animation='pulse' />
                    <Skeleton animation='flow' />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Animation;
