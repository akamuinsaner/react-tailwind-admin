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
import Dropdown from '@/src/components/Dropdown';
import DropdownAnchor from '@/src/components/Dropdown/DropdownAnchor';
import DropdownBox from '@/src/components/Dropdown/DropdownBox';
import Box from '@/src/components/Box';
import DropdownItem from '@/src/components/Dropdown/DropdownItem';

const NavBtn = () => {
    return (
        <Card>
            <CardHeader>Nav Button</CardHeader>
            <CardBody>
                <Flex align='center' justify='center' className='h-40'>
                    <NavBar className='relative'>
                        <Flex className='mr-auto' align='center' gap='medium'>
                            <Box className='block xl:hidden'>
                                <Dropdown>
                                    <DropdownAnchor>
                                        <IconButton>
                                            <Bars3Icon />
                                        </IconButton>
                                    </DropdownAnchor>
                                    <DropdownBox>
                                        <DropdownItem>Home</DropdownItem>
                                        <DropdownItem>Products</DropdownItem>
                                        <DropdownItem>Join Us</DropdownItem>
                                        <DropdownItem>About</DropdownItem>
                                    </DropdownBox>
                                </Dropdown>
                            </Box>
                            <IconButton className='hidden xl:block'>
                                <Bars3Icon />
                            </IconButton>
                            <Text size='h5'>RTADMIN</Text>
                        </Flex>
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

export default NavBtn;
