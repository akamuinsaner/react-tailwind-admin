import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import List from '@/src/components/List';
import ListItem from '@/src/components/List/ListItem';

const Densed = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Densed</CardHeader>
            <CardBody>
                <List size='small'>
                    <ListItem>Apple</ListItem>
                    <ListItem>Banana</ListItem>
                    <ListItem>Orange</ListItem>
                    <ListItem>Pineapple</ListItem>
                    <ListItem>Pear</ListItem>
                </List>
            </CardBody>
        </Card>
    );
};

export default Densed;
