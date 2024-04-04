'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Select from '@/src/components/Select';
import Option from '@/src/components/Select/SelectOption';
import { useState } from 'react';

const Basic = () => {
    const [value, setValue] = useState<string>('1');
    const handleChange = (value: string) => {
        console.log(value);
        setValue(value);
    };

    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody className='flex flex-col gap-3'>
                <Select
                    onChange={handleChange}
                    placeholder='single select'
                    defaultValue={'3'}
                >
                    <Option value='1'>Docter</Option>
                    <Option value='2'>Lawer</Option>
                    <Option value='3'>Scientist</Option>
                    <Option value='4'>Entrepreneur</Option>
                    <Option value='5'>Astronaut</Option>
                </Select>
                <Select
                    multiple
                    onChange={handleChange}
                    placeholder='multiple select'
                    defaultValue={['2', '5']}
                >
                    <Option value='1'>Docter</Option>
                    <Option value='2'>Lawer</Option>
                    <Option value='3'>Scientist</Option>
                    <Option value='4'>Entrepreneur</Option>
                    <Option value='5'>Astronaut</Option>
                </Select>
                <Select
                    disabled
                    onChange={handleChange}
                    placeholder='single select'
                    defaultValue={'3'}
                >
                    <Option value='1'>Docter</Option>
                    <Option value='2'>Lawer</Option>
                    <Option value='3'>Scientist</Option>
                    <Option value='4'>Entrepreneur</Option>
                    <Option value='5'>Astronaut</Option>
                </Select>
                <Select
                    multiple
                    disabled
                    onChange={handleChange}
                    placeholder='multiple select '
                    defaultValue={['2', '5']}
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

export default Basic;
