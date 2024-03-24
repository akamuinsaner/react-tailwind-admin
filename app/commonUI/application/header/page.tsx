import Flex from '@/src/components/Flex';
import Simple from './Simple';
import NavBtn from './NavBtn';

const HeaderPage = () => {
    return (
        <Flex direction='column' gap='medium'>
            <Simple />
            <NavBtn />
        </Flex>
    );
};

export default HeaderPage;
