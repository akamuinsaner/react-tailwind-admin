import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Segment from '@/src/components/Segment';
import SegmentItem from '@/src/components/Segment/SegmentItem';

const Size = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Size</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium' align='start'>
                    <Segment size='small'>
                        <SegmentItem value='Morning'>Morning</SegmentItem>
                        <SegmentItem value='Afternoon'>Afternoon</SegmentItem>
                        <SegmentItem value='Evening'>Evening</SegmentItem>
                        <SegmentItem value='Night'>Night</SegmentItem>
                    </Segment>
                    <Segment defaultValue="Evening">
                        <SegmentItem value='Morning'>Morning</SegmentItem>
                        <SegmentItem value='Afternoon'>Afternoon</SegmentItem>
                        <SegmentItem value='Evening'>Evening</SegmentItem>
                        <SegmentItem value='Night'>Night</SegmentItem>
                    </Segment>
                    <Segment defaultValue="Evening" size='large'>
                        <SegmentItem value='Morning'>Morning</SegmentItem>
                        <SegmentItem value='Afternoon'>Afternoon</SegmentItem>
                        <SegmentItem value='Evening'>Evening</SegmentItem>
                        <SegmentItem value='Night'>Night</SegmentItem>
                    </Segment>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Size;
