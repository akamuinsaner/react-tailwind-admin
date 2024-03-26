import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import Carousel from '@/src/components/Carousel';
import CarouselItem from '@/src/components/Carousel/CarouselItem';
import Box from '@/src/components/Box';

const Centered = () => {
    return (
        <Card>
            <CardHeader>Centered</CardHeader>
            <CardBody>
                <Box className='h-64 px-32 py-12'>
                    <Carousel
                        centered
                        slidesPerView={3}
                        autoPlay
                        loop
                        space={20}
                        className='text-white text-3xl'
                    >
                        <CarouselItem className='bg-primary'>
                            slide 1
                        </CarouselItem>
                        <CarouselItem className='bg-primary'>
                            slide 2
                        </CarouselItem>
                        <CarouselItem className='bg-primary'>
                            slide 3
                        </CarouselItem>
                        <CarouselItem className='bg-primary'>
                            slide 4
                        </CarouselItem>
                        <CarouselItem className='bg-primary'>
                            slide 5
                        </CarouselItem>
                        <CarouselItem className='bg-primary'>
                            slide 6
                        </CarouselItem>
                        <CarouselItem className='bg-primary'>
                            slide 7
                        </CarouselItem>
                        <CarouselItem className='bg-primary'>
                            slide 8
                        </CarouselItem>
                        <CarouselItem className='bg-primary'>
                            slide 9
                        </CarouselItem>
                    </Carousel>
                </Box>
            </CardBody>
        </Card>
    );
};

export default Centered;
