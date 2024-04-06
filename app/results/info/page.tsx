import Box from '@/src/components/Box';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
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
        <Card>
            <CardHeader>Info</CardHeader>
            <CardBody>
                <Flex
                    direction='column'
                    className='py-40'
                    align='center'
                    justify='center'
                    gap='medium'
                >
                    <ExclamationCircleIcon className={iconClassName} />
                    <Text size='h5' className={titleClassName}>
                        Success
                    </Text>
                    <Text className={tipClassName}>
                        You have performed the operation successfully,now you
                        can click the buttons down below to finish more
                        operations.
                    </Text>
                    <Flex gap='medium' className={btnsClassName}>
                        <Button variant='outlined'>Return</Button>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Info;
