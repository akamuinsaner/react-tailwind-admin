import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import Carousel from '@/src/components/Carousel';
import CarouselItem from '@/src/components/Carousel/CarouselItem';
import Box from '@/src/components/Box';

const Loop = () => {
    return (
        <Card>
            <CardHeader>Loop</CardHeader>
            <CardBody>
                <Box className='h-64 px-32 py-12'>
                    <Carousel
                        autoPlay
                        loop
                        className='bg-primary text-white text-3xl'
                    >
                        <CarouselItem>slide 1</CarouselItem>
                        <CarouselItem>slide 2</CarouselItem>
                        <CarouselItem>slide 3</CarouselItem>
                        <CarouselItem>slide 4</CarouselItem>
                        <CarouselItem>slide 5</CarouselItem>
                        <CarouselItem>slide 6</CarouselItem>
                        <CarouselItem>slide 7</CarouselItem>
                        <CarouselItem>slide 8</CarouselItem>
                        <CarouselItem>slide 9</CarouselItem>
                    </Carousel>
                </Box>
            </CardBody>
        </Card>
    );
};

export default Loop;
