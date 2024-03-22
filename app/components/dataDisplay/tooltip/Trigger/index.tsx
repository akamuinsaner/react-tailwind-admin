import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import Tooltip from '@/src/components/Tooltip';

const Trigger = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Trigger</CardHeader>
            <CardBody>
                <Flex gap='medium'>
                    <Tooltip title={'tooltip prompt text'}>
                        <Button variant='text'>hover me</Button>
                    </Tooltip>
                    <Tooltip title={'tooltip prompt text'} trigger='click'>
                        <Button variant='outlined'>click me</Button>
                    </Tooltip>
                    <Tooltip
                        title={'tooltip prompt text'}
                        trigger='contextMenu'
                    >
                        <Button variant='contained'>right click</Button>
                    </Tooltip>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Trigger;
