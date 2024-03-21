import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Alert from '@/src/components/Alert';

const Types = () => {
    return (
        <Card>
            <CardHeader>Alert Type</CardHeader>
            <CardBody className='flex flex-col gap-4'>
                <Alert>This is a normal alert.</Alert>
                <Alert type='contained' severity='info'>
                    This is a contained alert.
                </Alert>
                <Alert type='outlined' severity='danger'>
                    This is a outlined alert.
                </Alert>
            </CardBody>
        </Card>
    );
};

export default Types;
