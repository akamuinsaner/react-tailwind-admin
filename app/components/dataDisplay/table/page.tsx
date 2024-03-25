import Basic from './Basic/index';
import Border from './Border';
import Pagination from './Pagination';
import Sizes from './Size';
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
            <Border />
            <Pagination />
            <Sizes />
        </Columns>
    );
};

export default TablePage;
