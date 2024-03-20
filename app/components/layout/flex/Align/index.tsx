'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Radio from '@/src/components/Radio';
import RadioGroup from '@/src/components/Radio/RadioGroup';
import { useState } from 'react';

const Align = () => {
    const [align, setAlign] = useState<'start' | 'center' | 'end'>('start');
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Align</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <RadioGroup
                        value={align}
                        onChange={e => setAlign(e.target.value as any)}
                    >
                        <Radio value='start'>start</Radio>
                        <Radio value='center'>center</Radio>
                        <Radio value='end'>end</Radio>
                    </RadioGroup>
                    <Flex
                        align={align}
                        className='h-36 border border-mainBorder'
                    >
                        {Array(6)
                            .fill(0)
                            .map((a, i) => (
                                <div
                                    className={`grow shrink-0 h-12 ${i % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}
                                ></div>
                            ))}
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Align;
