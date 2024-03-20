import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Divider from '@/src/components/Divider';
import Flex from '@/src/components/Flex';

const Vertical = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Flex>
                    <Button>react</Button>
                    <Divider vertical />
                    <Button>tailwind</Button>
                    <Divider vertical />
                    <Button>admin</Button>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Vertical;
