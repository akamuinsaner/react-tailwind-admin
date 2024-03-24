import Badge from '@/src/components/Badge';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const Basic = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Flex
                    align='center'
                    justify='center'
                    className='h-20'
                    gap='large'
                >
                    <Badge>
                        <EnvelopeIcon className='h-6 w-6' />
                    </Badge>
                    <Badge count={1}>
                        <EnvelopeIcon className='h-6 w-6' />
                    </Badge>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Basic;
