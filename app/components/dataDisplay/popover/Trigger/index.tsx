import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Popover from '@/src/components/Popover';

const Trigger = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Trigger</CardHeader>
            <CardBody>
                <Flex gap='medium'>
                    <Popover title={'Popover prompt text'}>
                        <Button variant='text'>hover me</Button>
                    </Popover>
                    <Popover title={'Popover prompt text'} trigger='click'>
                        <Button variant='outlined'>click me</Button>
                    </Popover>
                    <Popover
                        title={'Popover prompt text'}
                        trigger='contextMenu'
                    >
                        <Button variant='contained'>right click</Button>
                    </Popover>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Trigger;
