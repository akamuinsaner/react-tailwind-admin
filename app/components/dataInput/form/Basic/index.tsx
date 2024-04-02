'use client';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Checkbox from '@/src/components/Checkbox';
import Form from '@/src/components/Form';
import Input from '@/src/components/Input';

const Basic = () => {
    const onSubmit = value => {
        console.log(value);
    };
    return (
        <Card className='mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Form style={{ width: '500px' }} onSubmit={onSubmit}>
                    <Form.Item
                        rules={[{ required: true }]}
                        label='username'
                        name='username'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        rules={[{ required: true }]}
                        label='passward'
                        name='passward'
                    >
                        <Input type='password' />
                    </Form.Item>
                    <Form.Submit>
                        <Button>Submit</Button>
                    </Form.Submit>
                </Form>
            </CardBody>
        </Card>
    );
};

export default Basic;
