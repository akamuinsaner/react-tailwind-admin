import Columns from '@/src/components/Columns';
import Basic from './Basic/index';
import Placement from './Placement';
import Size from './Size';

const ModalPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Placement />
            <Size />
        </Columns>
    );
};

export default ModalPage;
