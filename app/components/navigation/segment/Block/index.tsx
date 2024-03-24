'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Segment from '@/src/components/Segment';
import SegmentItem from '@/src/components/Segment/SegmentItem';
import { useState } from 'react';

const Block = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Block</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium' align='start'>
                    <Segment block>
                        <SegmentItem value='English'>English</SegmentItem>
                        <SegmentItem value='Spanish'>Spanish</SegmentItem>
                        <SegmentItem value='Chinese'>Chinese</SegmentItem>
                        <SegmentItem value='Português'>Português</SegmentItem>
                        <SegmentItem value='Japanese'>Japanese</SegmentItem>
                    </Segment>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Block;
