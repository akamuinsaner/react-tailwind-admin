import Flex from '@/src/components/Flex';
import Image from 'next/Image';
import forbiddenImage from '@/public/403.png';
import Button from '@/src/components/Button';
import Link from 'next/link';

const Exception403 = () => {
    return (
        <Flex
            className='h-full w-full'
            direction='column'
            align='center'
            justify='center'
        >
            <Image
                className='animate-fadeInLeft'
                src={forbiddenImage}
                alt='403'
            />
            <Link href='/' className='animate-fadeInUp'>
                <Button>Back Home</Button>{' '}
            </Link>
        </Flex>
    );
};

export default Exception403;
