import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Alert from '@/src/components/Alert';

const Severity = () => {
    return (
        <Card>
            <CardHeader>Severity</CardHeader>
            <CardBody className='flex flex-col gap-4'>
                <Alert severity='success'>This is a successful alert.</Alert>
                <Alert severity='info'>This is an info alert.</Alert>
                <Alert severity='warning'>This is a warning alert.</Alert>
                <Alert severity='danger'>This is a danger alert.</Alert>
            </CardBody>
        </Card>
    );
};

export default Severity;
