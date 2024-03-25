import Basic from './Basic';
import Placement from './Placement';
import Arrow from './Arrow';
import Trigger from './Trigger';
import Controlled from './Controlled';
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
            <Placement />
            <Arrow />
            <Trigger />
            <Controlled />
        </Columns>
    );
};

export default DropdownPage;
