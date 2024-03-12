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
                    <Button size="small" variant="text">small</Button>
                    <Button size="medium" variant="text">medium</Button>
                    <Button size="large" variant="text">large</Button>
                </div>
                <div className="flex gap-4 flex-row items-center">
                    <Button size="small" variant="outlined">small</Button>
                    <Button size="medium" variant="outlined">medium</Button>
                    <Button size="large" variant="outlined">large</Button>
                </div>
                <div className="flex gap-4 flex-row items-center">
                    <Button size="small" variant="contained">small</Button>
                    <Button size="medium" variant="contained">medium</Button>
                    <Button size="large" variant="contained">large</Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default Size;