import Basic from './Basic/index';
import Columns from '@/src/components/Columns';
import Animation from './Animation';

const ModalPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Animation />
        </Columns>
    );
};

export default ModalPage;
