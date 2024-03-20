import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Alert from '@/src/components/Alert';

const Accent = () => {
    return (
        <Card>
            <CardHeader>Accent</CardHeader>
            <CardBody className='flex flex-col gap-4'>
                <Alert severity='success' accent>
                    This is a successful alert.
                </Alert>
                <Alert severity='info' accent>
                    This is an info alert.
                </Alert>
                <Alert severity='warning' accent>
                    This is a warning alert.
                </Alert>
                <Alert severity='danger' accent>
                    This is a danger alert.
                </Alert>
            </CardBody>
        </Card>
    );
};

export default Accent;
