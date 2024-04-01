import Box from '@/src/components/Box';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import DatePicker from '@/src/components/DatePicker';

export const Calendar = () => {
    return (
        <Card>
            <CardBody>
                <Box className='h-96'>
                    <DatePicker standalone />
                </Box>
            </CardBody>
        </Card>
    );
};

export default Calendar;
