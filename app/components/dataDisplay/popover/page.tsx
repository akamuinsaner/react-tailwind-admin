import Basic from './Basic/index';
import Trigger from './Trigger';
import Columns from '@/src/components/Columns';
import Placement from './Placement';
import Arrow from './Arrow';
import DefaultOpen from './DefaultOpen';
import Controlled from './Controlled';

const PopoverPage = () => {
    return (
        <Columns count={{ default: 1, xl: 2 }} gap='medium' space='medium'>
            <Basic />
            <DefaultOpen />
            <Controlled />
            <Trigger />
            <Placement />
            <Arrow />
        </Columns>
    );
};

export default PopoverPage;
