import Basic from './Basic/index';
import Preview from './Preview';
import Custom from './Custom';
import Placeholder from './Placeholder';
import Columns from '@/src/components/Columns';

const ImagePage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Preview />
            <Custom />
            <Placeholder />
        </Columns>
    );
};

export default ImagePage;
