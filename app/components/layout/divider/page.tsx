import Columns from '@/src/components/Columns';
import Basic from './Basic';
import Vertical from './Vertical';
import Gap from './Gap';
import Text from './Text';
const DividerPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Vertical />
            <Gap />
            <Text />
        </Columns>
    );
};

export default DividerPage;
