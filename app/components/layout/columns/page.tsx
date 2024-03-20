import Flex from '@/src/components/Flex';
import Basic from './Basic';
import Responsive from './Responsive';
import Gap from './Gap';
import Space from './Space';

const ColumnsPage = () => {
    return (
        <Flex direction='column'>
            <Basic />
            <Responsive />
            <Gap />
            <Space />
        </Flex>
    );
};

export default ColumnsPage;
