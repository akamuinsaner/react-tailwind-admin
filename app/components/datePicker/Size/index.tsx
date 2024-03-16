import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import DatePicker from "@/src/components/DatePicker";
import DateRangePicker from "@/src/components/DatePicker/DateRangePicker";

const Sizes = () => {
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Size</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <DatePicker size="small" placeholder="small datepicker" />
                <DatePicker size="medium" placeholder="medium datepicker" />
                <DatePicker size="large" placeholder="large datepicker" />
                <DateRangePicker size="small" placeholder={['start date', 'end date']} />
                <DateRangePicker size="medium" placeholder={['start date', 'end date']} />
                <DateRangePicker size="large" placeholder={['start date', 'end date']} />
            </CardBody>
        </Card>
    )
}

export default Sizes;