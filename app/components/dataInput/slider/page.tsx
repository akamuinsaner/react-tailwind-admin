import Box from '@/src/components/Box';
import Columns from '@/src/components/Columns';
import Basic from './Basic/index';

const SliderPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
        </Columns>
    );
};

export default SliderPage;
