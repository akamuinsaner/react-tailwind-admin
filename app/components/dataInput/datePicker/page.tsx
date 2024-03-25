import Basic from './Basic/index';
import Size from './Size';
import Variant from './Variant';
import Status from './Status';
import Format from './Format';
import Mask from './Mask';
import Limit from './Limit';
import Columns from '@/src/components/Columns';

const DatePickerPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Size />
            <Variant />
            <Status />
            <Format />
            <Mask />
            <Limit />
        </Columns>
    );
};

export default DatePickerPage;
