import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import BarChart from '@/src/charts/chartjs/components/Bar';

const Basic = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <BarChart
                    title={{
                        align: 'start',
                        display: true,
                        position: 'top',
                        color: '#000000',
                        font: {
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                            size: 16,
                            style: 'normal',
                            weight: 'bold',
                            lineHeight: 1.2,
                        },
                        fullSize: true,
                        padding: 0,
                        text: '123131313',
                    }}
                    subtitle={{
                        align: 'start',
                        display: true,
                        position: 'top',
                        color: '#000000',
                        font: {
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                            size: 14,
                            style: 'normal',
                            weight: 'normal',
                            lineHeight: 1.2,
                        },
                        fullSize: true,
                        padding: 0,
                        text: '123131313',
                    }}
                />
            </CardBody>
        </Card>
    );
};

export default Basic;
