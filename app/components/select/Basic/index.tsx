'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Select from "@/src/components/Select";
import Option from "@/src/components/Select/SelectOption";
import { useState } from "react";

const Basic = () => {
    const [value, setValue] = useState<string>('1');
    const handleChange = (value: string) => {
        console.log(value)
        setValue(value)
    }

    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Basic usage</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <Select defaultValue={'2'}>
                    <Option value="1">Docter</Option>
                    <Option value="2">Lawer</Option>
                    <Option value="3">Scientist</Option>
                    <Option value="4">Entrepreneur</Option>
                    <Option value="5">Astronaut</Option>
                </Select>
                <Select value={value} onChange={handleChange}>
                    <Option value="1">Docter</Option>
                    <Option value="2">Lawer</Option>
                    <Option value="3">Scientist</Option>
                    <Option value="4">Entrepreneur</Option>
                    <Option value="5">Astronaut</Option>
                </Select>
                <Select value={'3'} disabled onChange={handleChange}>
                    <Option value="1">Docter</Option>
                    <Option value="2">Lawer</Option>
                    <Option value="3">Scientist</Option>
                    <Option value="4">Entrepreneur</Option>
                    <Option value="5">Astronaut</Option>
                </Select>
            </CardBody>
        </Card>
    )
}

export default Basic;