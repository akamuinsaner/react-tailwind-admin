'use client';
import Text from '@/src/components/Text';
import Flex from '@/src/components/Flex';
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/outline';
import Form from '@/src/components/Form';
import Input from '@/src/components/Input';
import Button from '@/src/components/Button';
import loginBg from '@/public/loginBg.png';
import Image from 'next/image';
import Link from 'next/link';

const Password = () => {
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
                        Reset Password
                    </Text>
                    <Text size='h5'>Please set a new password</Text>
                    <Text></Text>
                    <Form className='w-96'>
                        <Form.Item name='password' label='New Password'>
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
                        <Form.Submit>
                            <Button className='w-full'>Reset Password</Button>
                        </Form.Submit>
                    </Form>
                    <Flex justify='between' className='w-full'>
                        <Link href='/' className='underline text-primary'>
                            Login In
                        </Link>
                        <Link href='/' className='underline text-primary'>
                            Sign Up
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Password;
