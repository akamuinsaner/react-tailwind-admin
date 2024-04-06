import Flex from '@/src/components/Flex';
import Text from '@/src/components/Text';

const Footer = () => {
    return (
        <Flex
            className='w-full py-4 px-8 text-mainText text-center'
            align='center'
            direction='column'
        >
            <Text>
                RTA is an admin template for building large scale web
                applications,powered by NextJs, Tailwindcss,made by akamuinsaner
            </Text>
        </Flex>
    );
};

export default Footer;
