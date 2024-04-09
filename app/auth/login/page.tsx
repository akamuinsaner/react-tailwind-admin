'use client';
import Text from '@/src/components/Text';
import Flex from '@/src/components/Flex';
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/outline';
import Form from '@/src/components/Form';
import Input from '@/src/components/Input';
import Button from '@/src/components/Button';
import Checkbox from '@/src/components/Checkbox';
import Divider from '@/src/components/Divider';
import GoogleIcon from '@/app/utils/icons/color/GoogleIcon';
import AppleIcon from '@/app/utils/icons/solid/AppleIcon';
import FBIcon from '@/app/utils/icons/solid/FBIcon';
import loginBg from '@/public/loginBg.png';
import Image from 'next/image';

const Login = () => {
    return (
        <Flex className='h-full bg-main relative' direction='column'>
            <Flex
                className='h-16 pl-10 border-b border-mainBorder relative z-[1]'
                align='center'
            >
                <ChevronDoubleLeftIcon className='w-6 h-6' />
            </Flex>
            <Flex
                className='flex-1 relative z-[1] py-40'
                align='center'
                justify='center'
            >
                <Image
                    src={loginBg}
                    alt='login'
                    className='h-[550px] w-auto mr-40 hidden xl:block'
                />
                <Flex
                    className='bg-content p-10 rounded'
                    align='center'
                    direction='column'
                    gap='medium'
                >
                    <Text size='h4' className='font-bold'>
                        Login
                    </Text>
                    <Text size='h5'> Welcome back to RTADMIN</Text>
                    <Text></Text>
                    <Form className='w-96'>
                        <Form.Item name='username' label='Username'>
                            <Input placeholder='enter your username' />
                        </Form.Item>
                        <Form.Item name='password' label='Password'>
                            <Input
                                type='password'
                                placeholder='enter your password'
                            />
                        </Form.Item>
                        <Form.Item name='rememberme' checkable>
                            <Checkbox>remember me</Checkbox>
                        </Form.Item>
                        <Form.Submit>
                            <Button className='w-full'>Login</Button>
                        </Form.Submit>
                    </Form>
                    <Divider>OR</Divider>
                    <Flex justify='between' className='w-full'>
                        <Button variant='outlined' prefix={<GoogleIcon />}>
                            Google
                        </Button>
                        <Button variant='outlined' prefix={<AppleIcon />}>
                            Apple
                        </Button>
                        <Button variant='outlined' prefix={<FBIcon />}>
                            Facebook
                        </Button>
                    </Flex>
                    <Flex justify='between' className='w-full'>
                        <Button className='p-0' variant='text'>
                            Forgot password?
                        </Button>
                        <Button className='p-0' variant='text'>
                            Already have an account?
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Login;
