import Columns from '@/src/components/Columns';
import Basic from './Basic';
import Vertical from './Vertical';
import Gap from './Gap';
import Text from './Text';
const DividerPage = () => {
    return (
        <Columns count={2}>
            <Basic />
            <Vertical />
            <Gap />
            <Text />
        </Columns>
    );
};

export default DividerPage;
