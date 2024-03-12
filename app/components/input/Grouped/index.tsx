import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Input from "@/src/components/Input";
import Group from "@/src/components/Group";
import Button from "@/src/components/Button";

const Grouped = () => {
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Grouped</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <Group>
                    <Input />
                    <Button>Search</Button>
                </Group>
                <Group>
                    <Input />
                    <Input />
                    <Button>Search</Button>
                </Group>
            </CardBody>
        </Card>
    )
}

export default Grouped;