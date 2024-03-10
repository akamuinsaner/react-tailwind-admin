import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import CardHeader from "@/src/components/Card/CardHeader";
import CardBody from "@/src/components/Card/CardBody";

const Basic = () => {
    return (
        <Card>
            <CardHeader>Basic</CardHeader>
            <CardBody className="flex gap-4">
                <Button type="text">Text</Button>
                <Button type="contained">Contained</Button>
                <Button type="outlined">Outlined</Button>
            </CardBody>
        </Card>
    )
}

export default Basic;