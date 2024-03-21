import Box from '@/src/components/Box';
import Basic from './Basic/index';
import Densed from './Densed';
import Border from './Border';
import Spanning from './Spanning';
import FixHeader from './FixHeader';
import FixColumn from './FixColumn';
import FixBoth from './FixBoth';
import HeadGroup from './HeadGroup';
import Select from './Select';
import Expand from './Expand';
import Sort from './Sort';

const TablePage = () => {
    return (
        <Box className='columns-1 gap-6'>
            <Basic />
            <Densed />
            <Border />
            <Spanning />
            <FixHeader />
            <FixColumn />
            <FixBoth />
            <HeadGroup />
            <Select />
            <Expand />
            <Sort />
        </Box>
    );
};

export default TablePage;
