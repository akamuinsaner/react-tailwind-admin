import Basic from './Basic';
import Status from './Status';
import Indeterminate from './Indeterminate';
import Disabled from './Disabled';
import Controlled from './Controlled';
import Columns from '@/src/components/Columns';

const CheckboxPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Status />
            <Indeterminate />
            <Disabled />
            <Controlled />
        </Columns>
    );
};

export default CheckboxPage;
