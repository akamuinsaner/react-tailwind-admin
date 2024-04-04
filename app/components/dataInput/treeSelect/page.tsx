import Basic from './Basic';
import Columns from '@/src/components/Columns';
import Size from './Size';
import Status from './Status';
import Variant from './Variant';
import Search from './Search';
import TagLimit from './TagLimit';
import Check from './Check';
import LoadData from './Loaddata';
import Expand from './Expand';

const TreeSelectPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Size />
            <Status />
            <Variant />
            <Expand />
            <Search />
            <TagLimit />
            <Check />
            <LoadData />
        </Columns>
    );
};

export default TreeSelectPage;
