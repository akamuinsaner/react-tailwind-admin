import Columns from '@/src/components/Columns';
import Grid from './Grid';

const Product = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1600px] mx-auto'
        >
            <Grid />
        </Columns>
    );
};

export default Product;
