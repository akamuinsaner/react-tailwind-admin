import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Image from '@/src/components/Image';

const Preview = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Preview</CardHeader>
            <CardBody>
                <Image
                    preview
                    width={500}
                    src='https://rt-admin-1300661566.cos.ap-beijing.myqcloud.com/example2.jpg'
                />
            </CardBody>
        </Card>
    );
};

export default Preview;
