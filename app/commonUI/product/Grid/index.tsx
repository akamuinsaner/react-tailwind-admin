import Box from '@/src/components/Box';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import List from '@/src/components/List';
import ListItem from '@/src/components/List/ListItem';
import Tag from '@/src/components/Tag';
import { default as GridComp }from '@/src/components/Grid';
import Text from '@/src/components/Text';
import Image from 'next/image';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';
import image5 from './5.jpg';
import image6 from './6.jpg';
import image7 from './7.jpg';
import image8 from './8.jpg';

const list = [
    {
        image: image1,
        color: 'Black',
        name: 'Urban Drift Bucket Hat',
        price: '$15',
        colors: ['bg-black', 'bg-white'],
    },
    {
        image: image2,
        color: 'Orange',
        name: 'Tangerine Mini Tote',
        price: '$150',
        colors: ['bg-orange-600']
    },
    {
        image: image3,
        color: 'Beige',
        name: 'Elemental Sneakers',
        price: '$80',
        originPrice: '$100',
        colors: ['#D2B08A'],
        colorPosition: 'inline'
    },
    {
        image: image4,
        color: 'Black',
        name: 'Metro Hoodie',
        price: '$810',
        originPrice: '$90',
        colors: ['bg-black'],
    },
    {
        image: image5,
        color: 'Yellow',
        name: 'Sunbeam Mules',
        price: '$68',
        originPrice: '$85',
        colors: ['bg-yellow-500'],
    },
    {
        image: image6,
        color: 'Blue',
        name: 'Azure Attitude Shades',
        price: '$45',
        colors: ['bg-blue-600'],
    },
    {
        image: image7,
        color: 'Green',
        name: 'Voyager Hoodie',
        price: '$76',
        originPrice: '$95',
        colors: ['bg-lime-600', 'yellow-600'],
    },
    {
        image: image8,
        color: 'Black',
        name: 'LA Baseball Hat',
        price: '$20',
        colors: ['bg-black'],
    }
]

const Grid = () => {
    return (
        <Card>
            <CardHeader>Grid</CardHeader>
            <CardBody>
                <Box className='w-[375px] md:w-[768px] 2xl:w-[1440px] p-4 m-auto shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
                    <Box className='w-full shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] px-3 py-12 2xl:p-24'>
                        <Flex direction='column' className='gap-8'>
                            <Flex className='justify-between items-center'>
                                <Text className='text-2xl font-semibold text-neutral-900'>Latest Arrivals</Text>
                                <Box
                                    className='w-[95px] h-[44px] flex items-center justify-center border border-solid border-neutral-200 rounded shadow-[0_1px_3px_0_rgba(0,0,0,0.2)] text-base text-neutral-900'
                                >View all</Box>
                            </Flex>
                            <Flex wrap="wrap" className='gap-8'>
                                {list.map(item => {
                                    return (
                                        <Box className='w-full md:w-[336px] 2xl:w-[280px]'>
                                            <Image
                                                alt=""
                                                src={item.image}
                                                className='w-full rounded-lg object-center object-cover md:h-[300px]'
                                            />
                                            <Flex direction='column' className='py-4 gap-3'>
                                                <Flex direction='column'>
                                                    <Text className='text-neutral-600 text-xs'>{item.color}</Text>
                                                    <Text className='text-neutral-900 text-lg'>{item.name}</Text>
                                                </Flex>
                                                <Flex align='center' className='text-neutral-500 gap-2'>
                                                    <Text className=' text-lg'>{item.price}</Text>
                                                    {item.originPrice ? (
                                                        <Text className='text-xs line-through'>{item.originPrice}</Text>
                                                    ) : null}
                                                </Flex>
                                                <Flex className='gap-1'>
                                                    {item.colors.map(c => (<Flex
                                                        className='h-6 w-6'
                                                        align='center'
                                                        justify='center'
                                                    >
                                                        <Box
                                                            className={`w-4 h-4 rounded-full border border-solid border-neutral-300 ${c}`}
                                                            style={{
                                                                background: item.colorPosition === 'inline' ? c : null
                                                            }}
                                                        ></Box>
                                                    </Flex>))}
                                                </Flex>
                                            </Flex>
                                        </Box>
                                    )
                                })}
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
            </CardBody>
        </Card>
    );
};

export default Grid;
