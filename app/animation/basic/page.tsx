import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import Columns from '@/src/components/Columns';
import Grid from '@/src/components/Grid';
import Bounce from './attention/bounce';

const BasicAnimations = () => {
    return (
        <Columns count={1} space='medium'>
            <Grid wrapper>
                <Grid span={2}>
                    <Bounce />
                </Grid>
            </Grid>
        </Columns>
    );
};

export default BasicAnimations;
