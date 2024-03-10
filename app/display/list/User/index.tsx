import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import List from "@/src/components/List";
import ListItem from "@/src/components/List/ListItem";
import ListItemAction from "@/src/components/List/ListItemAction";
import ListItemAvatar from "@/src/components/List/ListItemAvatar";
import ListItemIcon from "@/src/components/List/ListItemIcon";
import ListItemText from "@/src/components/List/ListItemText";
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const User = () => {
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Icon and Action</CardHeader>
            <CardBody>
                <List divider>
                    <ListItem>
                        <ListItemAvatar>
                            <HomeIcon />
                        </ListItemAvatar>
                        <ListItemText
                            body="HomePage"
                            tip="icon as avatar"
                        />
                        <ListItemAction>
                            <ChevronRightIcon />
                        </ListItemAction>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar src="https://avatars.githubusercontent.com/u/23072998?v=4" />
                        <ListItemText
                            body="akamuinsaner"
                            tip="img as avatar"
                        />
                        <ListItemAction>
                            <ChevronRightIcon />
                        </ListItemAction>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            akamuinsaner
                        </ListItemAvatar>
                        <ListItemText
                            body="akamuinsaner"
                            tip="name as avatar"
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

export default User;