import Basic from './Basic';
import Status from './Status';
import Disabled from './Disabled';
import Vertical from './Vertical';
import Columns from '@/src/components/Columns';

const DropdownPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Status />
            <Disabled />
            <Vertical />
        </Columns>
    );
};

export default DropdownPage;
