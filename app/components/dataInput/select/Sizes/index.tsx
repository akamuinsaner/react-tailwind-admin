import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Select from "@/src/components/Select";
import Option from "@/src/components/Select/SelectOption";

const Sizes = () => {
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Size</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <Select size="small" placeholder="small size">
                    <Option value="1">front-end developer</Option>
                    <Option value="2">back-end developer</Option>
                    <Option value="3">full-stack developer</Option>
                    <Option value="4">product manager</Option>
                    <Option value="5">HR manager</Option>
                </Select>
                <Select size="medium" placeholder="medium size">
                    <Option value="1">front-end developer</Option>
                    <Option value="2">back-end developer</Option>
                    <Option value="3">full-stack developer</Option>
                    <Option value="4">product manager</Option>
                    <Option value="5">HR manager</Option>
                </Select>
                <Select size="large" placeholder="large size">
                    <Option value="1">front-end developer</Option>
                    <Option value="2">back-end developer</Option>
                    <Option value="3">full-stack developer</Option>
                    <Option value="4">product manager</Option>
                    <Option value="5">HR manager</Option>
                </Select>
            </CardBody>
        </Card>
    )
}

export default Sizes;