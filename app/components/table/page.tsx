import Basic from './Basic/index';
import Box from '@/src/components/Box';
import Border from './Border';
import Pagination from './Pagination';
import Sizes from './Size';

const TablePage = () => {
    return (
        <Box className='columns-1 2xl:columns-2 gap-6'>
            <Basic />
            <Border />
            <Pagination />
            <Sizes />
        </Box>
    );
};

export default TablePage;
