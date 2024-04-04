'use client';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import RadioGroup from '@/src/components/Radio/RadioGroup';
import Radio from '@/src/components/Radio';
import Form from '@/src/components/Form';
import Input from '@/src/components/Input';
import Select from '@/src/components/Select';
import Textarea from '@/src/components/Textarea';
import Switch from '@/src/components/Switch';
import { useState } from 'react';
import { RTSize } from '@/src/types/size';
import Flex from '@/src/components/Flex';
import DatePicker from '@/src/components/DatePicker';
import DateRangePicker from '@/src/components/DatePicker/DateRangePicker';
import Cascader from '@/src/components/Cascader';
import { treeData } from '@/app/utils/data';

const Size = () => {
    const [size, setSize] = useState<RTSize>('medium');
    const onSubmit = value => {
        console.log(value);
    };
    return (
        <Card className='mb-6'>
            <CardHeader>Size</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <RadioGroup
                        value={size}
                        onChange={(e: any) => setSize(e.target.value)}
                    >
                        <Radio value='small'>small</Radio>
                        <Radio value='medium'>medium</Radio>
                        <Radio value='large'>large</Radio>
                    </RadioGroup>
                    <Form
                        style={{ width: '500px' }}
                        size={size}
                        onSubmit={onSubmit}
                    >
                        <Form.Item label='Input' name='input'>
                            <Input />
                        </Form.Item>
                        <Form.Item label='Select' name='select'>
                            <Select>
                                <Select.Option value='1'>1</Select.Option>
                                <Select.Option value='2'>2</Select.Option>
                                <Select.Option value='3'>3</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label='MultiSelect'
                            name='multiSelect'
                            multiple
                        >
                            <Select multiple>
                                <Select.Option value='1'>1</Select.Option>
                                <Select.Option value='2'>2</Select.Option>
                                <Select.Option value='3'>3</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label='Cascader' name='cascader'>
                            <Cascader multiple options={treeData} />
                        </Form.Item>
                        <Form.Item label='Textarea' name='textarea'>
                            <Textarea />
                        </Form.Item>
                        <Form.Item label='DatePicker' name='datePicker'>
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                            label='RangePicker'
                            name='rangePicker'
                            multiple
                        >
                            <DateRangePicker />
                        </Form.Item>
                        <Form.Item label='Switch' name='switch' checkable>
                            <Switch />
                        </Form.Item>
                        <Form.Submit>
                            <Button>Submit</Button>
                        </Form.Submit>
                    </Form>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Size;
