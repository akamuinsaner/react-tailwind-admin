import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Grid from '@/src/components/Grid';

const Offset = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Offset</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <Grid wrapper>
                        <Grid
                            span={2}
                            className='text-center py-4 bg-primary text-white'
                        >
                            span-2 offset-0
                        </Grid>
                        <Grid
                            span={2}
                            offset={2}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            span-2 offset-2
                        </Grid>
                        <Grid
                            span={2}
                            offset={2}
                            className='text-center py-4 bg-primary text-white'
                        >
                            span-2 offset-2
                        </Grid>
                    </Grid>
                    <Grid wrapper>
                        <Grid
                            span={4}
                            className='text-center py-4 bg-primary text-white'
                        >
                            span-4 offset-0
                        </Grid>
                        <Grid
                            span={4}
                            offset={2}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            span-4 offset-2
                        </Grid>
                    </Grid>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Offset;
