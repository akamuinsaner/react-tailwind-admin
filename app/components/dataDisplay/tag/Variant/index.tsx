import Badge from '@/src/components/Badge';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Tag from '@/src/components/Tag';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Variant = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Variants</CardHeader>
            <CardBody>
                <Flex align='center' className='h-20' gap='medium'>
                    <Tag color='emerald'>default</Tag>
                    <Tag color='emerald' variant='outlined'>
                        outlined
                    </Tag>
                    <Tag color='emerald' variant='contained'>
                        contained
                    </Tag>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Variant;
