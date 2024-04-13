import Badge from '@/src/components/Badge';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Tag from '@/src/components/Tag';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Color = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Colors</CardHeader>
            <CardBody>
                <Flex align='center' wrap='wrap' className='h-20' gap='medium'>
                    <Tag color='slate'>slate</Tag>
                    <Tag color='gray'>gray</Tag>
                    <Tag color='zinc'>zinc</Tag>
                    <Tag color='neutral'>neutral</Tag>
                    <Tag color='stone'>stone</Tag>
                    <Tag color='red'>red</Tag>
                    <Tag color='orange'>orange</Tag>
                    <Tag color='amber'>amber</Tag>
                    <Tag color='yellow'>yellow</Tag>
                    <Tag color='lime'>lime</Tag>
                    <Tag color='green'>green</Tag>
                    <Tag color='emerald'>emerald</Tag>
                    <Tag color='teal'>teal</Tag>
                    <Tag color='cyan'>cyan</Tag>
                    <Tag color='sky'>sky</Tag>
                    <Tag color='blue'>blue</Tag>
                    <Tag color='indigo'>indigo</Tag>
                    <Tag color='violet'>violet</Tag>
                    <Tag color='purple'>purple</Tag>
                    <Tag color='fuchsia'>fuchsia</Tag>
                    <Tag color='pink'>pink</Tag>
                    <Tag color='rose'>rose</Tag>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Color;
