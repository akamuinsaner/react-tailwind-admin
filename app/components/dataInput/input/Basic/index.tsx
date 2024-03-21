import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Input from "@/src/components/Input";

const Basic = () => {
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Input />
            </CardBody>
        </Card>
    )
}

export default Basic;