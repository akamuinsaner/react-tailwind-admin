import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Grid from '@/src/components/Grid';

const Basic = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Grid wrapper rowGap='medium'>
                    <Grid wrapper>
                        <Grid
                            span={12}
                            className='text-center py-4 bg-primary text-white'
                        >
                            12
                        </Grid>
                    </Grid>
                    <Grid wrapper>
                        <Grid
                            span={6}
                            className='text-center py-4 bg-primary text-white'
                        >
                            6
                        </Grid>
                        <Grid
                            span={6}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            6
                        </Grid>
                    </Grid>
                    <Grid wrapper>
                        <Grid
                            span={4}
                            className='text-center py-4 bg-primary text-white'
                        >
                            4
                        </Grid>
                        <Grid
                            span={4}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            4
                        </Grid>
                        <Grid
                            span={4}
                            className='text-center py-4 bg-primary text-white'
                        >
                            4
                        </Grid>
                    </Grid>
                    <Grid wrapper>
                        <Grid
                            span={3}
                            className='text-center py-4 bg-primary text-white'
                        >
                            3
                        </Grid>
                        <Grid
                            span={3}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            3
                        </Grid>
                        <Grid
                            span={3}
                            className='text-center py-4 bg-primary text-white'
                        >
                            3
                        </Grid>
                        <Grid
                            span={3}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            3
                        </Grid>
                    </Grid>
                    <Grid wrapper>
                        <Grid
                            span={2}
                            className='text-center py-4 bg-primary text-white'
                        >
                            2
                        </Grid>
                        <Grid
                            span={2}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            2
                        </Grid>
                        <Grid
                            span={2}
                            className='text-center py-4 bg-primary text-white'
                        >
                            2
                        </Grid>
                        <Grid
                            span={2}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            2
                        </Grid>
                        <Grid
                            span={2}
                            className='text-center py-4 bg-primary text-white'
                        >
                            2
                        </Grid>
                        <Grid
                            span={2}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            2
                        </Grid>
                    </Grid>
                    <Grid wrapper>
                        <Grid
                            span={1}
                            className='text-center py-4 bg-primary text-white'
                        >
                            1
                        </Grid>
                        <Grid
                            span={1}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            1
                        </Grid>
                        <Grid
                            span={1}
                            className='text-center py-4 bg-primary text-white'
                        >
                            1
                        </Grid>
                        <Grid
                            span={1}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            1
                        </Grid>
                        <Grid
                            span={1}
                            className='text-center py-4 bg-primary text-white'
                        >
                            1
                        </Grid>
                        <Grid
                            span={1}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            1
                        </Grid>
                        <Grid
                            span={1}
                            className='text-center py-4 bg-primary text-white'
                        >
                            1
                        </Grid>
                        <Grid
                            span={1}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            1
                        </Grid>
                        <Grid
                            span={1}
                            className='text-center py-4 bg-primary text-white'
                        >
                            1
                        </Grid>
                        <Grid
                            span={1}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            1
                        </Grid>
                        <Grid
                            span={1}
                            className='text-center py-4 bg-primary text-white'
                        >
                            1
                        </Grid>
                        <Grid
                            span={1}
                            className='text-center py-4 bg-secondary text-white'
                        >
                            1
                        </Grid>
                    </Grid>
                </Grid>
            </CardBody>
        </Card>
    );
};

export default Basic;
