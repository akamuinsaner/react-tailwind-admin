'use client';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Checkbox from '@/src/components/Checkbox';
import Divider from '@/src/components/Divider';
import Flex from '@/src/components/Flex';
import Radio from '@/src/components/Radio';
import RadioGroup from '@/src/components/Radio/RadioGroup';
import Slider from '@/src/components/Slider';
import { useState } from 'react';

const Gap = () => {
    const [vertical, setVertical] = useState<any>(false);
    const [gap, setGap] = useState<any>('medium');
    const [gapNumber, setGapNumber] = useState<number>(0);
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Gap</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <Flex gap='medium'>
                        <RadioGroup
                            value={gap}
                            onChange={e => setGap(e.target.value)}
                        >
                            <Radio value='small'>small</Radio>
                            <Radio value='medium'>medium</Radio>
                            <Radio value='large'>large</Radio>
                        </RadioGroup>
                        <Checkbox
                            checked={vertical}
                            onChange={e => setVertical(e.target.checked)}
                        >
                            vertical
                        </Checkbox>
                    </Flex>
                    <Slider
                        value={gapNumber}
                        onChange={value => {
                            setGap(null);
                            setGapNumber(value);
                        }}
                    />
                    <Flex direction={!vertical ? 'column' : 'row'}>
                        <Button>react</Button>
                        <Divider vertical={vertical} gap={gap || gapNumber} />
                        <Button>tailwind</Button>
                        <Divider vertical={vertical} gap={gap || gapNumber} />
                        <Button>admin</Button>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Gap;
