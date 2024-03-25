import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Grid from '@/src/components/Grid';

const Responsive = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Responsive</CardHeader>
            <CardBody>
                <Grid wrapper>
                    {Array(12)
                        .fill(0)
                        .map((item, i) => {
                            return (
                                <Grid
                                    key={i}
                                    span={{
                                        default: 6,
                                        md: 4,
                                        lg: 3,
                                        xl: 2,
                                        '2xl': 1,
                                    }}
                                    className={`text-center py-4 ${i % 2 === 0 ? 'bg-primary' : 'bg-secondary'} text-white`}
                                >
                                    item
                                </Grid>
                            );
                        })}
                </Grid>
            </CardBody>
        </Card>
    );
};

export default Responsive;
