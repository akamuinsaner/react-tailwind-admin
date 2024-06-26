import Flex from '@/src/components/Flex';
import Image from 'next/image';
import InternalErrorImage from '@/public/500.png';
import Button from '@/src/components/Button';
import Link from 'next/link';

const Exception500 = () => {
    return (
        <Flex
            className='h-full w-full flex-1'
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
