'use client';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Radio from '@/src/components/Radio';
import RadioGroup from '@/src/components/Radio/RadioGroup';
import { useState } from 'react';

const Justify = () => {
    const [justify, setJustify] = useState<any>('start');
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Justify</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <RadioGroup
                        value={justify}
                        onChange={e => setJustify(e.target.value as any)}
                    >
                        <Radio value='start'>start</Radio>
                        <Radio value='center'>center</Radio>
                        <Radio value='end'>end</Radio>
                        <Radio value='between'>between</Radio>
                        <Radio value='around'>around</Radio>
                        <Radio value='evenly'>evenly</Radio>
                    </RadioGroup>
                    <Flex justify={justify}>
                        {Array(6)
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

export default Justify;
