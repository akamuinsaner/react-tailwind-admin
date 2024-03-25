import Basic from './Basic/index';
import Offset from './Offset/index';
import Gap from './Gap';
import Responsive from './Responsive';
import Columns from '@/src/components/Columns';

const GridPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Offset />
            <Gap />
            <Responsive />
        </Columns>
    );
};

export default GridPage;
