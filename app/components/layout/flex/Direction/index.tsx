'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Radio from '@/src/components/Radio';
import RadioGroup from '@/src/components/Radio/RadioGroup';
import { useState } from 'react';

const Direction = () => {
    const [direction, setDirection] = useState<'row' | 'column'>('row');
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Direction</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <RadioGroup
                        value={direction}
                        onChange={e => setDirection(e.target.value as any)}
                    >
                        <Radio value='row'>Row</Radio>
                        <Radio value='column'>Column</Radio>
                    </RadioGroup>
                    <Flex direction={direction}>
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

export default Direction;
