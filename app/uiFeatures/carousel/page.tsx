'use client';
import Box from '@/src/components/Box';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import Flex from '@/src/components/Flex';
import { useEffect, useRef, useState } from 'react';

const CarouselPage = () => {
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const cards = Array(10)
        .fill(0)
        .map((a, i) => i + 1);
    useEffect(() => {
        setContainerWidth(containerRef.current.offsetWidth);
    }, []);
    return (
        <Box ref={containerRef} className='h-96 w-96 overflow-hidden'>
            <Flex
                className='h-full'
            >
                {cards.map(card => {
                    return (
                        <Card
                            className='shrink-0'
                            style={{
                                height: '100%',
                                width: containerWidth,
                            }}
                        >
                            <CardBody className='flex items-center justify-center'>
                                slide {card}
                            </CardBody>
                        </Card>
                    );
                })}
            </Flex>
        </Box>
    );
};

export default CarouselPage;
