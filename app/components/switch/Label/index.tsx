'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Switch from "@/src/components/Switch";

const Label = () => {
    const handleChange = (e) => {
        console.log(e.target.checked)
    }
    return (
        <Card className="mb-6">
            <CardHeader>Label</CardHeader>
            <CardBody className="flex">
                <Switch onChange={handleChange} >Switch</Switch>
            </CardBody>
        </Card>
    )
}

export default Label;