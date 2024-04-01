import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import List from '@/src/components/List';
import ListItem from '@/src/components/List/ListItem';
import ListItemAction from '@/src/components/List/ListItemAction';
import ListItemAvatar from '@/src/components/List/ListItemAvatar';
import ListItemText from '@/src/components/List/ListItemText';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const ListComp = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardBody>
                <List divider className='h-96'>
                    <ListItem>
                        <ListItemAvatar src='https://avatars.githubusercontent.com/u/23072998?v=4' />
                        <ListItemText body='akamuinsaner' tip='img as avatar' />
                        <ListItemAction>
                            <ChevronRightIcon />
                        </ListItemAction>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar src='https://avatars.githubusercontent.com/u/23072998?v=4' />
                        <ListItemText body='akamuinsaner' tip='img as avatar' />
                        <ListItemAction>
                            <ChevronRightIcon />
                        </ListItemAction>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar src='https://avatars.githubusercontent.com/u/23072998?v=4' />
                        <ListItemText body='akamuinsaner' tip='img as avatar' />
                        <ListItemAction>
                            <ChevronRightIcon />
                        </ListItemAction>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar src='https://avatars.githubusercontent.com/u/23072998?v=4' />
                        <ListItemText body='akamuinsaner' tip='img as avatar' />
                        <ListItemAction>
                            <ChevronRightIcon />
                        </ListItemAction>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar src='https://avatars.githubusercontent.com/u/23072998?v=4' />
                        <ListItemText body='akamuinsaner' tip='img as avatar' />
                        <ListItemAction>
                            <ChevronRightIcon />
                        </ListItemAction>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar src='https://avatars.githubusercontent.com/u/23072998?v=4' />
                        <ListItemText body='akamuinsaner' tip='img as avatar' />
                        <ListItemAction>
                            <ChevronRightIcon />
                        </ListItemAction>
                    </ListItem>
                </List>
            </CardBody>
        </Card>
    );
};

export default ListComp;
