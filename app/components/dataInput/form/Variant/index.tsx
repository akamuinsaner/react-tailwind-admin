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
import MultiSelect from '@/src/components/MultiSelect';
import Select from '@/src/components/Select';
import SelectOption from '@/src/components/Select/SelectOption';
import Textarea from '@/src/components/Textarea';
import Switch from '@/src/components/Switch';
import { useState } from 'react';
import Flex from '@/src/components/Flex';
import DatePicker from '@/src/components/DatePicker';
import DateRangePicker from '@/src/components/DatePicker/DateRangePicker';
import { RTVariant } from '@/src/types/variant';

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
                                <SelectOption value='1'>1</SelectOption>
                                <SelectOption value='2'>2</SelectOption>
                                <SelectOption value='3'>3</SelectOption>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label='MultiSelect'
                            name='multiSelect'
                            multiple
                        >
                            <MultiSelect>
                                <MultiSelect.Option value='1'>
                                    1
                                </MultiSelect.Option>
                                <MultiSelect.Option value='2'>
                                    2
                                </MultiSelect.Option>
                                <MultiSelect.Option value='3'>
                                    3
                                </MultiSelect.Option>
                            </MultiSelect>
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
