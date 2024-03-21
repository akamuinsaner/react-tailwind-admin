import Box from '@/src/components/Box';
import Columns from '@/src/components/Columns';
import Basic from './Basic/index';

const SliderPage = () => {
    return (
        <Columns gap='medium' space='medium' count={{ default: 1, xl: 2 }}>
            <Basic />
        </Columns>
    );
};

export default SliderPage;
