import Basic from './Basic/index';
import Trigger from './Trigger';
import Columns from '@/src/components/Columns';
import Placement from './Placement';
import Arrow from './Arrow';
import DefaultOpen from './DefaultOpen';
import Controlled from './Controlled';

const TooltipPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <DefaultOpen />
            <Controlled />
            <Trigger />
            <Placement />
            <Arrow />
        </Columns>
    );
};

export default TooltipPage;
