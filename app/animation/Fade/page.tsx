import FadeInComp from './FadeInComp';
import Columns from '@/src/components/Columns';
import Flex from '@/src/components/Flex';

const FadePage = () => {
    return (
        <Flex direction='column' gap='medium'>
            <FadeInComp />
        </Flex>
    );
};

export default FadePage;
