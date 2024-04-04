import Basic from './Basic';
import Size from './Size';
import Status from './Status';
import Variant from './Variant';
import Search from './Search';
import TagLimit from './TagLimit';
import Check from './Check';
import LoadData from './Loaddata';
import Columns from '@/src/components/Columns';

const CascaderPage = () => {
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
            <Search />
            <TagLimit />
            <Check />
            <LoadData />
        </Columns>
    );
};

export default CascaderPage;
