import Columns from '@/src/components/Columns';
import Commodity from './Commodity';
import Travel from './Travel';
import CICD from './CICD';
import Testimonial from './Testimonial';
import Blog from './Blog';

const Card = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Commodity />
            <Travel />
            <CICD />
            <Testimonial />
            <Blog />
        </Columns>
    );
};

export default Card;
