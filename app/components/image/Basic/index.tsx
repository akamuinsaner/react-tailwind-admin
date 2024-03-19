import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Image from '@/src/components/Image';

const Basic = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Image
                    width={300}
                    src='https://rt-admin-1300661566.cos.ap-beijing.myqcloud.com/example.jpg'
                />
            </CardBody>
        </Card>
    );
};

export default Basic;
