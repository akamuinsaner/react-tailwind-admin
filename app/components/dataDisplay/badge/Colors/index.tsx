import Badge from '@/src/components/Badge';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const Colors = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Colors</CardHeader>
            <CardBody>
                <Flex
                    align='center'
                    justify='center'
                    className='h-20'
                    gap='large'
                >
                    <Badge color='primary' count={10}>
                        <EnvelopeIcon className='h-6 w-6' />
                    </Badge>
                    <Badge color='secondary' count={10}>
                        <EnvelopeIcon className='h-6 w-6' />
                    </Badge>
                    <Badge color='success' count={10}>
                        <EnvelopeIcon className='h-6 w-6' />
                    </Badge>
                    <Badge color='info' count={10}>
                        <EnvelopeIcon className='h-6 w-6' />
                    </Badge>
                    <Badge color='warning' count={10}>
                        <EnvelopeIcon className='h-6 w-6' />
                    </Badge>
                    <Badge color='danger' count={10}>
                        <EnvelopeIcon className='h-6 w-6' />
                    </Badge>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Colors;
