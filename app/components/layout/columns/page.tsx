import Basic from './Basic';
import Responsive from './Responsive';
import Gap from './Gap';
import Space from './Space';
import Columns from '@/src/components/Columns';

const ColumnsPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Responsive />
            <Gap />
            <Space />
        </Columns>
    );
};

export default ColumnsPage;
