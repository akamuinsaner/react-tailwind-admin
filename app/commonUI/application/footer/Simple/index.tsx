import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import Flex from '@/src/components/Flex';
import Image from '@/src/components/Image';
import Link from 'next/link';

const Simple = () => {
    return (
        <Card>
            <CardHeader>Simple</CardHeader>
            <CardBody>
                <Flex
                    className='bg-neutral-900 p-5 text-white'
                    direction='column'
                    align='center'
                    justify='center'
                    gap='large'
                >
                    <Flex></Flex>
                    <Link href='#'>
                        RTAdmin powered by React Typescript Tailwindcss NextJS
                    </Link>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Simple;
