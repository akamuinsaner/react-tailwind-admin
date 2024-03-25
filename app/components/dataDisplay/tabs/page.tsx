import Basic from './Basic/index';
import Disabled from './Disabled';
import Controlled from './Controlled';
import Icon from './Icon';
import Vertical from './Placement';
import Columns from '@/src/components/Columns';

const DisplayList = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Disabled />
            <Controlled />
            <Icon />
            <Vertical />
        </Columns>
    );
};

export default DisplayList;
