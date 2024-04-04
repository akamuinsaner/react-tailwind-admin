import { InboxIcon } from '@heroicons/react/24/outline';

const Empty = () => {
    return (
        <div className='w-full flex items-center justify-center text-disableText flex-col py-10'>
            <InboxIcon className='h-10 w-10' />
            <span>no data</span>
        </div>
    );
};

export default Empty;
