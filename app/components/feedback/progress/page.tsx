import Columns from '@/src/components/Columns';
import Basic from './Basic/index';
import Color from './Color';
import Controlled from './Controlled';
import Circular from './Circular';

const ModalPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Color />
            <Controlled />
            <Circular />
        </Columns>
    );
};

export default ModalPage;
