import Basic from './Basic';
import Severity from './Severity';
import Icon from './Icon';
import Type from './Type';
import Accent from './Accent';
import Action from './Action';
import Columns from '@/src/components/Columns';

const AlertPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Severity />
            <Icon />
            <Type />
            <Accent />
            <Action />
        </Columns>
    );
};

export default AlertPage;
