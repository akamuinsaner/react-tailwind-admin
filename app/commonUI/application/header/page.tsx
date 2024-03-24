import Flex from '@/src/components/Flex';
import Simple from './Simple';
import NavBtn from './NavBtn';
import WithDrawer from './Drawer';
import Search from './Search';

const HeaderPage = () => {
    return (
        <Flex direction='column' gap='medium'>
            <Simple />
            <NavBtn />
            <WithDrawer />
            <Search />
        </Flex>
    );
};

export default HeaderPage;
