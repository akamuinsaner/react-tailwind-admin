import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import DatePicker from "@/src/components/DatePicker";
import DateRangePicker from "@/src/components/DatePicker/DateRangePicker";
import Input from "@/src/components/Input";

const Status = () => {
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Status</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <DatePicker status="success" placeholder="success" />
                <DateRangePicker status="success" placeholder={["success", "success"]} />
                <DatePicker status="info" placeholder="info" />
                <DateRangePicker status="info" placeholder={["info", "info"]} />
                <DatePicker status="warning" placeholder="warning" />
                <DateRangePicker status="warning" placeholder={["warning", "warning"]} />
                <DatePicker status="danger" placeholder="danger" />
                <DateRangePicker status="danger" placeholder={["danger", "danger"]} />
            </CardBody>
        </Card>
    )
}

export default Status;