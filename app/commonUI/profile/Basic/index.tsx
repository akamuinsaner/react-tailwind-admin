import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import Flex from '@/src/components/Flex';
import Image from 'next/image';
import bangkok from '@/public/commercial/bangkok.jpg';
import Box from '@/src/components/Box';
import Avatar from '@/src/components/Avatar';

const Basic = () => {
    return (
        <Card>
            <CardBody>
                <Flex>
                    <Card className='w-auto'>
                        <CardBody className='p-0 relative w-[500px]'>
                            <Box className='h-[180px] overflow-hidden absolute top-0 w-[500px]'>
                                <Image src={bangkok} alt='bg' width={500} />
                            </Box>
                            <Avatar></Avatar>
                        </CardBody>
                    </Card>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Basic;
