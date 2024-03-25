'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Grid from '@/src/components/Grid';
import Radio from '@/src/components/Radio';
import RadioGroup from '@/src/components/Radio/RadioGroup';
import { useState } from 'react';

const Gap = () => {
    const [gap, setGap] = useState<'small' | 'medium' | 'large'>('medium');
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Gap</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <RadioGroup
                        value={gap}
                        onChange={(e: any) => setGap(e.target.value)}
                    >
                        <Radio value='small'>small</Radio>
                        <Radio value='medium'>medium</Radio>
                        <Radio value='large'>large</Radio>
                    </RadioGroup>
                    <Grid wrapper rowGap={gap} colGap={gap}>
                        <Grid
                            span={3}
                            className='text-center py-4 bg-primary text-white'
                        >
                            3
                        </Grid>
                        <Grid
                            span={3}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            3
                        </Grid>
                        <Grid
                            span={3}
                            className='text-center py-4 bg-primary text-white'
                        >
                            3
                        </Grid>
                        <Grid
                            span={3}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            3
                        </Grid>
                        <Grid
                            span={3}
                            className='text-center py-4 bg-primary text-white'
                        >
                            3
                        </Grid>
                        <Grid
                            span={3}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            3
                        </Grid>
                        <Grid
                            span={3}
                            className='text-center py-4 bg-primary text-white'
                        >
                            3
                        </Grid>
                        <Grid
                            span={3}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            3
                        </Grid>
                        <Grid
                            span={3}
                            className='text-center py-4 bg-primary text-white'
                        >
                            3
                        </Grid>
                        <Grid
                            span={3}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            3
                        </Grid>
                        <Grid
                            span={3}
                            className='text-center py-4 bg-primary text-white'
                        >
                            3
                        </Grid>
                        <Grid
                            span={3}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            3
                        </Grid>
                    </Grid>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Gap;
