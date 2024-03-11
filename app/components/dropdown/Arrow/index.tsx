import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Button from "@/src/components/Button";
import Dropdown from "@/src/components/Dropdown";
import DropdownAnchor from "@/src/components/Dropdown/DropdownAnchor";
import DropdownBox from "@/src/components/Dropdown/DropdownBox";
import List from "@/src/components/List";
import ListItem from "@/src/components/List/ListItem";

const Arrow = () => {
    return (
        <Card className="mb-6">
            <CardHeader>Arrow</CardHeader>
            <CardBody className="flex flex-wrap gap-6">
                {[
                    'top-start', 'top', 'top-end',
                    'bottom-start', 'bottom', 'bottom-end',
                    'right-start', 'right', 'right-end',
                    'left-start', 'left', 'left-end',
                ].map((placement: any) => (
                    <Dropdown
                        key={placement}
                        placement={placement}
                        arrow
                    >
                        <DropdownAnchor>
                            <Button
                                type="contained"
                            >{placement}</Button>
                        </DropdownAnchor>
                        <DropdownBox className="w-48">
                            <List>
                                <ListItem>HomePage</ListItem>
                                <ListItem>Education</ListItem>
                                <ListItem>Commerce</ListItem>
                                <ListItem>Finance</ListItem>
                            </List>
                        </DropdownBox>
                    </Dropdown>
                ))}
            </CardBody>
        </Card>
    )
}

export default Arrow;