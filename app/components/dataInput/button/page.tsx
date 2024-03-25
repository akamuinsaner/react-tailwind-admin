import Basic from './Basic';
import Variants from './Variants';
import Color from './Color';
import Size from './Size';
import Icon from './Icon';
import Grouped from './Grouped';
import Columns from '@/src/components/Columns';

const ButtonPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Variants />
            <Color />
            <Size />
            <Icon />
            <Grouped />
        </Columns>
    );
};

export default ButtonPage;
