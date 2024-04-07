import Tabs from '@/src/components/Tabs';
import Tab from '@/src/components/Tabs/Tab';
import TabList from '@/src/components/Tabs/TabList';
import { GlobalContext, IGlobalContext } from '@/app/globalContext';
import { SyntheticEvent, useContext, useEffect, useMemo, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Config } from '../Side/config';
import { useRouter } from 'next/navigation';

const Nav = () => {
    const navRef = useRef<HTMLElement>(null);
    const context = useContext<IGlobalContext>(GlobalContext);
    const {
        pathname,
        navigate,
        historys,
        setHisorys,
        sideBarWidth,
        navHeight,
        headerHeight,
        setNavHeight,
    } = context;

    const tabClassName = twMerge(
        `flex flex-row items-center px-2 font-normal text-sm`,
    );

    const onDeleteNav = (cfg: Config) => (e: SyntheticEvent) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        const newHistory = historys.filter(h => h.path !== cfg.path);
        setHisorys(newHistory);
        if (cfg.path === pathname) {
            navigate(newHistory[newHistory.length - 1].path);
        }
    };

    const onTabChange = (path: string) => {
        navigate(path);
    };

    const tabs = useMemo(() => {
        return historys.map(item => (
            <Tab value={item.id} className={tabClassName}>
                {item.name}
                {historys.length !== 1 ? (
                    <XMarkIcon
                        className='h-5 w-5 ml-2'
                        onClick={onDeleteNav(item)}
                    />
                ) : null}
            </Tab>
        ));
    }, [historys]);

    useEffect(() => {
        setNavHeight(navRef.current.offsetHeight);
    }, []);
    return (
        <nav
            ref={navRef}
            className='fixed z-50 shadow right-0 h-9'
            style={{
                height: navHeight ? `${navHeight}px` : null,
                left: `${sideBarWidth}px`,
                top: `${headerHeight}px`,
            }}
        >
            <Tabs active={pathname} onChange={onTabChange}>
                <TabList>{tabs}</TabList>
            </Tabs>
        </nav>
    );
};

export default Nav;
