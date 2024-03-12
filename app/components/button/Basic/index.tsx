import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import CardHeader from "@/src/components/Card/CardHeader";
import CardBody from "@/src/components/Card/CardBody";

const Basic = () => {
    return (
        <Card>
            <CardHeader>Basic</CardHeader>
            <CardBody className="flex gap-4">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </CardBody>
        </Card>
    )
}

export default Basic;