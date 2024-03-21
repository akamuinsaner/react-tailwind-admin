import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import DatePicker from "@/src/components/DatePicker";
import DateRangePicker from "@/src/components/DatePicker/DateRangePicker";
import Input from "@/src/components/Input";

const Variant = () => {
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Variant</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <DatePicker variant="outlined" placeholder="outlined" />
                <DateRangePicker variant="outlined" placeholder={["outlined", "outlined"]} />
                <DatePicker variant="contained" placeholder="contained" />
                <DateRangePicker variant="contained" placeholder={["contained", "contained"]} />
                <DatePicker variant="underlined" placeholder="underlined" />
                <DateRangePicker variant="underlined" placeholder={["underlined", "underlined"]} />
                <DatePicker variant="borderless" placeholder="borderless" />
                <DateRangePicker variant="borderless" placeholder={["borderless", "borderless"]} />
                <DatePicker disabled placeholder="disabled" />
                <DateRangePicker disabled placeholder={["disabled", "disabled"]} />
            </CardBody>
        </Card>
    )
}

export default Variant;