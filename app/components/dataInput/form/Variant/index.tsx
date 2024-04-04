'use client';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Checkbox from '@/src/components/Checkbox';
import RadioGroup from '@/src/components/Radio/RadioGroup';
import Radio from '@/src/components/Radio';
import Form from '@/src/components/Form';
import Input from '@/src/components/Input';
import Select from '@/src/components/Select';
import { useState } from 'react';
import Flex from '@/src/components/Flex';
import DatePicker from '@/src/components/DatePicker';
import DateRangePicker from '@/src/components/DatePicker/DateRangePicker';
import { RTVariant } from '@/src/types/variant';
import Cascader from '@/src/components/Cascader';
import { treeData } from '@/app/utils/data';
import TreeSelect from '@/src/components/TreeSelect';

const Variant = () => {
    const [variant, setVariant] = useState<RTVariant>('outlined');
    const onSubmit = value => {
        console.log(value);
    };
    return (
        <Card className='mb-6'>
            <CardHeader>Variant</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <RadioGroup
                        value={variant}
                        onChange={(e: any) => setVariant(e.target.value)}
                    >
                        <Radio value='outlined'>outlined</Radio>
                        <Radio value='contained'>contained</Radio>
                        <Radio value='underlined'>underlined</Radio>
                        <Radio value='borderless'>borderless</Radio>
                    </RadioGroup>
                    <Form
                        style={{ width: '500px' }}
                        variant={variant}
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
                        <Form.Item label='TreeSelect' name='treeSelect'>
                            <TreeSelect multiple options={treeData} />
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
                        <Form.Submit>
                            <Button>Submit</Button>
                        </Form.Submit>
                    </Form>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Variant;
