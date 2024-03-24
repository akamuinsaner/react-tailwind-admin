import Badge from '@/src/components/Badge';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const Standalone = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Standalone</CardHeader>
            <CardBody>
                <Flex
                    align='center'
                    justify='center'
                    className='h-20'
                    gap='large'
                >
                    <Badge />
                    <Badge count={1} />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Standalone;
