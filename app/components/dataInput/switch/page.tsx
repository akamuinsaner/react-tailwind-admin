import Basic from './Basic';
import Disabled from './Disabled';
import Text from './Text';
import Status from './Status';
import Size from './Size';
import Label from './Label';
import Columns from '@/src/components/Columns';

const SwitchPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Label />
            <Disabled />
            <Text />
            <Status />
            <Size />
        </Columns>
    );
};

export default SwitchPage;
