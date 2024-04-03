import Grid from '@/src/components/Grid';
import Calendar from './Calendar';
import Clock from './Clock';
import Swipe from './Swipe';
import Table from './Table';
import Tl from './Timeline';
import StepperComp from './Stepper';
import ListComp from './List';
import FormComp from './Form';

const Home = () => {
    return (
        <Grid wrapper rowGap='medium' colGap='medium'>
            <Grid span={{ default: 12, xl: 6, '2xl': 4 }}>
                <Calendar />
            </Grid>
            <Grid span={{ default: 12, xl: 6, '2xl': 4 }}>
                <Clock />
            </Grid>
            <Grid span={{ default: 12, '2xl': 4 }}>
                <Swipe />
            </Grid>
            <Grid span={{ default: 12, '2xl': 4 }}>
                <Tl />
            </Grid>

            <Grid span={{ default: 12, '2xl': 8 }}>
                <Table />
            </Grid>
            <Grid span={{ default: 12, '2xl': 9 }}>
                <StepperComp />
            </Grid>
            <Grid span={{ default: 12, '2xl': 3 }}>
                <ListComp />
            </Grid>
            {/* <Grid span={{ default: 12, '2xl': 3 }}>
                <FormComp />
            </Grid> */}
        </Grid>
    );
};

export default Home;
