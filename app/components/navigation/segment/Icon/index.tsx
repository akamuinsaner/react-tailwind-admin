import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Segment from '@/src/components/Segment';
import SegmentItem from '@/src/components/Segment/SegmentItem';
import {
    EnvelopeIcon,
    BellIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline';

const Icon = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Icon</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium' align='start'>
                    <Segment>
                        <SegmentItem value='Message' icon={<EnvelopeIcon />}>
                            Message
                        </SegmentItem>
                        <SegmentItem value='Notification' icon={<BellIcon />}>
                            Notification
                        </SegmentItem>
                        <SegmentItem value='Profile' icon={<UserCircleIcon />}>
                            Profile
                        </SegmentItem>
                    </Segment>
                    <Segment>
                        <SegmentItem value='Message' icon={<EnvelopeIcon />} />
                        <SegmentItem value='Notification' icon={<BellIcon />} />
                        <SegmentItem
                            value='Profile'
                            icon={<UserCircleIcon />}
                        />
                    </Segment>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Icon;
