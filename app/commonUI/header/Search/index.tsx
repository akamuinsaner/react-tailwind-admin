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
import Badge from '@/src/components/Badge';
import {
    EnvelopeIcon,
    BellIcon,
    MagnifyingGlassIcon,
    EllipsisVerticalIcon,
} from '@heroicons/react/24/outline';
import Input from '@/src/components/Input';
import ListItemText from '@/src/components/List/ListItemText';
import ListItemAction from '@/src/components/List/ListItemAction';
import ListItemAvatar from '@/src/components/List/ListItemAvatar';

const Search = () => {
    return (
        <Card>
            <CardHeader>Search</CardHeader>
            <CardBody>
                <Flex align='center' justify='center' className='h-40'>
                    <NavBar className='relative'>
                        <Flex align='center' gap='medium'>
                            <IconButton>
                                <Bars3Icon />
                            </IconButton>
                            <Text size='h5' className='hidden xl:block'>
                                RTADMIN
                            </Text>
                        </Flex>
                        <Input
                            prefix={<MagnifyingGlassIcon />}
                            className='grow mx-5 xl:grow-0'
                            placeholder='search'
                        />
                        <Flex
                            align='center'
                            className='mr-24 hidden xl:flex ml-auto'
                        >
                            <Badge count={100} maxCount={99}>
                                <EnvelopeIcon className='h-7 w-7' />
                            </Badge>
                            <Divider vertical gap='large' />
                            <Badge count={58}>
                                <BellIcon className='h-7 w-7' />
                            </Badge>
                        </Flex>
                        <Flex
                            align='center'
                            gap='small'
                            className='hidden xl:flex'
                        >
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
                        <Dropdown placement='bottom-end' trigger='click'>
                            <DropdownAnchor>
                                <IconButton className='xl:hidden'>
                                    <EllipsisVerticalIcon />
                                </IconButton>
                            </DropdownAnchor>
                            <DropdownBox>
                                <DropdownItem>
                                    <ListItemText body='Message'></ListItemText>
                                    <ListItemAction>
                                        <Badge count={100} maxCount={99} />
                                    </ListItemAction>
                                </DropdownItem>
                                <DropdownItem>
                                    <ListItemText body='Notification'></ListItemText>
                                    <ListItemAction>
                                        <Badge count={58} />
                                    </ListItemAction>
                                </DropdownItem>
                                <DropdownItem>
                                    <ListItemAvatar
                                        className='bg-amber-500'
                                        src='https://avatars.githubusercontent.com/u/23072998?v=4'
                                        alt='ElCid Wang'
                                        title='ElCid Wang'
                                    >
                                        ElCid Wang
                                    </ListItemAvatar>
                                    <ListItemText body='ElCid Wang'></ListItemText>
                                </DropdownItem>
                            </DropdownBox>
                        </Dropdown>
                    </NavBar>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Search;
