import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Select from "@/src/components/Select";
import Option from "@/src/components/Select/SelectOption";

const Variant = () => {
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Variant</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <Select variant="outlined" placeholder="outlined select">
                    <Option value="1">Docter</Option>
                    <Option value="2">Lawer</Option>
                    <Option value="3">Scientist</Option>
                    <Option value="4">Entrepreneur</Option>
                    <Option value="5">Astronaut</Option>
                </Select>
                <Select variant="contained" placeholder="contained select">
                    <Option value="1">Docter</Option>
                    <Option value="2">Lawer</Option>
                    <Option value="3">Scientist</Option>
                    <Option value="4">Entrepreneur</Option>
                    <Option value="5">Astronaut</Option>
                </Select>
                <Select variant="underlined" placeholder="underlined select">
                    <Option value="1">Docter</Option>
                    <Option value="2">Lawer</Option>
                    <Option value="3">Scientist</Option>
                    <Option value="4">Entrepreneur</Option>
                    <Option value="5">Astronaut</Option>
                </Select>
                <Select variant="borderless" placeholder="borderless select">
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

export default Variant;