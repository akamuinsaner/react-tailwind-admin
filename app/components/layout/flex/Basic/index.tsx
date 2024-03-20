import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';

const Basic = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Flex>
                    {Array(6)
                        .fill(0)
                        .map((a, i) => (
                            <div
                                className={`flex-1 h-12 ${i % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}
                            ></div>
                        ))}
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Basic;
