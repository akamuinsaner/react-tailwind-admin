import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import Flex from '@/src/components/Flex';
import Text from '@/src/components/Text';
import Image from 'next/image';
import Product1 from '@/public/commercial/product1.png';
import Tag from '@/src/components/Tag';
import {
    ChevronRightIcon,
    ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import CardHeader from '@/src/components/Card/CardHeader';
import Grid from '@/src/components/Grid';
import Box from '@/src/components/Box';
import WebpackIcon from '@/app/utils/icons/color/WebpackIcon';
import Button from '@/src/components/Button';

const CICD = () => {
    return (
        <Card>
            <CardHeader>CI/CD</CardHeader>
            <CardBody>
                <Grid wrapper className='flex content-stretch'>
                    <Grid span={{ default: 12, md: 6, lg: 4 }}>
                        <Card className='h-full'>
                            <CardBody>
                                <Flex direction='column' gap='small'>
                                    <Flex
                                        align='center'
                                        justify='between'
                                        className='h-full'
                                    >
                                        <Box>
                                            <Text className='font-bold'>
                                                Webpack
                                            </Text>
                                            <Text
                                                size='tip2'
                                                className='text-gray-500'
                                            >
                                                A static module bundler
                                            </Text>
                                        </Box>
                                        <WebpackIcon className='h-8 w-8' />
                                    </Flex>
                                    <Text size='tip'>
                                        build a nodejs app project with npm and
                                        webpack
                                    </Text>
                                    <Flex
                                        align='center'
                                        justify='between'
                                        className='mt-auto'
                                    >
                                        <Button>Set Up</Button>
                                        <Text size='tip'>Javascript</Text>
                                    </Flex>
                                </Flex>
                            </CardBody>
                        </Card>
                    </Grid>
                    <Grid span={{ default: 12, md: 6, lg: 4 }}>
                        <Card className='h-full'>
                            <CardBody>
                                <Flex
                                    direction='column'
                                    gap='small'
                                    className='h-full'
                                >
                                    <Flex align='center' justify='between'>
                                        <Box>
                                            <Text className='font-bold'>
                                                Django
                                            </Text>
                                            <Text
                                                size='tip2'
                                                className='text-gray-500'
                                            >
                                                A high-level Python web
                                                framework
                                            </Text>
                                        </Box>
                                        <WebpackIcon className='h-8 w-8' />
                                    </Flex>
                                    <Text size='tip'>
                                        Build and Test a Django Project
                                    </Text>
                                    <Flex
                                        align='center'
                                        justify='between'
                                        className='mt-auto'
                                    >
                                        <Button>Set Up</Button>
                                        <Text size='tip'>Python</Text>
                                    </Flex>
                                </Flex>
                            </CardBody>
                        </Card>
                    </Grid>
                    <Grid span={{ default: 12, md: 6, lg: 4 }}>
                        <Card className='h-full'>
                            <CardBody>
                                <Flex
                                    direction='column'
                                    gap='small'
                                    className='h-full'
                                >
                                    <Flex align='center' justify='between'>
                                        <Box>
                                            <Text className='font-bold'>
                                                Docker
                                            </Text>
                                            <Text
                                                size='tip2'
                                                className='text-gray-500'
                                            >
                                                XXXXXXXXXXXXXXX
                                            </Text>
                                        </Box>
                                        <WebpackIcon className='h-8 w-8' />
                                    </Flex>
                                    <Text size='tip'>Build a docker image</Text>
                                    <Flex
                                        align='center'
                                        justify='between'
                                        className='mt-auto'
                                    >
                                        <Button>Set Up</Button>
                                        <Text size='tip'>Dockerfile</Text>
                                    </Flex>
                                </Flex>
                            </CardBody>
                        </Card>
                    </Grid>
                </Grid>
            </CardBody>
        </Card>
    );
};

export default CICD;
