'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Text from '@/src/components/Text';
import Image from 'next/image';
import Hotel from '@/public/commercial/hotel.jpg';
import bangkok from '@/public/commercial/bangkok.jpg';
import ship from '@/public/commercial/ship.jpg';
import Button from '@/src/components/Button';
import Rate from '@/src/components/Rate';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Tag from '@/src/components/Tag';

const Travel = () => {
    return (
        <Card>
            <CardHeader>Travel</CardHeader>
            <CardBody>
                <Flex
                    justify='center'
                    direction='column'
                    align='center'
                    gap='medium'
                >
                    <Card className='w-auto'>
                        <CardBody>
                            <Flex direction='column' gap='small' align='start'>
                                <Image src={Hotel} alt='hotel' width={300} />
                                <Text size='h6' className='font-bold'>
                                    RTA Hotel
                                </Text>
                                <Rate size='small' value={4.6} readOnly />
                                <Flex align='center'>
                                    <Button size='small' className='mr-1'>
                                        4.6/5
                                    </Button>
                                    <Text>Excellent</Text>
                                </Flex>
                                <Flex
                                    justify='between'
                                    align='center'
                                    className='w-full'
                                >
                                    <Text>1234 comments</Text>
                                    <Text
                                        size='h6'
                                        className='font-bold text-primary'
                                    >
                                        $--
                                    </Text>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                    <Card className='w-auto'>
                        <CardBody className='relative'>
                            <Flex gap='small' className=' w-[400px]'>
                                <Image
                                    src={bangkok}
                                    alt='bangkok'
                                    height={100}
                                    objectFit='cover'
                                    objectPosition='center'
                                />
                                <Flex
                                    direction='column'
                                    gap='small'
                                    justify='center'
                                >
                                    <Text size='h6' className='font-bold'>
                                        Bangkok
                                    </Text>
                                    <Flex gap='small' wrap='wrap'>
                                        <Tag color='lime'>Grand Palace</Tag>
                                        <Tag color='yellow'>Wat Pho</Tag>
                                        <Tag color='rose'>Wat Arun</Tag>
                                    </Flex>
                                    <Text>17/08 Tue</Text>
                                </Flex>
                            </Flex>
                            <Text className='absolute top-4 right-4' size='tip'>
                                more flight &gt;
                            </Text>
                            <Text
                                size='h6'
                                className='text-primary absolute bottom-4 right-4'
                            >
                                $---
                            </Text>
                        </CardBody>
                    </Card>
                    <Card className='w-auto'>
                        <CardBody>
                            <Flex direction='column' gap='small'>
                                <Image src={ship} alt='ship' width={300} />
                            </Flex>
                            <Text className='w-[300px] font-bold'>
                                RTA cruise ship · free trip for 5 days amd 4
                                night 【brand new】
                            </Text>
                            <Text size='h6' className='text-primary'>
                                $---
                            </Text>
                        </CardBody>
                    </Card>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Travel;
