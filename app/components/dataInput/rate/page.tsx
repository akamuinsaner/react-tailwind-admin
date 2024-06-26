import Basic from './Basic';
import Columns from '@/src/components/Columns';
import Size from './Size';
import ReadOnly from './ReadOnly';
import Custom from './Custom';

const RatePage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Size />
            <ReadOnly />
            <Custom />
        </Columns>
    );
};

export default RatePage;
