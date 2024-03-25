import Box from '@/src/components/Box';
import Columns from '@/src/components/Columns';
import Basic from './Basic/index';
import Densed from './Densed/index';
import Divided from './Divided/index';
import Icon from './Icon/index';
import User from './User/index';

const ListPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Densed />
            <Divided />
            <Icon />
            <User />
        </Columns>
    );
};

export default ListPage;
