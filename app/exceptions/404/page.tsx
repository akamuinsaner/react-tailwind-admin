import Flex from '@/src/components/Flex';
import Image from 'next/image';
import NotFoundImage from '@/public/404.png';
import Button from '@/src/components/Button';
import Link from 'next/link';

const Exception404 = () => {
    return (
        <Flex
            className='h-full w-full flex-1'
            direction='column'
            align='center'
            justify='center'
        >
            <Image
                className='animate-fadeInLeft'
                src={NotFoundImage}
                alt='404'
            />
            <Link href='/' className='animate-fadeInUp'>
                <Button>Back Home</Button>{' '}
            </Link>
        </Flex>
    );
};

export default Exception404;
