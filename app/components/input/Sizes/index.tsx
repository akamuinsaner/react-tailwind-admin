import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Input from "@/src/components/Input";

const Sizes = () => {
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Size</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <Input size="large" placeholder="large input" prefix="www." suffix=".com" />
                <Input placeholder="medium input" prefix="$"/>
                <Input size="small" placeholder="small input" prefix="https://" />
            </CardBody>
        </Card>
    )
}

export default Sizes;