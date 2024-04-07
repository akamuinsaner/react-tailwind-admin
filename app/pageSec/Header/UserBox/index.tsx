import Avatar from '@/src/components/Avatar';
import Flex from '@/src/components/Flex';
import Text from '@/src/components/Text';

const UserBox = () => {
    return (
        <Flex align='center' gap='medium'>
            <Avatar
                className='bg-amber-500'
                src='https://avatars.githubusercontent.com/u/23072998?v=4'
                alt='ElCid Wang'
                title='ElCid Wang'
            >
                ElCid Wang
            </Avatar>
            <Text>ElCid Wang</Text>
        </Flex>
    );
};

export default UserBox;
