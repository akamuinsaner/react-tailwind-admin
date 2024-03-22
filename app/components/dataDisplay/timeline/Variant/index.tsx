'use client';
import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import Timeline from '@/src/components/Timeline';
import TimelineItem from '@/src/components/Timeline/TimelineItem';
import TimelineContent from '@/src/components/Timeline/TimelineContent';
import { RTTImelineVariant } from '@/src/components/Timeline';
import TimelineConnector from '@/src/components/Timeline/TimelineConnector';
import { useState } from 'react';
import Flex from '@/src/components/Flex';
import RadioGroup from '@/src/components/Radio/RadioGroup';
import Radio from '@/src/components/Radio';
import TimelineToken from '@/src/components/Timeline/TimelineToken';

const Variant = () => {
    const [variant, setVariant] = useState<RTTImelineVariant>('outlined');
    return (
        <Card>
            <CardHeader>Variant</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <RadioGroup
                        value={variant}
                        onChange={e => setVariant(e.target.value as any)}
                    >
                        <Radio value='contained'>contained</Radio>
                        <Radio value='outlined'>outlined</Radio>
                    </RadioGroup>
                    <Timeline variant={variant}>
                        <TimelineItem>
                            <TimelineContent align='left'>
                                primary
                            </TimelineContent>
                            <TimelineToken color='primary'></TimelineToken>
                            <TimelineConnector />
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineToken color='secondary'></TimelineToken>
                            <TimelineConnector />
                            <TimelineContent align='right'>
                                secondary
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineContent align='left'>
                                success
                            </TimelineContent>
                            <TimelineToken color='success'></TimelineToken>
                            <TimelineConnector />
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineToken color='info'></TimelineToken>
                            <TimelineConnector />
                            <TimelineContent align='right'>
                                info
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineContent align='left'>
                                warning
                            </TimelineContent>
                            <TimelineToken color='warning'></TimelineToken>
                            <TimelineConnector />
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineToken color='danger'></TimelineToken>
                            <TimelineConnector />
                            <TimelineContent align='right'>
                                danger
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineContent align='left'>
                                disable
                            </TimelineContent>
                            <TimelineToken color='disable'></TimelineToken>
                        </TimelineItem>
                    </Timeline>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Variant;
