'use client';
import Box from '@/src/components/Box';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import DatePicker from '@/src/components/DatePicker';
import DateRangePicker from '@/src/components/DatePicker/DateRangePicker';
import Flex from '@/src/components/Flex';
import Form from '@/src/components/Form';
import Input from '@/src/components/Input';

const FormComp = () => {
    return (
        <Card>
            <CardBody>
                <Box className='h-96'>
                    <Form
                        className='w-full'
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 9 }}
                    >
                        <Form.Item name='input' label='Input'>
                            <Input />
                        </Form.Item>
                        <Form.Item name='datepicker' label='Date'>
                            <DatePicker />
                        </Form.Item>
                        <Form.Item name='dateRangepicker' label='Range'>
                            <DateRangePicker />
                        </Form.Item>
                    </Form>
                </Box>
            </CardBody>
        </Card>
    );
};

export default FormComp;
