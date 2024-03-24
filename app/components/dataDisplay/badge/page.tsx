import Basic from './Basic/index';
import Columns from '@/src/components/Columns';
import Colors from './Colors';
import Position from './Position';
import MaxCount from './MaxCount';
import Standalone from './Standalone';

const BadgePage = () => {
    return (
        <Columns count={{ default: 1, xl: 2 }} gap='medium' space='medium'>
            <Basic />
            <Colors />
            <Position />
            <MaxCount />
            <Standalone />
        </Columns>
    );
};

export default BadgePage;
