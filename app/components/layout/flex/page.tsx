import Flex from '@/src/components/Flex';
import Basic from './Basic/index';
import Direction from './Direction';
import Align from './Align';
import Justify from './Justify';
import Gap from './Gap';

const FlexPage = () => {
    return (
        <Flex direction='column'>
            <Basic />
            <Direction />
            <Align />
            <Justify />
            <Gap />
        </Flex>
    );
};

export default FlexPage;
