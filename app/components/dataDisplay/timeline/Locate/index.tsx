'use client';
import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import Timeline, { RTTImelineLocate } from '@/src/components/Timeline';
import TimelineItem from '@/src/components/Timeline/TimelineItem';
import TimelineContent from '@/src/components/Timeline/TimelineContent';
import TimelineToken from '@/src/components/Timeline/TimelineToken';
import TimelineConnector from '@/src/components/Timeline/TimelineConnector';
import Flex from '@/src/components/Flex';
import RadioGroup from '@/src/components/Radio/RadioGroup';
import Radio from '@/src/components/Radio';
import { useState } from 'react';

const Locate = () => {
    const [locate, setLocate] = useState<RTTImelineLocate>('center');
    return (
        <Card>
            <CardHeader>Locate</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <RadioGroup
                        value={locate}
                        onChange={e => setLocate(e.target.value as any)}
                    >
                        <Radio value='left'>left</Radio>
                        <Radio value='center'>center</Radio>
                        <Radio value='right'>right</Radio>
                    </RadioGroup>
                    <Timeline locate={locate}>
                        <TimelineItem>
                            <TimelineToken></TimelineToken>
                            <TimelineConnector />
                            <TimelineContent>
                                BAA is formed. The Basketball Association of
                                America is founded
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineToken></TimelineToken>
                            <TimelineConnector />
                            <TimelineContent>
                                BAA's first championship
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineToken></TimelineToken>
                            <TimelineConnector />
                            <TimelineContent>NBA is formed</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineToken></TimelineToken>
                            <TimelineContent>
                                First All-Star Game
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Locate;
