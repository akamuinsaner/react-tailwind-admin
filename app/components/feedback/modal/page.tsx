import Basic from './Basic/index';
import Sizes from './Sizes';
import Closable from './Closable';
import Confirms from './Confirms';
import CloseIcon from './CloseIcon';
import Columns from '@/src/components/Columns';

const ModalPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Sizes />
            <Closable />
            <Confirms />
            <CloseIcon />
        </Columns>
    );
};

export default ModalPage;
