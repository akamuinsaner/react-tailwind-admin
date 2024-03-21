import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Image from '@/src/components/Image';

const Custom = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Vustom preview</CardHeader>
            <CardBody>
                <Image
                    width={500}
                    src='https://rt-admin-1300661566.cos.ap-beijing.myqcloud.com/example_20240319_161316.jpg'
                    preview={{
                        images: [
                            {
                                src: 'https://rt-admin-1300661566.cos.ap-beijing.myqcloud.com/example.jpg',
                            },
                        ],
                    }}
                />
            </CardBody>
        </Card>
    );
};

export default Custom;
