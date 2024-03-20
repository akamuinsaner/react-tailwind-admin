import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import Box from '@/src/components/Box';
import Flex from '@/src/components/Flex';

const Color = () => {
    return (
        <Card>
            <CardHeader>Color</CardHeader>
            <CardBody>
                <Flex gap='medium' direction='column'>
                    <Flex gap='medium' wrap='wrap'>
                        <Button color='primary'>Primary</Button>
                        <Button color='secondary'>Secondary</Button>
                        <Button color='success'>Success</Button>
                        <Button color='info'>Info</Button>
                        <Button color='warning'>Warning</Button>
                        <Button color='danger'>Danger</Button>
                        <Button disabled>Disabled</Button>
                    </Flex>
                    <Flex gap='medium' wrap='wrap'>
                        <Button variant='outlined' color='primary'>
                            Primary
                        </Button>
                        <Button variant='outlined' color='secondary'>
                            Secondary
                        </Button>
                        <Button variant='outlined' color='success'>
                            Success
                        </Button>
                        <Button variant='outlined' color='info'>
                            Info
                        </Button>
                        <Button variant='outlined' color='warning'>
                            Warning
                        </Button>
                        <Button variant='outlined' color='danger'>
                            Danger
                        </Button>
                        <Button variant='outlined' disabled>
                            Disabled
                        </Button>
                    </Flex>
                    <Flex gap='medium' wrap='wrap'>
                        <Button variant='text' color='primary'>
                            Primary
                        </Button>
                        <Button variant='text' color='secondary'>
                            Secondary
                        </Button>
                        <Button variant='text' color='success'>
                            Success
                        </Button>
                        <Button variant='text' color='info'>
                            Info
                        </Button>
                        <Button variant='text' color='warning'>
                            Warning
                        </Button>
                        <Button variant='text' color='danger'>
                            Danger
                        </Button>
                        <Button variant='text' disabled>
                            Disabled
                        </Button>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Color;
