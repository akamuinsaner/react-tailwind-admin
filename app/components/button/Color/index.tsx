import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import CardHeader from "@/src/components/Card/CardHeader";
import CardBody from "@/src/components/Card/CardBody";

const Color = () => {
    return (
        <Card>
            <CardHeader>Color</CardHeader>
            <CardBody className="flex gap-4 flex-col">
                <div className="flex gap-4 flex-row">
                    <Button color="primary">Primary</Button>
                    <Button color="secondary">Secondary</Button>
                    <Button color="success">Success</Button>
                    <Button color="info">Info</Button>
                    <Button color="warning">Warning</Button>
                    <Button color="danger">Danger</Button>
                    <Button disabled>Disabled</Button>
                </div>
                <div className="flex gap-4 flex-row">
                    <Button type="outlined" color="primary">Primary</Button>
                    <Button type="outlined" color="secondary">Secondary</Button>
                    <Button type="outlined" color="success">Success</Button>
                    <Button type="outlined" color="info">Info</Button>
                    <Button type="outlined" color="warning">Warning</Button>
                    <Button type="outlined" color="danger">Danger</Button>
                    <Button type="outlined" disabled>Disabled</Button>
                </div>
                <div className="flex gap-4 flex-row">
                    <Button type="text" color="primary">Primary</Button>
                    <Button type="text" color="secondary">Secondary</Button>
                    <Button type="text" color="success">Success</Button>
                    <Button type="text" color="info">Info</Button>
                    <Button type="text" color="warning">Warning</Button>
                    <Button type="text" color="danger">Danger</Button>
                    <Button type="text" disabled>Disabled</Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default Color;