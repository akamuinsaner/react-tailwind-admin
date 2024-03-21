import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import Flex from '@/src/components/Flex';

const Variants = () => {
    return (
        <Card>
            <CardHeader>Variants</CardHeader>
            <CardBody>
                <Flex wrap='wrap' gap='medium'>
                    <Button variant='contained'>Contained</Button>
                    <Button variant='contained' disabled>
                        disabled
                    </Button>
                    <Button variant='outlined'>Contained</Button>
                    <Button variant='outlined' disabled>
                        disabled
                    </Button>
                    <Button variant='text'>Contained</Button>
                    <Button variant='text' disabled>
                        disabled
                    </Button>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Variants;
