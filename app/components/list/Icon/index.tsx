import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import List from "@/src/components/List";
import ListItem from "@/src/components/List/ListItem";
import ListItemAction from "@/src/components/List/ListItemAction";
import ListItemIcon from "@/src/components/List/ListItemIcon";
import ListItemText from "@/src/components/List/ListItemText";
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Icon = () => {
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Icon</CardHeader>
            <CardBody>
                <List divider>
                    <ListItem>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText
                            body="HomePage"
                        />
                        <ListItemAction>
                            <ChevronRightIcon />
                        </ListItemAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText
                            body="Layout"
                        />
                        <ListItemAction>
                            <ChevronRightIcon />
                        </ListItemAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText
                            body="Form"
                        />
                        <ListItemAction>
                            <ChevronRightIcon />
                        </ListItemAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText
                            body="Data"
                        />
                        <ListItemAction>
                            <ChevronRightIcon />
                        </ListItemAction>
                    </ListItem>
                </List>
            </CardBody>
        </Card>
    )
}

export default Icon;