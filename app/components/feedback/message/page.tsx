import Basic from './Basic/index';
import Columns from '@/src/components/Columns';
import Type from './Type';
import Duration from './Duration';

const ModalPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Type />
            <Duration />
        </Columns>
    );
};

export default ModalPage;
