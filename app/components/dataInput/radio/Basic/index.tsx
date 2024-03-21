'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Checkbox from "@/src/components/Checkbox";
import RadioGroup from "@/src/components/Radio/RadioGroup";
import Radio from "@/src/components/Radio";

const Basic = () => {
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <Card className="mb-6">
            <CardHeader>Basic usage</CardHeader>
            <CardBody className="flex">
                <RadioGroup onChange={handleChange}>
                    <Radio value="apple">apple</Radio>
                    <Radio value="pear">pear</Radio>
                    <Radio value="orange">orange</Radio>
                    <Radio value="banana">banana</Radio>
                </RadioGroup>

            </CardBody>
        </Card>
    )
}

export default Basic;