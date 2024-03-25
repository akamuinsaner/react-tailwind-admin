import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Stepper from '@/src/components/Stepper';
import StepperItem from '@/src/components/Stepper/StepperItem';

const Basic = () => {
    return (
        <Card>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Stepper>
                    <StepperItem>Select company</StepperItem>
                    <StepperItem>Select department</StepperItem>
                    <StepperItem>Select position</StepperItem>
                </Stepper>
            </CardBody>
        </Card>
    );
};

export default Basic;
