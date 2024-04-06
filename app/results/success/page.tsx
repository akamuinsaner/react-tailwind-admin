'use client';
import { fullTWConfig } from '@/app/utils/tools';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Stepper from '@/src/components/Stepper';
import StepperItem from '@/src/components/Stepper/StepperItem';
import Text from '@/src/components/Text';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useCallback, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

const Success = () => {
    const iconClassName = twMerge(styles.icon, 'text-success');
    const titleClassName = twMerge(styles.title);
    const tipClassName = twMerge(styles.tip);
    const btnsClassName = twMerge(styles.btns);
    const [vertical, setVertical] = useState<boolean>(false);
    const xl = parseInt(fullTWConfig.theme.screens.xl.replace('px'));

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
            <CardHeader>Success</CardHeader>
            <CardBody>
                <Flex
                    direction='column'
                    className='py-40'
                    align='center'
                    justify='center'
                    gap='large'
                >
                    <CheckCircleIcon className={iconClassName} />
                    <Text size='h5' className={titleClassName}>
                        Success!
                    </Text>
                    <Text className={tipClassName}>
                        You have performed the operation successfully,now you
                        can click the buttons down below to finish more
                        operations.
                    </Text>
                    <Flex gap='medium' className={btnsClassName}>
                        <Button variant='outlined'>Return</Button>
                        <Button>Go Console</Button>
                    </Flex>
                    <Stepper
                        direction={vertical ? 'vertical' : 'horizontal'}
                        active={4}
                        className={twMerge(styles.extra, 'w-full mt-10')}
                    >
                        <StepperItem description='passed'>
                            Direct Leader
                        </StepperItem>
                        <StepperItem description='passed'>
                            Department Leader
                        </StepperItem>
                        <StepperItem description='passed'>
                            HR Manager
                        </StepperItem>
                        <StepperItem description='pending'>
                            Administrative
                        </StepperItem>
                    </Stepper>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Success;
