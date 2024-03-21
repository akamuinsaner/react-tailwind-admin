'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Checkbox from "@/src/components/Checkbox";
import Radio from "@/src/components/Radio";
import RadioGroup from "@/src/components/Radio/RadioGroup";

const Status = () => {
    return (
        <Card className="mb-6">
            <CardHeader>Status</CardHeader>
            <CardBody className="flex gap-3">
                <RadioGroup defaultValue={"info"}>
                    <Radio status="success" value="success">success</Radio>
                    <Radio status="info" value="info">info</Radio>
                    <Radio status="warning" value="warning">warning</Radio>
                    <Radio status="danger" value="danger">danger</Radio>
                </RadioGroup>
            </CardBody>
        </Card>
    )
}

export default Status;