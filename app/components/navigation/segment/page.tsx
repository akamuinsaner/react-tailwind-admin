import Basic from './Basic/index';
import Box from '@/src/components/Box';
import Columns from '@/src/components/Columns';
import Controlled from './Controlled';
import Size from './Size';
import Block from './Block';
import Disabled from './Disabled';
import Icon from './Icon';
import Custom from './Custom';

const SegmentPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Block />
            <Controlled />
            <Size />
            <Disabled />
            <Icon />
            <Custom />
        </Columns>
    );
};

export default SegmentPage;
