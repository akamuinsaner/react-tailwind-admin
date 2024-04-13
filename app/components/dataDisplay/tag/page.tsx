import Columns from '@/src/components/Columns';
import Basic from './Basic';
import Color from './Color';
import Variant from './Variant';

const TagPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Color />
            <Variant />
        </Columns>
    );
};

export default TagPage;
