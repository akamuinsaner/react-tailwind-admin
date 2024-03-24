import FadeInComp from './FadeInComp';
import Columns from '@/src/components/Columns';

const FadePage = () => {
    return (
        <Columns count={{ default: 1, xl: 2 }} gap='medium' space='medium'>
            <FadeInComp />
        </Columns>
    );
};

export default FadePage;
