import Badge from '@/src/components/Badge';
import Divider from '@/src/components/Divider';
import Flex from '@/src/components/Flex';
import { EnvelopeIcon, BellIcon } from '@heroicons/react/24/outline';

const NavIcons = () => {
    return (
        <Flex>
            <Badge count={100} maxCount={99}>
                <EnvelopeIcon className='h-6 w-6' />
            </Badge>
            <Divider vertical gap='large' />
            <Badge count={37}>
                <BellIcon className='h-6 w-6' />
            </Badge>
        </Flex>
    );
};

export default NavIcons;
