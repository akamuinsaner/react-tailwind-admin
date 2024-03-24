'use client';
import Badge, {
    RTBadgeHorizontal,
    RTBadgeVertical,
} from '@/src/components/Badge';
import Button from '@/src/components/Button';
import ButtonGroup from '@/src/components/Button/ButtonGroup';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Position = () => {
    const [vertical, setVertical] = useState<RTBadgeVertical>('top');
    const [horizontal, setHorizontal] = useState<RTBadgeHorizontal>('right');
    const verticals: RTBadgeVertical[] = ['top', 'middle', 'bottom'];
    const horizontals: RTBadgeHorizontal[] = ['left', 'center', 'right'];
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Position</CardHeader>
            <CardBody>
                <Flex
                    direction='column'
                    align='center'
                    justify='center'
                    gap='large'
                >
                    <ButtonGroup variant='outlined'>
                        {horizontals.map(item => (
                            <Button
                                key={item}
                                onClick={() => setHorizontal(item)}
                                variant={
                                    horizontal === item
                                        ? 'contained'
                                        : 'outlined'
                                }
                            >
                                {item}
                            </Button>
                        ))}
                    </ButtonGroup>
                    <Badge
                        count={100}
                        vertical={vertical}
                        horizontal={horizontal}
                    >
                        <EnvelopeIcon className='h-6 w-6' />
                    </Badge>
                    <ButtonGroup variant='outlined'>
                        {verticals.map(item => (
                            <Button
                                key={item}
                                onClick={() => setVertical(item)}
                                variant={
                                    vertical === item ? 'contained' : 'outlined'
                                }
                            >
                                {item}
                            </Button>
                        ))}
                    </ButtonGroup>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Position;
