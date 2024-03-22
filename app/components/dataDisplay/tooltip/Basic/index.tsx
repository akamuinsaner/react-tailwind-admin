import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Tooltip from '@/src/components/Tooltip';

const Basic = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Tooltip title={'tooltip prompt text'}>
                    <Button>hover me</Button>
                </Tooltip>
            </CardBody>
        </Card>
    );
};

export default Basic;
