import Basic from './Basic/index';
import Controlled from './controlled';
import One from './One';
import Icon from './Icon';
import Disabled from './Disabled';
import Flex from '@/src/components/Flex';
import Columns from '@/src/components/Columns';

const AccordionPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Controlled />
            <One />
            <Icon />
            <Disabled />
        </Columns>
    );
};

export default AccordionPage;
