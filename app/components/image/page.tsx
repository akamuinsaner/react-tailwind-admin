import Basic from './Basic/index';
import Preview from './Preview';
import Custom from './Custom';
import Placeholder from './Placeholder';
import Box from '@/src/components/Box';

const ImagePage = () => {
    return (
        <Box className='columns-1 xl:columns-2 gap-6'>
            <Basic />
            <Preview />
            <Custom />
            <Placeholder />
        </Box>
    );
};

export default ImagePage;
