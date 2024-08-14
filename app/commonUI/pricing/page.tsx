import Columns from '@/src/components/Columns';
import Tiers from './Tiers';
import Single from './Single';

const Pricing = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1600px] mx-auto'
        >
            <Single />
            <Tiers />
        </Columns>
    );
};

export default Pricing;
