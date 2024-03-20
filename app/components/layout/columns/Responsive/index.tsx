import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Columns from '@/src/components/Columns';
import Flex from '@/src/components/Flex';

const Responsive = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Responsive</CardHeader>
            <CardBody>
                <Columns count={{ default: 1, md: 2, xl: 3 }}>
                    {Array(6)
                        .fill(0)
                        .map((a, i) => (
                            <Flex
                                align='center'
                                justify='center'
                                className={`h-12 ${i % 2 === 0 ? 'bg-primary' : 'bg-secondary'} text-white`}
                            >
                                {i + 1}
                            </Flex>
                        ))}
                </Columns>
            </CardBody>
        </Card>
    );
};

export default Responsive;
