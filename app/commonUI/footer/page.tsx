import Flex from '@/src/components/Flex';
import Simple from './Simple';
import Navigation from './Navigation';
const HeaderPage = () => {
    return (
        <Flex direction='column' gap='medium'>
            <Simple />
            <Navigation />
        </Flex>
    );
};

export default HeaderPage;
