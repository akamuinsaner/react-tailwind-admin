import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import Timeline from '@/src/components/Timeline';
import TimelineItem from '@/src/components/Timeline/TimelineItem';
import TimelineContent from '@/src/components/Timeline/TimelineContent';
import TimelineToken from '@/src/components/Timeline/TimelineToken';
import TimelineConnector from '@/src/components/Timeline/TimelineConnector';

const Basic = () => {
    return (
        <Card>
            <CardHeader>Basic</CardHeader>
            <CardBody>
                <Timeline>
                    <TimelineItem>
                        <TimelineContent align='left'>
                            Jun 6, 1946
                        </TimelineContent>
                        <TimelineToken></TimelineToken>
                        <TimelineConnector />
                        <TimelineContent align='right'>
                            BAA is formed. The Basketball Association of America
                            is founded,
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineContent align='left'>
                            Apr 22, 1947
                        </TimelineContent>
                        <TimelineToken></TimelineToken>
                        <TimelineConnector />
                        <TimelineContent align='right'>
                            BAA's first championship
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineContent align='left'>
                            Aug 3, 1949
                        </TimelineContent>
                        <TimelineToken></TimelineToken>
                        <TimelineConnector />
                        <TimelineContent align='right'>
                            NBA is formed.
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineContent align='left'>
                            Mar 2, 1952
                        </TimelineContent>
                        <TimelineToken></TimelineToken>
                        <TimelineContent align='right'>
                            First All-Star Game
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </CardBody>
        </Card>
    );
};

export default Basic;
