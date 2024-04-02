'use client';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Checkbox from '@/src/components/Checkbox';
import Form from '@/src/components/Form';
import Input from '@/src/components/Input';

const Initial = () => {
    const onSubmit = value => {
        console.log(value);
    };
    return (
        <Card className='mb-6'>
            <CardHeader>Initial values</CardHeader>
            <CardBody>
                <Form
                    style={{ width: '500px' }}
                    initialValues={{
                        firstName: 'Tony',
                        lastName: 'Stark',
                    }}
                    onSubmit={onSubmit}
                >
                    <Form.Item
                        rules={[{ required: true }]}
                        label='FirstName'
                        name='firstName'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        rules={[{ required: true }]}
                        label='LastName'
                        name='lastName'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Submit>
                        <Button>Submit</Button>
                    </Form.Submit>
                </Form>
            </CardBody>
        </Card>
    );
};

export default Initial;
