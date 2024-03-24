'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Segment from '@/src/components/Segment';
import SegmentItem from '@/src/components/Segment/SegmentItem';
import { useState } from 'react';

const Controlled = () => {
    const [value, setValue] = useState<any>('Thursday');
    const onChange = (value: any) => {
        console.log(value);
        setValue(value);
    };
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Controlled</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium' align='start'>
                    <Segment value={value} onChange={onChange}>
                        <SegmentItem value='Sunday'>Sunday</SegmentItem>
                        <SegmentItem value='Monday'>Monday</SegmentItem>
                        <SegmentItem value='Tuesday'>Tuesday</SegmentItem>
                        <SegmentItem value='Wednesday'>Wednesday</SegmentItem>
                        <SegmentItem value='Thursday'>Thursday</SegmentItem>
                        <SegmentItem value='Friday'>Friday</SegmentItem>
                        <SegmentItem value='Saturday'>Saturday</SegmentItem>
                    </Segment>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Controlled;
