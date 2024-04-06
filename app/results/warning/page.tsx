import Box from '@/src/components/Box';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
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
        <Card>
            <CardHeader>Warning</CardHeader>
            <CardBody>
                <Flex
                    direction='column'
                    className='py-40'
                    align='center'
                    justify='center'
                    gap='medium'
                >
                    <ExclamationTriangleIcon className={iconClassName} />
                    <Text size='h5' className={titleClassName}>
                        Warning!
                    </Text>
                    <Text className={tipClassName}>
                        The operations you just made may cause some threats to
                        the system,please check it carefully and reduce the
                        warning.
                    </Text>
                    <Flex gap='medium' className={btnsClassName}>
                        <Button variant='outlined'>Return</Button>
                        <Button>Go Check</Button>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Warning;
