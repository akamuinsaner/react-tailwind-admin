import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Divider from '@/src/components/Divider';
import List from '@/src/components/List';
import ListItem from '@/src/components/List/ListItem';

const Basic = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <List>
                    <ListItem>
                        Tailwind CSS works by scanning all of your HTML files,
                        JavaScript components, and any other templates for class
                        names, generating the corresponding styles and then
                        writing them to a static CSS file.
                    </ListItem>
                    <Divider />
                    <ListItem>
                        Tailwind CSS works by scanning all of your HTML files,
                        JavaScript components, and any other templates for class
                        names, generating the corresponding styles and then
                        writing them to a static CSS file.
                    </ListItem>
                    <Divider />
                    <ListItem>
                        Tailwind CSS works by scanning all of your HTML files,
                        JavaScript components, and any other templates for class
                        names, generating the corresponding styles and then
                        writing them to a static CSS file.
                    </ListItem>
                </List>
            </CardBody>
        </Card>
    );
};

export default Basic;
