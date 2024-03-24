import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Segment from '@/src/components/Segment';
import Text from '@/src/components/Text';
import SegmentItem from '@/src/components/Segment/SegmentItem';
import {
    EnvelopeIcon,
    BellIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline';

const Custom = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Custom</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium' align='start'>
                    <Segment>
                        <SegmentItem value='Message'>
                            <Flex
                                direction='column'
                                gap='small'
                                align='center'
                                justify='center'
                                className='py-2'
                            >
                                <EnvelopeIcon className='h-10 w-10' />
                                <Text>Message</Text>
                            </Flex>
                        </SegmentItem>
                        <SegmentItem value='Notification'>
                            <Flex
                                direction='column'
                                gap='small'
                                align='center'
                                justify='center'
                                className='py-2'
                            >
                                <BellIcon className='h-10 w-10' />
                                <Text>Notification</Text>
                            </Flex>
                        </SegmentItem>
                        <SegmentItem value='Profile'>
                            <Flex
                                direction='column'
                                gap='small'
                                align='center'
                                justify='center'
                                className='py-2'
                            >
                                <UserCircleIcon className='h-10 w-10' />
                                <Text>Profile</Text>
                            </Flex>
                        </SegmentItem>
                    </Segment>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Custom;
