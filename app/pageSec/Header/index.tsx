'use client';
import NavBar from '@/src/components/NavBar';
import Text from '@/src/components/Text';
import Box from '@/src/components/Box';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { GlobalContext } from '../../globalContext';
import { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import GlobalSearch from './GlobalSearch';
import UserBox from './UserBox';
import NavIcons from './NavIcons';
import Flex from '@/src/components/Flex';

const Header = () => {
    const navBarRef = useRef<HTMLDivElement>(null);
    const context = useContext(GlobalContext);
    const {
        theme,
        search,
        setTheme,
        setSearch,
        headerHeight,
        setHeaderHeight,
    } = context;

    useEffect(() => {
        setHeaderHeight(navBarRef.current.offsetHeight);
    }, []);

    return (
        <NavBar
            ref={navBarRef}
            className='shadow-none border-b border-mainBorder'
            style={{
                height: headerHeight ? `${headerHeight}px` : null,
            }}
        >
            <Box className='mr-auto flex items-center gap-4'>
                <Bars3Icon className='h-8 w-8' />
                <Link href='/'>
                    <Text size='h5'>RT-ADMIN</Text>
                </Link>
            </Box>
            <Flex gap='large' align='center'>
                <GlobalSearch search={search} setSearch={setSearch} />
                <NavIcons />
                <UserBox />
            </Flex>
        </NavBar>
    );
};

export default Header;
