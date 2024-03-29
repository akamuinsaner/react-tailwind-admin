'use client';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Radio from '@/src/components/Radio';
import RadioGroup from '@/src/components/Radio/RadioGroup';
import Slider from '@/src/components/Slider';
import { useState } from 'react';

const Gap = () => {
    const [gap, setGap] = useState<any>('small');
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
                    <Flex gap={gap || gapNumber}>
                        {Array(4)
                            .fill(0)
                            .map((a, i) => (
                                <Button>button</Button>
                            ))}
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Gap;
