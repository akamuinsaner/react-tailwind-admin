import Basic from './Basic/index';
import Columns from '@/src/components/Columns';
import Colors from './Colors';
import Position from './Position';
import MaxCount from './MaxCount';
import Standalone from './Standalone';

const BadgePage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Colors />
            <Position />
            <MaxCount />
            <Standalone />
        </Columns>
    );
};

export default BadgePage;
