import Basic from './Basic/index';
import Columns from '@/src/components/Columns';
import Colors from './Colors';
import Position from './Position';
import MaxCount from './MaxCount';
const BadgePage = () => {
    return (
        <Columns count={{ default: 1, xl: 2 }} gap='medium' space='medium'>
            <Basic />
            <Colors />
            <Position />
            <MaxCount />
        </Columns>
    );
};

export default BadgePage;
