import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Stepper from '@/src/components/Stepper';
import StepperItem from '@/src/components/Stepper/StepperItem';

const Vertical = () => {
    return (
        <Card>
            <CardHeader>Vertical</CardHeader>
            <CardBody>
                <Stepper direction='vertical'>
                    <StepperItem description='your first step'>
                        Select company
                    </StepperItem>
                    <StepperItem description='your second step'>
                        Select department
                    </StepperItem>
                    <StepperItem description='your third step'>
                        Select position
                    </StepperItem>
                </Stepper>
            </CardBody>
        </Card>
    );
};

export default Vertical;
