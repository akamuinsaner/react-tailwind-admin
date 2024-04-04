'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Select from '@/src/components/Select';
import Option from '@/src/components/Select/SelectOption';

const TagLimit = () => {
    const handleChange = (value: string[]) => {
        console.log(value);
    };

    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Tag limit</CardHeader>
            <CardBody className='flex flex-col gap-3'>
                <Select
                    multiple
                    onChange={handleChange}
                    defaultValue={['1', '4']}
                    tagLimit={2}
                    search
                >
                    <Option value='1'>Docter</Option>
                    <Option value='2'>Lawer</Option>
                    <Option value='3'>Scientist</Option>
                    <Option value='4'>Entrepreneur</Option>
                    <Option value='5'>Astronaut</Option>
                </Select>
            </CardBody>
        </Card>
    );
};

export default TagLimit;
