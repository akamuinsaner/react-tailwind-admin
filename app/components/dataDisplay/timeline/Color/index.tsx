import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import Timeline from '@/src/components/Timeline';
import TimelineItem from '@/src/components/Timeline/TimelineItem';
import TimelineContent from '@/src/components/Timeline/TimelineContent';
import TimelineToken from '@/src/components/Timeline/TimelineToken';
import TimelineConnector from '@/src/components/Timeline/TimelineConnector';

const Color = () => {
    return (
        <Card>
            <CardHeader>Color</CardHeader>
            <CardBody>
                <Timeline>
                    <TimelineItem>
                        <TimelineContent align='left'>primary</TimelineContent>
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
                        <TimelineContent align='left'>success</TimelineContent>
                        <TimelineToken color='success'></TimelineToken>
                        <TimelineConnector />
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineToken color='info'></TimelineToken>
                        <TimelineConnector />
                        <TimelineContent align='right'>info</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineContent align='left'>warning</TimelineContent>
                        <TimelineToken color='warning'></TimelineToken>
                        <TimelineConnector />
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineToken color='danger'></TimelineToken>
                        <TimelineConnector />
                        <TimelineContent align='right'>danger</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineContent align='left'>disable</TimelineContent>
                        <TimelineToken color='disable'></TimelineToken>
                    </TimelineItem>
                </Timeline>
            </CardBody>
        </Card>
    );
};

export default Color;
