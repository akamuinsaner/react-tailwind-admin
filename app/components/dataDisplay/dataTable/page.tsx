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
import Filter from './Filter';
import Columns from '@/src/components/Columns';

const TablePage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
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
            <Filter />
        </Columns>
    );
};

export default TablePage;
