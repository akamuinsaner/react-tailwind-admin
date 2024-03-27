'use client';
import { simpleRequest } from '@/app/utils/request';
import Box from '@/src/components/Box';
import Card from '@/src/components/Card';
import Image from '@/src/components/Image';
import CardBody from '@/src/components/Card/CardBody';
import Carousel from '@/src/components/Carousel';
import CarouselItem from '@/src/components/Carousel/CarouselItem';
import Flex from '@/src/components/Flex';
import { useCallback, useEffect, useRef, useState } from 'react';

const CarouselPage = () => {
    const [images, setImages] = useState<any[]>([]);
    const fetchList = useCallback(() => {
        simpleRequest(`http://localhost:3001/unsplash/list`, {
            data: {
                page: 1,
                perPage: 10,
            },
        }).then((res: any) => {
            setImages(res.results);
        });
    }, [images]);
    useEffect(() => {
        fetchList();
    }, []);
    const onCarousel = (active, children) => {
        children.forEach((element: HTMLDivElement, index) => {
            // element.style.transition = `
            //     transform 0.3s
            // `;
            element.style.transform = `
            scale(${1 - Math.abs(active - index) * 0.1})
            `;
        });
    };
    return (
        <Flex
            align='center'
            justify='center'
            className='h-full w-full overflow-hidden'
        >
            <Carousel
                className='h-4/5 w-full'
                autoPlay
                loop
                centered
                slidesPerView={5}
                space={10}
                onCarousel={onCarousel}
            >
                {images.map(image => (
                    <CarouselItem>
                        <Image
                            src={image.urls.regular}
                            className='h-full w-full object-center object-cover'
                        />
                    </CarouselItem>
                ))}
            </Carousel>
        </Flex>
    );
};

export default CarouselPage;
