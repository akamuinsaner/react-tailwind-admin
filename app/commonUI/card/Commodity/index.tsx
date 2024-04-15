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

const Commodity = () => {
    return (
        <Card>
            <CardHeader>Commodity</CardHeader>
            <CardBody>
                <Flex
                    gap='medium'
                    direction='column'
                    justify='center'
                    align='center'
                >
                    <Card className='w-[300px]'>
                        <CardBody>
                            <Flex direction='column' gap='small'>
                                <Image src={Product1} alt='commercial' />
                                <Text size='body'>RTA milk 1L </Text>
                                <Text size='h6' className='font-bold'>
                                    CNY 9.9
                                </Text>
                                <Flex gap='medium'>
                                    <Text size='tip' className='line-through'>
                                        CNY 19.8
                                    </Text>
                                    <Text
                                        size='tip'
                                        className='font-bold text-red-600'
                                    >
                                        50% OFF
                                    </Text>
                                </Flex>
                                <Text size='tip'>Delivered by 17th Aug</Text>
                            </Flex>
                        </CardBody>
                    </Card>
                    <Card className='w-auto'>
                        <CardBody className='relative'>
                            <Flex gap='small'>
                                <Image
                                    src={Product1}
                                    alt='commercial'
                                    height={200}
                                />
                                <Flex direction='column' gap='small'>
                                    <Text size='h6' className='font-bold'>
                                        <Tag
                                            variant='contained'
                                            color='red'
                                            className='mr-1'
                                        >
                                            RTA
                                        </Tag>
                                        [Gift] RTA milk 1L pure <br /> no
                                        additive mild for kids
                                    </Text>
                                    <Text
                                        size='body'
                                        className='text-orange-500'
                                    >
                                        10+ commented "smells good"
                                    </Text>
                                    <Flex gap='medium' align='center'>
                                        <Text size='h6' className='font-bold'>
                                            CNY 19.8
                                        </Text>
                                        <Text size='body'>3000+ paid</Text>
                                    </Flex>
                                    <Text size='body'>
                                        Delivered by 17th Aug
                                    </Text>
                                    <Text
                                        size='body'
                                        className='flex itesm-center'
                                    >
                                        RTA store{' '}
                                        <ChevronRightIcon className='w-4 ml-1' />
                                    </Text>
                                </Flex>
                                <ShoppingCartIcon className='w-6 h-6 absolute bottom-4 right-4' />
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Commodity;
