'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Switch from "@/src/components/Switch";

const Size = () => {

    return (
        <Card className="mb-6">
            <CardHeader>Size</CardHeader>
            <CardBody className="flex gap-3">
                <Switch size="small" defaultChecked checkedText="small" unCheckedText="small" />
                <Switch size="medium" defaultChecked checkedText="medium" unCheckedText="medium" />
                <Switch size="large" defaultChecked checkedText="large" unCheckedText="large" />
            </CardBody>
        </Card>
    )
}

export default Size;