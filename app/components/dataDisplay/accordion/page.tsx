import Basic from './Basic/index';
import Controlled from './controlled';
import One from './One';
import Icon from './Icon';
import Disabled from './Disabled';
import Flex from '@/src/components/Flex';

const AccordionPage = () => {
    return (
        <Flex direction='column' gap='medium'>
            <Basic />
            <Controlled />
            <One />
            <Icon />
            <Disabled />
        </Flex>
    );
};

export default AccordionPage;
