import Basic from './Basic/index';
import Vertical from './Vertical';
import Columns from '@/src/components/Columns';
import AutoPlay from './AutoPlay';
import Loop from './Loop';
import Space from './Space';
import SlidesPerView from './SlidesPerView';
import Centered from './Centered';
import Transform from './Transform';
import Wheel from './Wheel';

const CarouselPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Vertical />
            <AutoPlay />
            <Loop />
            <Space />
            <SlidesPerView />
            <Centered />
            <Transform />
            <Wheel />
        </Columns>
    );
};

export default CarouselPage;
