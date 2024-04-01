import Grid from '@/src/components/Grid';
import Calendar from './Calendar';
import Clock from './Clock';
import Swipe from './Swipe';

const Home = () => {
    return (
        <Grid wrapper rowGap='medium' colGap='medium'>
            <Grid span={{ default: 12, xl: 6, '2xl': 4 }}>
                <Calendar />
            </Grid>
            <Grid span={{ default: 12, xl: 6, '2xl': 4 }}>
                <Clock />
            </Grid>
            <Grid
                span={{ default: 12, xl: 6, '2xl': 4 }}
                className='overflow-hidden'
            >
                <Swipe />
            </Grid>
        </Grid>
    );
};

export default Home;
