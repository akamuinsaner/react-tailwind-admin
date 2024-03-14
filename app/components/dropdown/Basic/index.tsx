import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Button from "@/src/components/Button";
import Dropdown from "@/src/components/Dropdown";
import DropdownAnchor from "@/src/components/Dropdown/DropdownAnchor";
import DropdownBox from "@/src/components/Dropdown/DropdownBox";
import List from "@/src/components/List";
import ListItem from "@/src/components/List/ListItem";
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Basic = () => {
    return (
        <Card className="mb-6">
            <CardHeader>Basic usage</CardHeader>
            <CardBody className="flex">
                <Dropdown>
                    <DropdownAnchor>
                        <Button
                            variant="text"
                            suffix={<ChevronDownIcon />}
                        >Hover me</Button>
                    </DropdownAnchor>
                    <DropdownBox>
                        <List>
                            <ListItem>HomePage</ListItem>
                            <ListItem>Education</ListItem>
                            <ListItem>Commerce</ListItem>
                            <ListItem>Finance</ListItem>
                        </List>
                    </DropdownBox>
                </Dropdown>
            </CardBody>
        </Card>
    )
}

export default Basic;