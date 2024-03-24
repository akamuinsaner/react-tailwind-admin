import Flex from '@/src/components/Flex';
import Simple from './Simple';
import NavBtn from './NavBtn';
import WithDrawer from './Drawer';

const HeaderPage = () => {
    return (
        <Flex direction='column' gap='medium'>
            <Simple />
            <NavBtn />
            <WithDrawer />
        </Flex>
    );
};

export default HeaderPage;
