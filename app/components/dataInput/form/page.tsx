import Basic from './Basic';
import Columns from '@/src/components/Columns';
import Initial from './Initial';
import Layout from './Layout';
import Size from './Size';
import Disabled from './Disable';
import Variant from './Variant';

const FormPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Initial />
            <Layout />
            <Size />
            <Disabled />
            <Variant />
        </Columns>
    );
};

export default FormPage;
