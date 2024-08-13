import Box from '@/src/components/Box';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import List from '@/src/components/List';
import ListItem from '@/src/components/List/ListItem';
import Text from '@/src/components/Text';

const Tiers = () => {
    return (
        <Card>
            <CardHeader>Tiers</CardHeader>
            <CardBody>
                <Box className='w-[375px] md:w-[768px] 2xl:w-[1440px] p-4 m-auto shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
                    <Box className='w-full shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] px-3 py-12 md:px-4 md:py-16 2xl:p-24'>
                        <Flex
                            direction='column'
                            align='center'
                            className='p-0 md:p-8 md:pb-0 2xl:px-40 2xl:pb-0 mb-12 md:mb-16'
                        >
                            <Text className='text-base text-indigo-700 font-semibold mb-3'>
                                Pricing Tiers
                            </Text>
                            <Text className='text-3xl md:text-5xl font-semibold text-neutral-900 mb-5'>
                                Fit for all your needs
                            </Text>
                            <Text className='text-center leading-7 text-lg md:text-xl text-neutral-600 mb-10'>
                                Pick the plan that suits you today and step up
                                as your demands grow - our flexible options have
                                your journey mapped out.
                            </Text>
                            <Box>
                                <Button className='w-[140px] h-11 hover:bg-white bg-white text-neutral-900 hover:text-neutral-900 border-none text-base mr-8'>
                                    Monthly
                                </Button>
                                <Button className='w-[140px] h-11 hover:bg-white bg-white text-neutral-900 hover:text-neutral-900 border-none text-base shadow-[0_1px_3px_0px_rgba(0,0,0,0.1)]'>
                                    Annually
                                </Button>
                            </Box>
                        </Flex>
                        <Flex
                            justify='between'
                            className='flex-col 2xl:flex-row gap-8 2xl:gap-0'
                        >
                            <Flex
                                direction='column'
                                className='w-full 2xl:w-96 h-auto 2xl:h-[668px] rounded-lg border-solid border border-neutral-200 p-4 md:p-8 gap-8'
                            >
                                <Box>
                                    <Text className='text-2xl font-semibold text-neutral-900 mb-2'>
                                        Basic Plan
                                    </Text>
                                    <Text className='text-base text-neutral-600'>
                                        Access to a curated selection of
                                        abstract images
                                    </Text>
                                </Box>
                                <Box>
                                    <Flex align='end'>
                                        <Text className='font-semibold text-5xl text-neutral-900'>
                                            $6.99
                                        </Text>
                                        <Text className='text-neutral-900 text-base'>
                                            /month
                                        </Text>
                                    </Flex>
                                    <Text className='text-neutral-600 text-base'>
                                        Billed annually ($84)
                                    </Text>
                                </Box>
                                <List className='flex flex-col gap-5 mb-auto md:h-[180px]'>
                                    <ListItem className='flex p-0'>
                                        <Box className='w-6 h-6 bg-indigo-50 mr-3 rounded-full text-center leading-6'>
                                            ✔️
                                        </Box>
                                        <Text className='text-neutral-600 text-base'>
                                            Standard quality images
                                        </Text>
                                    </ListItem>
                                    <ListItem className='flex p-0'>
                                        <Box className='w-6 h-6 bg-indigo-50 mr-3 rounded-full text-center leading-6'>
                                            ✔️
                                        </Box>
                                        <Text className='text-neutral-600 text-base'>
                                            Limited to personal use
                                        </Text>
                                    </ListItem>
                                    <ListItem className='flex p-0'>
                                        <Box className='w-6 h-6 bg-indigo-50 mr-3 rounded-full text-center leading-6'>
                                            ✔️
                                        </Box>
                                        <Text className='text-neutral-600 text-base'>
                                            Email support
                                        </Text>
                                    </ListItem>
                                </List>
                                <Button className='w-full h-12 bg-white hover:bg-white text-neutral-900 text-base hover:text-neutral-900 border-solid border border-neutral-200 hover:border-neutral-200 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]'>
                                    Buy now
                                </Button>
                            </Flex>
                            <Flex
                                direction='column'
                                className='w-full 2xl:w-96 h-auto 2xl:h-[668px] rounded-lg border-solid border border-neutral-200 p-4 md:p-8 gap-8 pt-0 md:pt-0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]'
                            >
                                <Box className='h-[60px] bg-indigo-50 text-center mx-[-16px] md:mx-[-32px] text-indigo-700 font-bold text-xl leading-[60px]'>
                                    Most Popular
                                </Box>
                                <Box>
                                <Text className='text-2xl font-semibold text-neutral-900 mb-2'>
                                    Standard Plan
                                </Text>
                                <Text className='whitespace-normal md:whitespace-nowrap text-base text-neutral-600'>
                                    Next-level Integrations, priced economically
                                </Text>
                                </Box>
                                <Box>
                                <Flex align='end' className='text-indigo-700'>
                                    <Text className='font-semibold text-5xl'>
                                        $15.99
                                    </Text>
                                    <Text className='text-base'>/month</Text>
                                </Flex>
                                <Text className='text-neutral-600 text-base'>
                                    Billed annually ($192)
                                </Text>
                                </Box>

                                <List className='flex flex-col gap-5 mb-auto'>
                                    <ListItem className='flex p-0'>
                                        <Box className='w-6 h-6 bg-indigo-50 mr-3 rounded-full text-center leading-6'>
                                            ✔️
                                        </Box>
                                        <Text className='text-neutral-600 text-base'>
                                            Expanded library with more diverse
                                            abstract images
                                        </Text>
                                    </ListItem>
                                    <ListItem className='flex p-0'>
                                        <Box className='w-6 h-6 bg-indigo-50 mr-3 rounded-full text-center leading-6'>
                                            ✔️
                                        </Box>
                                        <Text className='text-neutral-600 text-base'>
                                            High-resolution images available
                                        </Text>
                                    </ListItem>
                                    <ListItem className='flex p-0'>
                                        <Box className='w-6 h-6 bg-indigo-50 mr-3 rounded-full text-center leading-6'>
                                            ✔️
                                        </Box>
                                        <Text className='text-neutral-600 text-base'>
                                            Suitable for commercial use
                                        </Text>
                                    </ListItem>
                                    <ListItem className='flex p-0'>
                                        <Box className='w-6 h-6 bg-indigo-50 mr-3 rounded-full text-center leading-6'>
                                            ✔️
                                        </Box>
                                        <Text className='text-neutral-600 text-base'>
                                            Priority email support
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
                                <Button className='w-full h-12 bg-indigo-700 hover:bg-indigo-700 text-white text-base hover:text-white border-solid border border-neutral-200 hover:border-neutral-200 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]'>
                                    Buy now
                                </Button>
                            </Flex>
                            <Flex
                                direction='column'
                                className='w-full 2xl:w-96 h-auto 2xl:h-[668px] rounded-lg border-solid border border-neutral-200 p-4 md:p-8 gap-8'
                            >
                                <Box>
                                    <Text className='text-2xl font-semibold text-neutral-900 mb-2'>
                                        Premium Plan
                                    </Text>
                                    <Text className='text-base text-neutral-600'>
                                        Experience limitless living for power
                                        users
                                    </Text>
                                </Box>
                                <Box>
                                    <Flex align='end'>
                                        <Text className='font-semibold text-5xl text-neutral-900'>
                                            $25.99
                                        </Text>
                                        <Text className='text-neutral-900 text-base'>
                                            /month
                                        </Text>
                                    </Flex>
                                    <Text className='text-neutral-600 text-base'>
                                        Billed annually ($312)
                                    </Text>
                                </Box>
                                <List className='flex flex-col gap-5 mb-auto'>
                                    <ListItem className='flex p-0'>
                                        <Box className='w-6 h-6 bg-indigo-50 mr-3 rounded-full text-center leading-6'>
                                            ✔️
                                        </Box>
                                        <Text className='text-neutral-600 text-base'>
                                            Full access to the entire image
                                            library, including exclusive content
                                        </Text>
                                    </ListItem>
                                    <ListItem className='flex p-0'>
                                        <Box className='w-6 h-6 bg-indigo-50 mr-3 rounded-full text-center leading-6'>
                                            ✔️
                                        </Box>
                                        <Text className='text-neutral-600 text-base'>
                                            Highest quality images, including
                                            premium collections
                                        </Text>
                                    </ListItem>
                                    <ListItem className='flex p-0'>
                                        <Box className='w-6 h-6 bg-indigo-50 mr-3 rounded-full text-center leading-6'>
                                            ✔️
                                        </Box>
                                        <Text className='text-neutral-600 text-base'>
                                            Commercial and resale rights
                                        </Text>
                                    </ListItem>
                                    <ListItem className='flex p-0'>
                                        <Box className='w-6 h-6 bg-indigo-50 mr-3 rounded-full text-center leading-6'>
                                            ✔️
                                        </Box>
                                        <Text className='text-neutral-600 text-base'>
                                            Dedicated customer support line
                                        </Text>
                                    </ListItem>
                                    <ListItem className='flex p-0'>
                                        <Box className='w-6 h-6 bg-indigo-50 mr-3 rounded-full text-center leading-6'>
                                            ✔️
                                        </Box>
                                        <Text className='text-neutral-600 text-base'>
                                            24/7 support response time
                                        </Text>
                                    </ListItem>
                                    <ListItem className='flex p-0'>
                                        <Box className='w-6 h-6 bg-indigo-50 mr-3 rounded-full text-center leading-6'>
                                            ✔️
                                        </Box>
                                        <Text className='text-neutral-600 text-base'>
                                            Advanced analytics and insights
                                        </Text>
                                    </ListItem>
                                </List>
                                <Button className='w-full h-12 bg-white hover:bg-white text-neutral-900 text-base hover:text-neutral-900 border-solid border border-neutral-200 hover:border-neutral-200 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]'>
                                    Buy now
                                </Button>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
            </CardBody>
        </Card>
    );
};

export default Tiers;
