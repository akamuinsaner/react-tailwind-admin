import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import CardHeader from "@/src/components/Card/CardHeader";
import CardBody from "@/src/components/Card/CardBody";

const Type = () => {
    return (
        <Card>
            <CardHeader>Diffrent Types</CardHeader>
            <CardBody className="flex gap-4">
                <Button type="contained">Contained</Button>
                <Button type="contained" disabled>disabled</Button>
                <Button type="outlined">Contained</Button>
                <Button type="outlined" disabled>disabled</Button>
                <Button type="text">Contained</Button>
                <Button type="text" disabled>disabled</Button>
            </CardBody>
        </Card>
    )
}

export default Type;