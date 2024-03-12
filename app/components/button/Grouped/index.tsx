import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Button from "@/src/components/Button";
import ButtonGroup from "@/src/components/Button/ButtonGroup";

const Grouped = () => {
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Grouped</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <div className="flex gap-3">
                    <ButtonGroup size="small">
                        <Button>small</Button>
                        <Button>small</Button>
                        <Button>small</Button>
                    </ButtonGroup>
                    <ButtonGroup size="medium">
                        <Button>medium</Button>
                        <Button>medium</Button>
                        <Button>medium</Button>
                    </ButtonGroup>
                    <ButtonGroup size="large">
                        <Button>large</Button>
                        <Button>large</Button>
                        <Button>large</Button>
                    </ButtonGroup>
                </div>
                <div className="flex gap-3">
                    <ButtonGroup variant="contained">
                        <Button>contained</Button>
                        <Button>contained</Button>
                        <Button>contained</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="outlined">
                        <Button>outlined</Button>
                        <Button>outlined</Button>
                        <Button>outlined</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="text">
                        <Button>text</Button>
                        <Button>text</Button>
                        <Button>text</Button>
                    </ButtonGroup>
                </div>
                <div className="flex gap-3">
                    <ButtonGroup color="primary">
                        <Button>primary</Button>
                        <Button>primary</Button>
                        <Button>primary</Button>
                    </ButtonGroup>
                    <ButtonGroup color="secondary">
                        <Button>secondary</Button>
                        <Button>secondary</Button>
                        <Button>secondary</Button>
                    </ButtonGroup>
                    <ButtonGroup color="success">
                        <Button>success</Button>
                        <Button>success</Button>
                        <Button>success</Button>
                    </ButtonGroup>
                </div>
                <div className="flex gap-3">
                    <ButtonGroup color="info">
                        <Button>info</Button>
                        <Button>info</Button>
                        <Button>info</Button>
                    </ButtonGroup>
                    <ButtonGroup color="warning">
                        <Button>warning</Button>
                        <Button>warning</Button>
                        <Button>warning</Button>
                    </ButtonGroup>
                    <ButtonGroup color="danger">
                        <Button>danger</Button>
                        <Button>danger</Button>
                        <Button>danger</Button>
                    </ButtonGroup>
                </div>
            </CardBody>
        </Card>
    )
}

export default Grouped;