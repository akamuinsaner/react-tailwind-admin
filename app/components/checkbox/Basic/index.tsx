'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Checkbox from "@/src/components/Checkbox";

const Basic = () => {
    const handleChange = (e) => {
        console.log(e.target.checked)
    }
    return (
        <Card className="mb-6">
            <CardHeader>Basic usage</CardHeader>
            <CardBody className="flex">
                <Checkbox onChange={handleChange}>checkbox</Checkbox>
            </CardBody>
        </Card>
    )
}

export default Basic;