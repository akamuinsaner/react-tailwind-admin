import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Alert from '@/src/components/Alert';
import Button from '@/src/components/Button';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Action = () => {
    return (
        <Card>
            <CardHeader>Action</CardHeader>
            <CardBody className='flex flex-col gap-4'>
                <Alert severity='success' action={<XMarkIcon />}>
                    This is a successful alert.
                </Alert>
                <Alert
                    severity='info'
                    action={
                        <Button size='small' type='text'>
                            close
                        </Button>
                    }
                >
                    This is an info alert.
                </Alert>
            </CardBody>
        </Card>
    );
};

export default Action;
