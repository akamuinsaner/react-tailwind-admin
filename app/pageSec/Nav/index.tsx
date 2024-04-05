'use client';
import NavBar from '@/src/components/NavBar';
import Text from '@/src/components/Text';
import Box from '@/src/components/Box';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Select from '@/src/components/Select';
import Option from '@/src/components/Select/SelectOption';
import { GlobalContext } from '../../globalContext';
import { useContext, useEffect } from 'react';
import GlobalSearch from './GlobalSearch';
import UserBox from './UserBox';
import NavIcons from './NavIcons';
import Flex from '@/src/components/Flex';

const Nav = () => {
    const context = useContext(GlobalContext);
    const { theme, search, setTheme, setSearch } = context;

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('RT_THEME', theme);
    }, [theme]);
    return (
        <NavBar>
            <Box className='mr-auto flex items-center gap-4'>
                <Bars3Icon className='h-8 w-8' />
                <Link href='/'>
                    <Text size='h5'>RT-ADMIN</Text>
                </Link>
                <Select value={theme} className='w-32' onChange={setTheme}>
                    <Option value='light'>Light</Option>
                    <Option value='dark'>Dark</Option>
                </Select>
            </Box>
            <Flex gap='large' align='center'>
                <GlobalSearch search={search} setSearch={setSearch} />
                <NavIcons />
                <UserBox />
            </Flex>
        </NavBar>
    );
};

export default Nav;
