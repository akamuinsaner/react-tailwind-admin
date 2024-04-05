import Flex from '@/src/components/Flex';
import Image from 'next/Image';
import InternalErrorImage from '@/public/500.png';
import Button from '@/src/components/Button';
import Link from 'next/link';

const Exception500 = () => {
    return (
        <Flex
            className='h-full w-full'
            direction='column'
            align='center'
            justify='center'
        >
            <Image
                className='animate-fadeInLeft'
                src={InternalErrorImage}
                alt='500'
            />
            <Link href='/' className='animate-fadeInUp'>
                <Button>Back Home</Button>{' '}
            </Link>
        </Flex>
    );
};

export default Exception500;
