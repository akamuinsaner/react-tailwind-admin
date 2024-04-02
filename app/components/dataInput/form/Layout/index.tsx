'use client';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Checkbox from '@/src/components/Checkbox';
import Flex from '@/src/components/Flex';
import Form from '@/src/components/Form';
import Input from '@/src/components/Input';
import Radio from '@/src/components/Radio';
import RadioGroup from '@/src/components/Radio/RadioGroup';
import { useState } from 'react';

const Layout = () => {
    const [layout, setLayout] = useState<string>('vertical');
    const onSubmit = value => {
        console.log(value);
    };
    const labelCol =
        layout === 'horizontal'
            ? {
                  span: 3,
                  offset: 0,
              }
            : null;

    const wrapperCol =
        layout === 'horizontal'
            ? {
                  span: 9,
              }
            : null;
    return (
        <Card className='mb-6'>
            <CardHeader>Layout</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <RadioGroup
                        value={layout}
                        onChange={e => setLayout(e.target.value)}
                    >
                        <Radio value='vertical'>vertical</Radio>
                        <Radio value='horizontal'>horizontal</Radio>
                    </RadioGroup>
                    <Form
                        style={{ width: '500px' }}
                        onSubmit={onSubmit}
                        labelCol={labelCol}
                        wrapperCol={wrapperCol}
                    >
                        <Form.Item label='username' name='username'>
                            <Input />
                        </Form.Item>
                        <Form.Item label='passward' name='passward'>
                            <Input type='password' />
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

export default Layout;
