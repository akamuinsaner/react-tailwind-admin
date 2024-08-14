import Box from '@/src/components/Box';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import List from '@/src/components/List';
import ListItem from '@/src/components/List/ListItem';
import Tag from '@/src/components/Tag';
import Text from '@/src/components/Text';

const Single = () => {
    return (
        <Card>
            <CardHeader>Single</CardHeader>
            <CardBody>
                <Box className='w-[375px] md:w-[768px] 2xl:w-[1440px] p-4 m-auto shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
                    <Box className='w-full shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] px-3 py-12 md:px-4 md:py-16 2xl:p-24'>
                        <Flex
                            direction='column'
                            align='center'
                            className='p-0 md:pb-0 2xl:px-40 2xl:pb-0 mb-16'
                        >
                            <Text className='text-base text-indigo-700 font-semibold mb-3'>
                                One time purchase
                            </Text>
                            <Text className='text-3xl md:text-5xl font-semibold text-neutral-900 mb-5'>
                                Pay as you need
                            </Text>
                            <Text className='text-center leading-7 text-lg md:text-xl text-neutral-600'>
                                We offer one-time purchases with credits, for you to use as needed. Always active.
                            </Text>
                        </Flex>
                        <Box className='flex flex-col 2xl:flex-row 2xl:items-center gap-8 md:gap-12 2xl:gap-0 2xl:justify-between'>
                            <Box className='flex flex-col gap-8 md:gap-16 2xl:gap-16'>
                                <Text className='font-semibold text-neutral-900 text-2xl md:text-4xl'>Unlock creativity once, enjoy forever</Text>
                                <List className='flex flex-col gap-5 mb-auto'>
                                    <ListItem className='flex p-0'>
                                        <Box className='w-6 h-6 bg-indigo-50 mr-3 rounded-full text-center leading-6'>
                                            ✔️
                                        </Box>
                                        <Text className='text-neutral-600 text-base'>
                                            128 available credits for all images
                                        </Text>
                                    </ListItem>
                                    <ListItem className='flex p-0'>
                                        <Box className='w-6 h-6 bg-indigo-50 mr-3 rounded-full text-center leading-6'>
                                            ✔️
                                        </Box>
                                        <Text className='text-neutral-600 text-base'>
                                            Up to 3 users
                                        </Text>
                                    </ListItem>
                                    <ListItem className='flex p-0'>
                                        <Box className='w-6 h-6 bg-indigo-50 mr-3 rounded-full text-center leading-6'>
                                            ✔️
                                        </Box>
                                        <Text className='text-neutral-600 text-base'>
                                            24 hour response time
                                        </Text>
                                    </ListItem>
                                    <ListItem className='flex p-0'>
                                        <Box className='w-6 h-6 bg-indigo-50 mr-3 rounded-full text-center leading-6'>
                                            ✔️
                                        </Box>
                                        <Text className='text-neutral-600 text-base'>
                                            Advanced analytics
                                        </Text>
                                    </ListItem>
                                </List>
                            </Box>
                            <Box className='w-full 2xl:w-[487px] p-8 flex flex-col gap-8 items-center rounded-lg border-solid border border-neutral-200 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]'>
                                <Box className='flex flex-col items-center gap-2'>
                                    <Tag className='w-[72px] h-7 rounded-full bg-green-50 border-solid border border-green-200 text-sm leading-7 text-center text-green-700'>Popular</Tag>
                                    <Text className='font-semibold md:font-bold color-neutral-900 text-5xl md:text-6xl'>$699</Text>
                                    <Text className='text-sm text-neutral-600'>Prices in USD</Text>
                                </Box>
                                <Box className='text-center text-neutral-900 text-xl w-[190px] md:w-[240px]'>
                                    Pay once, use it forever. No strings attached.
                                </Box>
                                <Box
                                    className='w-full h-[44px] md:h-[48px] flex items-center justify-center text-center text-white rounded bg-indigo-700 text-base shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]'
                                >Buy now</Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </CardBody>
        </Card>
    );
};

export default Single;
