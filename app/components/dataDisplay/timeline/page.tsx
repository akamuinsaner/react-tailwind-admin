import Basic from './Basic/index';
import Flex from '@/src/components/Flex';
import Columns from '@/src/components/Columns';
import Locate from './Locate';
import Color from './Color';
import Variant from './Variant';
import Icon from './Icon';

const TimeLinePage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Locate />
            <Color />
            <Variant />
            <Icon />
        </Columns>
    );
};

export default TimeLinePage;
