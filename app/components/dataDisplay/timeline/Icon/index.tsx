import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import Timeline from '@/src/components/Timeline';
import TimelineItem from '@/src/components/Timeline/TimelineItem';
import TimelineContent from '@/src/components/Timeline/TimelineContent';
import TimelineToken from '@/src/components/Timeline/TimelineToken';
import TimelineConnector from '@/src/components/Timeline/TimelineConnector';
import {
    CalendarIcon,
    ComputerDesktopIcon,
    CubeIcon,
    HomeIcon,
} from '@heroicons/react/24/outline';

const Icon = () => {
    return (
        <Card>
            <CardHeader>Icon</CardHeader>
            <CardBody>
                <Timeline>
                    <TimelineItem>
                        <TimelineContent align='left'>Calendar</TimelineContent>
                        <TimelineToken>
                            <CalendarIcon />
                        </TimelineToken>
                        <TimelineConnector />
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineToken>
                            <ComputerDesktopIcon />
                        </TimelineToken>
                        <TimelineConnector />
                        <TimelineContent align='right'>
                            Computer
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineContent align='left'>Cube</TimelineContent>
                        <TimelineToken>
                            <CubeIcon />
                        </TimelineToken>
                        <TimelineConnector />
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineToken>
                            <HomeIcon />
                        </TimelineToken>
                        <TimelineContent align='right'>Home</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </CardBody>
        </Card>
    );
};

export default Icon;
