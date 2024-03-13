'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import MultiSelect from "@/src/components/MultiSelect";
import Option from "@/src/components/MultiSelect/SelectOption";

const Multiple = () => {
    const handleChange = (value: string[]) => {
        console.log(value)
    }

    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Multiple</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <MultiSelect
                    onChange={handleChange}
                    size="small"
                    placeholder="small"
                    defaultValue={['1', '4']}
                >
                    <Option value="1">Docter</Option>
                    <Option value="2">Lawer</Option>
                    <Option value="3">Scientist</Option>
                    <Option value="4">Entrepreneur</Option>
                    <Option value="5">Astronaut</Option>
                </MultiSelect>
                <MultiSelect
                    onChange={handleChange}
                    size="medium"
                    placeholder="medium"
                    defaultValue={['1', '4']}
                >
                    <Option value="1">Docter</Option>
                    <Option value="2">Lawer</Option>
                    <Option value="3">Scientist</Option>
                    <Option value="4">Entrepreneur</Option>
                    <Option value="5">Astronaut</Option>
                </MultiSelect>
                <MultiSelect
                    onChange={handleChange}
                    size="large"
                    placeholder="large"
                    defaultValue={['1', '4']}
                >
                    <Option value="1">Docter</Option>
                    <Option value="2">Lawer</Option>
                    <Option value="3">Scientist</Option>
                    <Option value="4">Entrepreneur</Option>
                    <Option value="5">Astronaut</Option>
                </MultiSelect>
                <MultiSelect
                    onChange={handleChange}
                    variant="contained"
                    placeholder="contained"
                    defaultValue={['1', '4']}
                >
                    <Option value="1">Docter</Option>
                    <Option value="2">Lawer</Option>
                    <Option value="3">Scientist</Option>
                    <Option value="4">Entrepreneur</Option>
                    <Option value="5">Astronaut</Option>
                </MultiSelect>
                <MultiSelect
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="outlined"
                    defaultValue={['1', '4']}
                >
                    <Option value="1">Docter</Option>
                    <Option value="2">Lawer</Option>
                    <Option value="3">Scientist</Option>
                    <Option value="4">Entrepreneur</Option>
                    <Option value="5">Astronaut</Option>
                </MultiSelect>
                <MultiSelect
                    onChange={handleChange}
                    variant="underlined"
                    placeholder="underlined"
                    defaultValue={['1', '4']}
                >
                    <Option value="1">Docter</Option>
                    <Option value="2">Lawer</Option>
                    <Option value="3">Scientist</Option>
                    <Option value="4">Entrepreneur</Option>
                    <Option value="5">Astronaut</Option>
                </MultiSelect>
                <MultiSelect
                    onChange={handleChange}
                    variant="borderless"
                    placeholder="borderless"
                    defaultValue={['1', '4']}
                >
                    <Option value="1">Docter</Option>
                    <Option value="2">Lawer</Option>
                    <Option value="3">Scientist</Option>
                    <Option value="4">Entrepreneur</Option>
                    <Option value="5">Astronaut</Option>
                </MultiSelect>
                <MultiSelect
                    disabled
                    value={['1', '3']}
                >
                    <Option value="1">Docter</Option>
                    <Option value="2">Lawer</Option>
                    <Option value="3">Scientist</Option>
                    <Option value="4">Entrepreneur</Option>
                    <Option value="5">Astronaut</Option>
                </MultiSelect>
            </CardBody>
        </Card>
    )
}

export default Multiple;