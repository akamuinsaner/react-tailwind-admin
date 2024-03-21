import Flex from '@/src/components/Flex';
import Basic from './Basic/index';
import Offset from './Offset/index';
import Gap from './Gap';
import Responsive from './Responsive';

const GridPage = () => {
    return (
        <Flex direction='column'>
            <Basic />
            <Offset />
            <Gap />
            <Responsive />
        </Flex>
    );
};

export default GridPage;
