import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import Flex from '@/src/components/Flex';
import NavBar from '@/src/components/NavBar';
import Button from '@/src/components/Button';
import { Bars3Icon } from '@heroicons/react/24/outline';
import IconButton from '@/src/components/Button/IconButton';
import Text from '@/src/components/Text';
import Avatar from '@/src/components/Avatar';

const Simple = () => {
    return (
        <Card>
            <CardHeader>Simple</CardHeader>
            <CardBody>
                <Flex align='center' justify='center' className='h-40'>
                    <NavBar className='relative justify-between bg-primary text-white'>
                        <Flex align='center' gap='medium'>
                            <IconButton>
                                <Bars3Icon />
                            </IconButton>
                            <Text className='text-white' size='h5'>
                                RTADMIN
                            </Text>
                        </Flex>
                        <Flex align='center' gap='small'>
                            <Avatar
                                className='bg-amber-500'
                                src='https://avatars.githubusercontent.com/u/23072998?v=4'
                                alt='ElCid Wang'
                                title='ElCid Wang'
                            >
                                ElCid Wang
                            </Avatar>
                            <Text className='text-white'>ElCid Wang</Text>
                        </Flex>
                    </NavBar>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Simple;
