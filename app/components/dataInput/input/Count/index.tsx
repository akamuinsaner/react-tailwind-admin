import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Input from "@/src/components/Input";
import Textarea from "@/src/components/Textarea";

const Count = () => {
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Count</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <Input showCount />
                <Input showCount maxLength={10} />
                <Textarea showCount />
                <Textarea showCount maxLength={100} />
            </CardBody>
        </Card>
    )
}

export default Count;