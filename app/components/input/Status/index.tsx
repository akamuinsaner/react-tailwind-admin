import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Input from "@/src/components/Input";

const Status = () => {
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Status</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <Input placeholder="success input" prefix="www." suffix=".com" status="success" />
                <Input placeholder="info input" prefix="https://" status="info" />
                <Input placeholder="warning input" prefix="www." suffix=".com" status="warning" />
                <Input placeholder="danger input" prefix="https://" status="danger" />
            </CardBody>
        </Card>
    )
}

export default Status;