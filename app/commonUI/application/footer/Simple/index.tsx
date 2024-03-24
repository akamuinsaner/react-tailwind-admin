import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import Flex from '@/src/components/Flex';
import Link from 'next/link';
import GithubIcon from '@/public/github.svg';
import linkedin from '@/public/linkedin.svg';
import Image from 'next/image';
import { EnvelopeIcon } from '@heroicons/react/24/solid';

const Simple = () => {
    return (
        <Card>
            <CardHeader>Simple</CardHeader>
            <CardBody>
                <Flex
                    className='bg-primary p-5 text-white'
                    direction='column'
                    align='center'
                    justify='center'
                    gap='large'
                >
                    <Flex gap='medium'>
                        <Image src={GithubIcon} alt='github' width={24} />
                        <Image src={linkedin} alt='linkin' width={24} />
                        <EnvelopeIcon className='h-6 w-6' color='#000' />
                    </Flex>
                    <Link href='#'>
                        RTAdmin powered by React Typescript Tailwindcss NextJS
                    </Link>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Simple;
