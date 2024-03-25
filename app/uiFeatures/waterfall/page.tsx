'use client';
import { simpleRequest } from '@/app/utils/request';
import Box from '@/src/components/Box';
import Text from '@/src/components/Text';
import Image from '@/src/components/Image';
import Flex from '@/src/components/Flex';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

const ImageBox = ({ image }) => {
    const [showMask, setShowMask] = useState<boolean>(false);
    const createMask = useCallback(image => {
        return (
            <Box className='bg-black/30 absolute inset-0'>
                <Text className='absolute bottom-0 text-white w-full p-4'>
                    Photo by&nbsp;
                    <br />
                    <Link
                        target='_blank'
                        href='https://unsplash.com/@anniespratt?utm_source=react-tailwind-admin&utm_medium=referral'
                    >
                        {image.user.name}
                    </Link>
                    &nbsp;on&nbsp;
                    <Link
                        target='_blank'
                        href='https://unsplash.com/?utm_source=react-tailwind-admin&utm_medium=referral'
                    >
                        Unsplash
                    </Link>
                </Text>
            </Box>
        );
    }, []);
    return (
        <Box
            key={image.id}
            className='relative cursor-pointer'
            onMouseEnter={() => setShowMask(true)}
            onMouseLeave={() => setShowMask(false)}
        >
            <Image
                src={image.urls.small}
                className='w-full h-full'
                lazy={false}
            />
            {showMask ? createMask(image) : null}
        </Box>
    );
};

const Waterfall = () => {
    const isLoading = useRef<boolean>(false);
    const [images, setImages] = useState<any>([]);
    const [columnCount, setColumnCount] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const pageInfo = useRef<{
        page: number;
        pageSize: number;
        total: number;
    }>({
        page: 1,
        pageSize: 50,
        total: 0,
    });
    const heights = useMemo(() => {
        return Array(columnCount).fill(0);
    }, [columnCount]);

    const columns = useMemo(() => {
        if (!containerRef.current) return [];
        const columns = Array(columnCount)
            .fill(0)
            .map(i => []);
        const containerWidth = containerRef.current.offsetWidth;
        const columnWidth =
            (containerWidth - 16 * (columnCount - 1)) / columnCount;
        images.forEach(image => {
            const minHeight = Math.min(...heights);
            const minIndex = heights.indexOf(minHeight);
            const actualHeight =
                (columnWidth / image.width) * image.height + 16;
            heights[minIndex] += actualHeight;
            columns[minIndex].push(image);
        });
        return columns;
    }, [columnCount, images]);

    const fetchList = useCallback(() => {
        isLoading.current = true;
        simpleRequest(`http://localhost:3001/unsplash/list`, {
            data: {
                page: pageInfo.current.page,
                perPage: pageInfo.current.pageSize,
            },
        })
            .then((res: any) => {
                pageInfo.current.total = res.total;
                setImages([...images, ...res.results]);
            })
            .finally(() => {
                isLoading.current = false;
            });
    }, [images]);

    const loadMore = useCallback(() => {
        if (isLoading.current) return;
        const de = document.documentElement;
        if (de.offsetHeight - de.scrollTop - window.innerHeight < 1000) {
            pageInfo.current.page += 1;
            fetchList();
        }
    }, [images]);

    useEffect(() => {
        fetchList();
    }, []);

    const computeColumnCount = useCallback(() => {
        const containerWidth = containerRef.current.offsetWidth;
        const count = Math.floor(containerWidth / 300);
        setColumnCount(count);
    }, []);

    useEffect(() => {
        computeColumnCount();
        window.addEventListener('resize', computeColumnCount);
        return () => window.removeEventListener('resize', computeColumnCount);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', loadMore);
        return () => window.removeEventListener('scroll', loadMore);
    }, [images]);

    return (
        <Flex ref={containerRef} gap='medium'>
            {Array(columnCount)
                .fill(0)
                .map((a, i) => {
                    const column = columns[i];
                    return (
                        <Flex
                            direction='column'
                            className='flex-1'
                            gap='medium'
                        >
                            {column.map(image => {
                                return <ImageBox image={image} />;
                            })}
                        </Flex>
                    );
                })}
        </Flex>
    );
};

export default Waterfall;
