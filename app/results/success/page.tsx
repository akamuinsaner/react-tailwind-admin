import Box from '@/src/components/Box';
import Button from '@/src/components/Button';
import Flex from '@/src/components/Flex';
import Stepper from '@/src/components/Stepper';
import StepperItem from '@/src/components/Stepper/StepperItem';
import Text from '@/src/components/Text';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

const Success = () => {
    const iconClassName = twMerge(styles.icon, 'text-success');
    const titleClassName = twMerge(styles.title);
    const tipClassName = twMerge(styles.tip);
    const btnsClassName = twMerge(styles.btns);
    return (
        <Flex
            direction='column'
            className='h-full'
            align='center'
            justify='center'
            gap='medium'
        >
            <CheckCircleIcon className={iconClassName} />
            <Text size='h5' className={titleClassName}>
                Congradulations!
            </Text>
            <Text className={tipClassName}>
                You have performed the operation successfully,now you can click
                the buttons down below to finish more operations.
            </Text>
            <Flex gap='medium' className={btnsClassName}>
                <Button variant='outlined'>Return</Button>
                <Button>Go Console</Button>
            </Flex>
        </Flex>
    );
};

export default Success;
