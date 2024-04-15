import Columns from '@/src/components/Columns';
import Basic from './Basic';

const Profile = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
        </Columns>
    );
};

export default Profile;
