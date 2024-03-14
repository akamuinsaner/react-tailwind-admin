'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Checkbox from "@/src/components/Checkbox";

const Status = () => {
    return (
        <Card className="mb-6">
            <CardHeader>Status</CardHeader>
            <CardBody className="flex gap-3">
                <Checkbox defaultChecked status="success">success</Checkbox>
                <Checkbox defaultChecked status="info">info</Checkbox>
                <Checkbox defaultChecked status="warning">warning</Checkbox>
                <Checkbox defaultChecked status="danger">danger</Checkbox>
            </CardBody>
        </Card>
    )
}

export default Status;