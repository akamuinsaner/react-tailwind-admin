import Basic from './Basic';
import Severity from './Severity';
import Icon from './Icon';
import Type from './Type';
import Accent from './Accent';
import Action from './Action';
import Columns from '@/src/components/Columns';

const AlertPage = () => {
    return (
        <Columns count={{ default: 1, xl: 2 }}>
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
