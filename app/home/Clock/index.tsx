'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import Flex from '@/src/components/Flex';
import { useState, useEffect } from 'react';

const Clock = () => {
    const [hms, setHms] = useState({
        h: 0,
        m: 0,
        s: 0,
    });

    useEffect(() => {
        const now = new Date();
        const h = now.getHours();
        const m = now.getMinutes();
        const s = now.getSeconds();
        let timer = setInterval(() => {
            setHms({
                h,
                m,
                s,
            });
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [hms]);
    return (
        <Card>
            <CardBody>
                <Flex align='center' justify='center'>
                    <div className='w-96 h-96 rounded-full relative border-4 border-primary'>
                        {Array(12)
                            .fill(0)
                            .map((a, i) => (
                                <div
                                    className='absolute bottom-1/2 origin-bottom h-1/2 pt-2 left-1/2 text-mainText'
                                    style={{
                                        transform: `translateX(-50%) rotate(${30 * (i + 1)}deg)`,
                                    }}
                                >
                                    <div
                                        className='origin-center'
                                        style={{
                                            transform: `rotate(${-30 * (i + 1)}deg)`,
                                        }}
                                    >
                                        {i + 1}
                                    </div>
                                </div>
                            ))}
                        <div
                            className='w-1 h-24 absolute bottom-1/2 origin-bottom bg-primary left-[calc(50%-2px)]'
                            style={{
                                transform: `rotate(${hms.h * 30 + hms.m * 0.5}deg)`,
                            }}
                        ></div>
                        <div
                            className='w-0.5 h-32 absolute bottom-1/2 origin-bottom bg-secondary left-[calc(50%-1px)]'
                            style={{
                                transform: `rotate(${hms.m * 6 + hms.s * 0.1}deg)`,
                            }}
                        ></div>
                        <div
                            className='w-px h-40 absolute bottom-1/2 origin-bottom bg-danger left-[calc(50%-0.5px)]'
                            style={{
                                transform: `rotate(${hms.s * 6}deg)`,
                            }}
                        ></div>
                    </div>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Clock;
