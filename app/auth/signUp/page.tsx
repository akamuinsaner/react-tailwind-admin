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
import Link from 'next/link';

const SignUp = () => {
    return (
        <Flex className='h-full bg-main relative flex-1' direction='column'>
            <Flex
                className='h-16 pl-10 border-b border-mainBorder relative z-[1]'
                align='center'
            >
                <ChevronDoubleLeftIcon className='w-6 h-6' />
            </Flex>
            <Flex
                className='flex-1 relative z-[1]'
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
                        Sign Up
                    </Text>
                    <Text size='h5'> Welcome to RTADMIN</Text>
                    <Text></Text>
                    <Form className='w-96'>
                        <Form.Item name='username' label='Username'>
                            <Input placeholder='enter your username' />
                        </Form.Item>
                        <Form.Item name='email' label='Email Address'>
                            <Input
                                placeholder='enter your email'
                                type='email'
                            />
                        </Form.Item>
                        <Form.Item name='password' label='Password'>
                            <Input
                                type='password'
                                placeholder='enter your password'
                            />
                        </Form.Item>
                        <Form.Item
                            name='confirmPassword'
                            label='Confirm Password'
                        >
                            <Input
                                type='password'
                                placeholder='confirm your password'
                            />
                        </Form.Item>
                        <Form.Item name='rememberme' checkable>
                            <Checkbox>
                                Agree to{' '}
                                <Link
                                    href='/'
                                    className='underline text-primary'
                                >
                                    Terms & agreements
                                </Link>
                            </Checkbox>
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
                    <Flex justify='center' className='w-full'>
                        Already have an account?
                        <Link href='/' className='underline text-primary'>
                            Login in
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default SignUp;
