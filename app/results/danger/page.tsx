import Box from '@/src/components/Box';
import Button from '@/src/components/Button';
import Flex from '@/src/components/Flex';
import Text from '@/src/components/Text';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { twMerge } from 'tailwind-merge';
import { styles } from '../success/styles';

const Danger = () => {
    const iconClassName = twMerge(styles.icon, 'text-danger');
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
            <XCircleIcon className={iconClassName} />
            <Text size='h5' className={titleClassName}>
                Oops!
            </Text>
            <Text className={tipClassName}>
                You submission just failed, please check your input again and
                update the following information before resubmitting.
            </Text>
            <Flex gap='medium' className={btnsClassName}>
                <Button>Go Check</Button>
            </Flex>
        </Flex>
    );
};

export default Danger;
