import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import Flex from '@/src/components/Flex';
import Image from '@/src/components/Image';
import Link from 'next/link';
import Grid from '@/src/components/Grid';
import Text from '@/src/components/Text';

const Navigation = () => {
    return (
        <Card>
            <CardHeader>Navigation</CardHeader>
            <CardBody>
                <Flex
                    className='bg-primary p-20 text-white text-center md:text-left'
                    direction='column'
                    gap='large'
                >
                    <Grid wrapper colGap='large' rowGap='large'>
                        <Grid span={{ default: 12, md: 12, lg: 12, xl: 4 }}>
                            <Flex
                                direction='column'
                                gap='large'
                                align='center'
                                className='min-h-20'
                            >
                                <Text size='h4' className='font-bold'>
                                    RTADMIN
                                </Text>
                            </Flex>
                        </Grid>
                        <Grid span={{ default: 12, md: 6, lg: 6, xl: 2 }}>
                            <Flex direction='column' gap='large'>
                                <Text size='h5' className='font-bold'>
                                    VISIT US
                                </Text>
                                <Text>XXX state YY district XX street</Text>
                                <Text>Contact US?</Text>
                                <Text>000-xxxxxxxx</Text>
                                <Text>000-xxxxxxxx</Text>
                            </Flex>
                        </Grid>
                        <Grid span={{ default: 12, md: 6, lg: 6, xl: 2 }}>
                            <Flex direction='column' gap='large'>
                                <Text size='h5' className='font-bold'>
                                    TECH STACK
                                </Text>
                                <Text>
                                    <Link href='#'>NextJS</Link>
                                </Text>
                                <Text>
                                    <Link href='#'>Typescript</Link>
                                </Text>
                                <Text>
                                    <Link href='#'>Tailwindcss</Link>
                                </Text>
                            </Flex>
                        </Grid>
                        <Grid span={{ default: 12, md: 6, lg: 6, xl: 2 }}>
                            <Flex direction='column' gap='large'>
                                <Text size='h5' className='font-bold'>
                                    BE IN TOUCH
                                </Text>
                                <Text>
                                    <Link href='https://github.com/akamuinsaner'>
                                        GitHub
                                    </Link>
                                </Text>
                                <Text>
                                    <Link href='https://www.linkedin.com/in/elcidwang/'>
                                        Linkin
                                    </Link>
                                </Text>
                                <Text>
                                    <Link href='https://codingtheworld.site/#'>
                                        Portfolio
                                    </Link>
                                </Text>
                                <Text>
                                    <Link href='mailto:elcidwang@gmail.com'>
                                        Email
                                    </Link>
                                </Text>
                            </Flex>
                        </Grid>
                        <Grid span={{ default: 12, md: 6, lg: 6, xl: 2 }}>
                            <Flex direction='column' gap='large'>
                                <Text size='h5' className='font-bold'>
                                    OTHERS
                                </Text>
                                <Text>
                                    <Link href='https://mr-component.site/'>
                                        mr-component
                                    </Link>
                                </Text>
                            </Flex>
                        </Grid>
                    </Grid>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Navigation;
