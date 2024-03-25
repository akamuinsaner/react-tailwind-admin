import Basic from './Basic/index';
import Sizes from './Sizes';
import Addons from './Addons';
import Variant from './Variant';
import Status from './Status';
import Password from './Password';
import Textareas from './Textarea';
import Count from './Count';
import Grouped from './Grouped';
import Columns from '@/src/components/Columns';

const InputPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Sizes />
            <Addons />
            <Variant />
            <Status />
            <Password />
            <Textareas />
            <Count />
            <Grouped />
        </Columns>
    );
};

export default InputPage;
