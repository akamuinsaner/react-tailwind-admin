import Grid from '@/src/components/Grid';
import Calendar from './Calendar';

const Home = () => {
    return (
        <Grid wrapper rowGap='medium' colGap='medium'>
            <Grid span={{ default: 12, xl: 6, '2xl': 3 }}>
                <Calendar />
            </Grid>
        </Grid>
    );
};

export default Home;
