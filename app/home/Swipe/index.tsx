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

const Swipe = () => {
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
    return (
        <Card>
            <CardBody>
                <Carousel
                    autoPlay
                    loop
                    centered
                    slidesPerView={1}
                    className='h-96'
                    pagination
                    navigation
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
            </CardBody>
        </Card>
    );
};

export default Swipe;
