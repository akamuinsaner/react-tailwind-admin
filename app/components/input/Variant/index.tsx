import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Input from "@/src/components/Input";

const Variant = () => {
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Variant</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <Input variant="outlined" placeholder="outlined" />
                <Input variant="contained" placeholder="contained" />
                <Input variant="underlined" placeholder="underlined" />
                <Input variant="borderless" placeholder="borderless" />
                <Input disabled value="qweqwewqe" />
            </CardBody>
        </Card>
    )
}

export default Variant;