import Basic from './Basic/index';
import Clear from './Clear';
import Sizes from './Sizes';
import Status from './Status';
import Variant from './Variant';
import Search from './Search';
import TagLimit from './TagLimits';
import Columns from '@/src/components/Columns';

const SelectPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Clear />
            <Sizes />
            <Status />
            <Variant />
            <Search />
            <TagLimit />
        </Columns>
    );
};

export default SelectPage;
