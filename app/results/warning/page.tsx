import Box from '@/src/components/Box';
import Button from '@/src/components/Button';
import Flex from '@/src/components/Flex';
import Text from '@/src/components/Text';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { twMerge } from 'tailwind-merge';
import { styles } from '../success/styles';

const Warning = () => {
    const iconClassName = twMerge(styles.icon, 'text-warning');
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
            <ExclamationTriangleIcon className={iconClassName} />
            <Text size='h5' className={titleClassName}>
                Warning!
            </Text>
            <Text className={tipClassName}>
                The operations you just made may cause some threats to the
                system,please check it carefully and reduce the warning.
            </Text>
            <Flex gap='medium' className={btnsClassName}>
                <Button variant='outlined'>Return</Button>
                <Button>Go Check</Button>
            </Flex>
        </Flex>
    );
};

export default Warning;
