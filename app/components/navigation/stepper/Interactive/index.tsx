'use client';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Stepper from '@/src/components/Stepper';
import StepperItem from '@/src/components/Stepper/StepperItem';
import { useState } from 'react';

const Interactive = () => {
    const [active, setActive] = useState<number>(0);
    return (
        <Card>
            <CardHeader>Interactive</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <Stepper active={active}>
                        <StepperItem>Select company</StepperItem>
                        <StepperItem>Select department</StepperItem>
                        <StepperItem>Select position</StepperItem>
                    </Stepper>
                    <Flex justify='between'>
                        <Button
                            variant='text'
                            disabled={active <= 0}
                            onClick={() => setActive(active - 1)}
                        >
                            BACK
                        </Button>
                        <Flex gap='medium'>
                            <Button
                                variant='text'
                                disabled={active >= 3}
                                onClick={() => setActive(active + 1)}
                            >
                                NEXT
                            </Button>
                            {active >= 3 ? (
                                <Button
                                    variant='text'
                                    disabled={active >= 3 + 1}
                                    onClick={() => setActive(active + 1)}
                                >
                                    FINISH
                                </Button>
                            ) : null}
                        </Flex>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Interactive;
