import FadeIn from '@/src/animations/FadeIn';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';

const FadeInComp = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Flex className='h-40' align='center' justify='center'>
                    <FadeIn>
                        <Button>FadeIn</Button>
                    </FadeIn>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default FadeInComp;
