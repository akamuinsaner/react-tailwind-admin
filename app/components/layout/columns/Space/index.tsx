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

const Space = () => {
    const [space, setSpace] = useState<'small' | 'medium' | 'large'>('medium');
    const [spaceNumber, setSpaceNumber] = useState<number>(0);
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Space</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <RadioGroup
                        value={space}
                        onChange={e => setSpace(e.target.value as any)}
                    >
                        <Radio value='small'>small</Radio>
                        <Radio value='medium'>medium</Radio>
                        <Radio value='large'>large</Radio>
                    </RadioGroup>
                    <Slider
                        value={spaceNumber}
                        onChange={(value: number) => {
                            setSpace(null);
                            setSpaceNumber(value);
                        }}
                    />
                    <Columns
                        space={space || spaceNumber}
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

export default Space;
