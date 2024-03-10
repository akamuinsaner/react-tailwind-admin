import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Alert from "@/src/components/Alert";

const Basic = () => {
    return (
        <Card className="mb-6">
            <CardHeader>Basic usage</CardHeader>
            <CardBody className="flex">
                <Alert>
                    This is a successful alert, which mean that you operation has been successfully executed
                </Alert>
            </CardBody>
        </Card>
    )
}

export default Basic;