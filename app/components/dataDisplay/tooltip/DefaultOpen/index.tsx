import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Tooltip from '@/src/components/Tooltip';

const DefaultOpen = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Default open</CardHeader>
            <CardBody>
                <Tooltip defaultOpen title={'tooltip prompt text'}>
                    <Button>default open</Button>
                </Tooltip>
            </CardBody>
        </Card>
    );
};

export default DefaultOpen;
