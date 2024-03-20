'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Columns from '@/src/components/Columns';
import Flex from '@/src/components/Flex';
import Radio from '@/src/components/Radio';
import RadioGroup from '@/src/components/Radio/RadioGroup';
import Slider from '@/src/components/Slider';
import { useState } from 'react';

const Gap = () => {
    const [gap, setGap] = useState<'small' | 'medium' | 'large'>('medium');
    const [gapNumber, setGapNumber] = useState<number>(0);
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Gap</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <RadioGroup
                        value={gap}
                        onChange={e => setGap(e.target.value as any)}
                    >
                        <Radio value='small'>small</Radio>
                        <Radio value='medium'>medium</Radio>
                        <Radio value='large'>large</Radio>
                    </RadioGroup>
                    <Slider
                        value={gapNumber}
                        onChange={(value: number) => {
                            setGap(null);
                            setGapNumber(value);
                        }}
                    />
                    <Columns
                        gap={gap || gapNumber}
                        count={{ default: 1, md: 2, xl: 3 }}
                    >
                        {Array(6)
                            .fill(0)
                            .map((a, i) => (
                                <Flex
                                    align='center'
                                    justify='center'
                                    className={`h-12 ${i % 2 === 0 ? 'bg-primary' : 'bg-secondary'} text-white`}
                                >
                                    {i + 1}
                                </Flex>
                            ))}
                    </Columns>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Gap;
