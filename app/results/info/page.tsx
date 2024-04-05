import Box from '@/src/components/Box';
import Button from '@/src/components/Button';
import Flex from '@/src/components/Flex';
import Text from '@/src/components/Text';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { twMerge } from 'tailwind-merge';
import { styles } from '../success/styles';

const Info = () => {
    const iconClassName = twMerge(styles.icon, 'text-info');
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
            <ExclamationCircleIcon className={iconClassName} />
            <Text size='h5' className={titleClassName}>
                Success
            </Text>
            <Text className={tipClassName}>
                You have performed the operation successfully,now you can click
                the buttons down below to finish more operations.
            </Text>
            <Flex gap='medium' className={btnsClassName}>
                <Button variant='outlined'>Return</Button>
            </Flex>
        </Flex>
    );
};

export default Info;
