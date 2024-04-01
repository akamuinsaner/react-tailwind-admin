'use client';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Stepper from '@/src/components/Stepper';
import StepperItem from '@/src/components/Stepper/StepperItem';
import { useCallback, useEffect, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';

const StepperComp = () => {
    const fullConfig = resolveConfig(tailwindConfig);
    const [active, setActive] = useState<number>(0);
    const [vertical, setVertical] = useState<boolean>(false);
    const xl = parseInt(fullConfig.theme.screens.xl.replace('px'));

    const checkVertical = useCallback(() => {
        if (window.innerWidth < xl) {
            setVertical(true);
        } else {
            setVertical(false);
        }
    }, []);

    useEffect(() => {
        checkVertical();
        window.addEventListener('resize', checkVertical);
        return () => window.removeEventListener('resize', checkVertical);
    }, []);
    return (
        <Card>
            <CardBody>
                <Flex
                    direction='column'
                    gap='medium'
                    justify='around'
                    className='min-h-96'
                >
                    <Stepper
                        active={active}
                        alternative={!vertical}
                        direction={vertical ? 'vertical' : 'horizontal'}
                    >
                        <StepperItem
                            description={`
                            Project managers and interested stakeholders gather 
                            around to meet and put together the requirements
                            `}
                        >
                            Requirements gathering
                        </StepperItem>
                        <StepperItem
                            description={`
                            marking out the general product architecture, depicting the software 
                            modules required to be developed and their relationships
                            `}
                        >
                            Product Design
                        </StepperItem>
                        <StepperItem
                            description={`
                            Once the development team has the requirement specification and the design 
                            documents in hand, the software developers can start programming
                            `}
                        >
                            Coding
                        </StepperItem>
                        <StepperItem
                            description={`Exposes potential bugs in the product, and if any, these are corrected`}
                        >
                            Testing
                        </StepperItem>
                        <StepperItem
                            description={`Once the software product passes the testing phase, deployment of the product can ensue`}
                        >
                            Deployment of the Product
                        </StepperItem>
                        <StepperItem
                            description={`
                            Fixing issues and keeping the systems up to date with the latest 
                            operating system patches or updates of used third-party software
                            `}
                        >
                            Maintenance and Operations
                        </StepperItem>
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
                                disabled={active >= 6}
                                onClick={() => setActive(active + 1)}
                            >
                                NEXT
                            </Button>
                            {active >= 6 ? (
                                <Button
                                    variant='text'
                                    disabled={active >= 7}
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

export default StepperComp;
