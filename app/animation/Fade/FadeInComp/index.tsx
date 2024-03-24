import FadeIn from '@/src/animations/FadeIn';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Grid from '@/src/components/Grid';
import { Box } from 'framer-motion';

const FadeInComp = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Fade In</CardHeader>
            <CardBody>
                <Grid wrapper colGap='medium' rowGap='medium'>
                    <Grid span={2}>
                        <FadeIn>
                            <Flex
                                align='center'
                                justify='center'
                                className='h-32 bg-primary text-white'
                            >
                                Auto
                            </Flex>
                        </FadeIn>
                    </Grid>
                    <Grid span={2}>
                        <FadeIn trigger='hover'>
                            <Flex
                                align='center'
                                justify='center'
                                className='h-32 bg-primary text-white'
                            >
                                Auto
                            </Flex>
                        </FadeIn>
                    </Grid>
                </Grid>
            </CardBody>
        </Card>
    );
};

export default FadeInComp;
