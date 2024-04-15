'use client';
import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import Flex from '@/src/components/Flex';
import NavBar from '@/src/components/NavBar';
import Button from '@/src/components/Button';
import { Bars3Icon } from '@heroicons/react/24/outline';
import IconButton from '@/src/components/Button/IconButton';
import Text from '@/src/components/Text';
import Avatar from '@/src/components/Avatar';
import Link from 'next/link';
import Divider from '@/src/components/Divider';
import Tooltip from '@/src/components/Tooltip';
import Box from '@/src/components/Box';
import { useState } from 'react';
import Drawer from '@/src/components/Drawer';
import ListItem from '@/src/components/List/ListItem';
import List from '@/src/components/List';

const WithDrawer = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <Card>
            <CardHeader>Responsive with Drawer</CardHeader>
            <CardBody>
                <Flex align='center' justify='center' className='h-40'>
                    <NavBar className='relative'>
                        <Drawer
                            open={open}
                            placement='left'
                            closable
                            onClose={() => setOpen(false)}
                            className='w-64'
                        >
                            <List size='large' className='mt-10'>
                                <ListItem>Home</ListItem>
                                <ListItem>Products</ListItem>
                                <ListItem>Join Us</ListItem>
                                <ListItem>About</ListItem>
                            </List>
                        </Drawer>
                        <IconButton
                            onClick={() => setOpen(true)}
                            className='mr-4 block xl:hidden'
                        >
                            <Bars3Icon />
                        </IconButton>
                        <IconButton className='mr-4 hidden xl:block'>
                            <Bars3Icon />
                        </IconButton>
                        <Text size='h5' className='mx-auto xl:mr-auto xl:ml-0'>
                            RTADMIN
                        </Text>
                        <Flex align='center' className='mr-24 hidden xl:flex'>
                            <Link href='#'>Home</Link>
                            <Divider vertical />
                            <Link href='#'>Products</Link>
                            <Divider vertical />
                            <Link href='#'>Join Us</Link>
                            <Divider vertical />
                            <Link href='#'>About</Link>
                        </Flex>
                        <Flex align='center' gap='small'>
                            <Tooltip title='ElCid Wang'>
                                <Avatar
                                    className='bg-amber-500'
                                    src='https://avatars.githubusercontent.com/u/23072998?v=4'
                                    alt='ElCid Wang'
                                    title='ElCid Wang'
                                >
                                    ElCid Wang
                                </Avatar>
                            </Tooltip>
                            <Text>ElCid Wang</Text>
                        </Flex>
                    </NavBar>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default WithDrawer;
