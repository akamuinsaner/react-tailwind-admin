import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import CardHeader from "@/src/components/Card/CardHeader";
import CardBody from "@/src/components/Card/CardBody";

const Size = () => {
    return (
        <Card>
            <CardHeader>Size</CardHeader>
            <CardBody className="flex gap-4 flex-col">
                <div className="flex gap-4 flex-row items-center">
                    <Button size="small" type="text">small</Button>
                    <Button size="medium" type="text">medium</Button>
                    <Button size="large" type="text">large</Button>
                </div>
                <div className="flex gap-4 flex-row items-center">
                    <Button size="small" type="outlined">small</Button>
                    <Button size="medium" type="outlined">medium</Button>
                    <Button size="large" type="outlined">large</Button>
                </div>
                <div className="flex gap-4 flex-row items-center">
                    <Button size="small" type="contained">small</Button>
                    <Button size="medium" type="contained">medium</Button>
                    <Button size="large" type="contained">large</Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default Size;