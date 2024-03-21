import Basic from './Basic';
import Variants from './Variants';
import Color from './Color';
import Size from './Size';
import Icon from './Icon';
import Grouped from './Grouped';
import Flex from '@/src/components/Flex';

const ButtonPage = () => {
    return (
        <Flex direction='column' gap='medium'>
            <Basic />
            <Variants />
            <Color />
            <Size />
            <Icon />
            <Grouped />
        </Flex>
    );
};

export default ButtonPage;
