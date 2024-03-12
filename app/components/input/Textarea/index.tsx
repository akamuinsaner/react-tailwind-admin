import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Textarea from "@/src/components/Textarea";

const Textareas = () => {
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Textarea</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <Textarea
                    rows={1}
                    placeholder="1 row"
                />
                <Textarea
                    rows={2}
                    placeholder="multi rows"
                />
                <Textarea
                    rows={2}
                    placeholder="success textarea"
                    status="success"
                />
                <Textarea
                    rows={2}
                    placeholder="info textarea"
                    status="info"
                />
                <Textarea
                    rows={2}
                    placeholder="warning textarea"
                    status="warning"
                />
                <Textarea
                    rows={2}
                    placeholder="danger textarea"
                    status="danger"
                />
                <Textarea
                    rows={2}
                    placeholder="disabled textarea"
                    status="danger"
                    disabled
                />
            </CardBody>
        </Card>
    )
}

export default Textareas;