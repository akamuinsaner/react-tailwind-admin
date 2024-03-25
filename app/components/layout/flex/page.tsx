import Basic from './Basic/index';
import Direction from './Direction';
import Align from './Align';
import Justify from './Justify';
import Gap from './Gap';
import Columns from '@/src/components/Columns';

const FlexPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Direction />
            <Align />
            <Justify />
            <Gap />
        </Columns>
    );
};

export default FlexPage;
