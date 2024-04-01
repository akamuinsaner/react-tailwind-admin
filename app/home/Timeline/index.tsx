'use client';
import Box from '@/src/components/Box';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Stepper from '@/src/components/Stepper';
import StepperItem from '@/src/components/Stepper/StepperItem';
import Timeline from '@/src/components/Timeline';
import TimelineConnector from '@/src/components/Timeline/TimelineConnector';
import TimelineContent from '@/src/components/Timeline/TimelineContent';
import TimelineItem from '@/src/components/Timeline/TimelineItem';
import TimelineToken from '@/src/components/Timeline/TimelineToken';

export const Tl = () => {
    return (
        <Card>
            <CardBody>
                <Flex className='h-96' justify='center'>
                    <Timeline locate='center'>
                        <TimelineItem>
                            <TimelineContent align='left'>
                                04/01/2024
                            </TimelineContent>
                            <TimelineToken color='primary'></TimelineToken>
                            <TimelineConnector />
                            <TimelineContent align='right'>
                                Planning
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineContent align='left'>
                                Analysis
                            </TimelineContent>
                            <TimelineToken color='secondary'></TimelineToken>
                            <TimelineConnector />
                            <TimelineContent align='right'>
                                04/04/2024
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineContent align='left'>
                                04/10/2024
                            </TimelineContent>
                            <TimelineToken color='success'></TimelineToken>
                            <TimelineConnector />
                            <TimelineContent align='right'>
                                Design
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineContent align='left'>
                                Development
                            </TimelineContent>
                            <TimelineToken color='info'></TimelineToken>
                            <TimelineConnector />
                            <TimelineContent align='right'>
                                04/15/2024
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineContent align='left'>
                                04/22/2024
                            </TimelineContent>
                            <TimelineToken color='warning'></TimelineToken>
                            <TimelineConnector />
                            <TimelineContent align='right'>
                                Testing
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineContent align='left'>
                                Deployment
                            </TimelineContent>
                            <TimelineToken color='danger'></TimelineToken>
                            <TimelineContent align='right'>
                                04/25/2024
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Tl;
