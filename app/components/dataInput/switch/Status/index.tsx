'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Checkbox from "@/src/components/Checkbox";
import Switch from "@/src/components/Switch";

const Status = () => {
    return (
        <Card className="mb-6">
            <CardHeader>Status</CardHeader>
            <CardBody className="flex gap-3">
                <Switch defaultChecked status="success" checkedText="success" />
                <Switch defaultChecked status="info" checkedText="info" />
                <Switch defaultChecked status="warning" checkedText="warning" />
                <Switch defaultChecked status="danger" checkedText="danger" />
            </CardBody>
        </Card>
    )
}

export default Status;