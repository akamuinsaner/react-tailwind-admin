import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Alert from '@/src/components/Alert';
import {
    CheckIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    ShieldExclamationIcon,
} from '@heroicons/react/24/outline';

const Icon = () => {
    return (
        <Card>
            <CardHeader>Icon</CardHeader>
            <CardBody className='flex flex-col gap-4'>
                <Alert severity='success' icon={<CheckIcon />}>
                    This is a successful alert.
                </Alert>
                <Alert severity='info' icon={<ShieldExclamationIcon />}>
                    This is an info alert.
                </Alert>
                <Alert severity='warning' icon={<ExclamationCircleIcon />}>
                    This is a warning alert.
                </Alert>
                <Alert severity='danger' icon={<ExclamationTriangleIcon />}>
                    This is a danger alert.
                </Alert>
            </CardBody>
        </Card>
    );
};

export default Icon;
