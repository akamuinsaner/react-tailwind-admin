import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Popover from '@/src/components/Popover';

const Basic = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Popover
                    title={'title'}
                    content={
                        <span>
                            content...
                            <br />
                            content...
                            <br />
                            content...
                            <br />
                        </span>
                    }
                >
                    <Button>hover me</Button>
                </Popover>
            </CardBody>
        </Card>
    );
};

export default Basic;
