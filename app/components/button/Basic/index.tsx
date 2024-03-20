import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import Flex from '@/src/components/Flex';

const Basic = () => {
    return (
        <Card>
            <CardHeader>Basic</CardHeader>
            <CardBody>
                <Flex gap='medium'>
                    <Button variant='text'>Text</Button>
                    <Button variant='contained'>Contained</Button>
                    <Button variant='outlined'>Outlined</Button>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Basic;
