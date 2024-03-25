import Basic from './Basic/index';
import Box from '@/src/components/Box';
import Columns from '@/src/components/Columns';
import Description from './Description';
import Alternative from './Alternative';
import Vertical from './Vertical';
import Interactive from './Interactive';

const StepperPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Description />
            <Alternative />
            <Vertical />
            <Interactive />
        </Columns>
    );
};

export default StepperPage;
