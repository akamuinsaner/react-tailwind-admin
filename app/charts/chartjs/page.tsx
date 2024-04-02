import Grid from '@/src/components/Grid';
import BarChart from './Bar';
import ChartJSLineChart from './Line';
import ChartJSPieChart from './Pie';

const ChartJS = () => {
    return (
        <Grid wrapper rowGap='medium' colGap='medium'>
            <Grid span={{ default: 12, '2xl': 6 }}>
                <BarChart />
            </Grid>
            <Grid span={{ default: 12, '2xl': 6 }}>
                <ChartJSLineChart />
            </Grid>
            <Grid span={{ default: 12, '2xl': 6 }}>
                <ChartJSPieChart />
            </Grid>
        </Grid>
    );
};

export default ChartJS;
