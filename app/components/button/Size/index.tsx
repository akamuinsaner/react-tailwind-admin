import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import Flex from '@/src/components/Flex';

const Size = () => {
    return (
        <Card>
            <CardHeader>Size</CardHeader>
            <CardBody className='flex gap-4 flex-col'>
                <Flex gap='medium' align='center'>
                    <Button size='small' variant='text'>
                        small
                    </Button>
                    <Button size='medium' variant='text'>
                        medium
                    </Button>
                    <Button size='large' variant='text'>
                        large
                    </Button>
                </Flex>
                <Flex gap='medium' align='center'>
                    <Button size='small' variant='outlined'>
                        small
                    </Button>
                    <Button size='medium' variant='outlined'>
                        medium
                    </Button>
                    <Button size='large' variant='outlined'>
                        large
                    </Button>
                </Flex>
                <Flex gap='medium' align='center'>
                    <Button size='small' variant='contained'>
                        small
                    </Button>
                    <Button size='medium' variant='contained'>
                        medium
                    </Button>
                    <Button size='large' variant='contained'>
                        large
                    </Button>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Size;
