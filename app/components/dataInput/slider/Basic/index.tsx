'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Slider from '@/src/components/Slider';

const Basic = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Flex direction='column' gap='large'>
                    <Slider
                        defaultValue={30}
                        onChange={value => console.log(value)}
                    />
                    <Slider
                        range
                        defaultValue={[20, 70]}
                        onChange={value => console.log(value)}
                    />
                    <Slider defaultValue={30} disabled />
                    <Slider range defaultValue={[20, 70]} disabled />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Basic;
