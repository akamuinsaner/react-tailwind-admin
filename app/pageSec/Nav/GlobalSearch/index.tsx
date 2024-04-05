'use client';
import Input from '@/src/components/Input';
import Modal from '@/src/components/Modal';
import Empty from '@/src/components/Empty';
import ModalBody from '@/src/components/Modal/ModalBody';
import ModalHeader from '@/src/components/Modal/ModalHeader';
import Text from '@/src/components/Text';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
    createElement,
    ReactNode,
    useCallback,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { config, Config } from '../../Side/config';
import { getLocalStorage, setLocalStorage } from '@/app/utils/storage';
import { debounce, highlightText } from '@/app/utils/tools';
import List from '@/src/components/List';
import ListItem from '@/src/components/List/ListItem';
import ListItemText from '@/src/components/List/ListItemText';
import ListItemIcon from '@/src/components/List/ListItemIcon';
import ListItemAction from '@/src/components/List/ListItemAction';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import ModalFooter from '@/src/components/Modal/ModalFooter';
import Button from '@/src/components/Button';

const GlobalSearch = ({
    search,
    setSearch,
}: {
    search: boolean;
    setSearch: (search: boolean) => void;
}) => {
    const router = useRouter();
    const activeRef = useRef<HTMLLIElement>(null);
    const switchRef = useRef<boolean>(false);
    const [activeItem, setActiveItem] = useState<Config>(null);
    const [keyword, setKeyword] = useState<string>(
        getLocalStorage('RT_SEARCH') || '',
    );
    const startSearch = useCallback(() => setSearch(true), []);
    const endSearch = useCallback(() => setSearch(false), []);

    const jumpPage = (path: string) => {
        router.push(path);
        endSearch();
    };

    const onSearch = useCallback((e: KeyboardEvent) => {
        if (e.ctrlKey && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            e.stopPropagation();
            startSearch();
        }
    }, []);

    const flattenMenu = useCallback(
        (list: Config[] = config, result: Config[] = []) => {
            list.forEach(item => {
                result.push(item);
                if (item.children && item.children.length) {
                    flattenMenu(item.children, result);
                }
            });
            return result;
        },
        [],
    );
    const filteredMenu = useMemo(() => {
        return flattenMenu().filter(
            item =>
                item.name.toLowerCase().includes(keyword.toLowerCase()) ||
                item.path.toLowerCase().includes(keyword.toLowerCase()),
        );
    }, [keyword]);

    const switchActive = (step: number) => {
        if (!filteredMenu.length) return;
        switchRef.current = true;
        if (!activeItem) {
            if (step > 0) setActiveItem(filteredMenu[step - 1]);
            else setActiveItem(filteredMenu[step]);
            return;
        }
        const curIndex = filteredMenu.findIndex(
            item =>
                item.name === activeItem.name && item.path === activeItem.path,
        );
        if (curIndex + step >= filteredMenu.length) return;
        if (curIndex + step < 0) return;
        setActiveItem(filteredMenu[curIndex + step]);
    };

    const onSearchList = useCallback(
        (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === 'escape') {
                e.preventDefault();
                e.stopPropagation();
                endSearch();
            }
            if (e.key.toLowerCase() === 'enter' && activeItem) {
                e.preventDefault();
                e.stopPropagation();
                jumpPage(activeItem.path);
            }
            if (e.key.toLowerCase() === 'arrowdown') {
                e.preventDefault();
                e.stopPropagation();
                switchActive(1);
            }
            if (e.key.toLowerCase() === 'arrowup') {
                e.preventDefault();
                e.stopPropagation();
                switchActive(-1);
            }
        },
        [activeItem],
    );

    const searchList: any = useMemo(() => {
        if (!keyword) return <Empty />;
        if (!filteredMenu.length) return <Empty />;
        const resultList = filteredMenu.map(item => {
            const inName = item.name
                .toLowerCase()
                .includes(keyword.toLowerCase());
            const inPath = item.path
                .toLowerCase()
                .includes(keyword.toLowerCase());
            let body: string = '';
            let sub: string = '';
            if (inName) body = item.name;
            if (inPath) (body = item.name), (sub = item.path);
            let icon = item.icon ? createElement(item.icon) : null;
            const isActive =
                activeItem?.name === item.name &&
                activeItem?.path === item.path;
            const itemClassName = twMerge(
                'rounded',
                classNames({
                    'border border-primary bg-primary/10 hover:bg-primary/10':
                        isActive,
                }),
            );
            const actionClassName = twMerge(
                'hidden',
                classNames({
                    block: isActive,
                }),
            );
            return (
                <ListItem
                    onMouseEnter={() => {
                        switchRef.current = false;
                        setActiveItem(item);
                    }}
                    className={itemClassName}
                    onClick={() => jumpPage(item.path)}
                    ref={isActive ? activeRef : null}
                >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText
                        body={highlightText(
                            body,
                            keyword,
                            'font-bold text-primary',
                        )}
                        tip={highlightText(
                            sub,
                            keyword,
                            'font-bold text-primary',
                        )}
                    />
                    <ListItemAction>
                        <Text size='h5' className={actionClassName}>
                            &crarr;
                        </Text>
                    </ListItemAction>
                </ListItem>
            );
        });
        return resultList.length ? resultList : <Empty />;
    }, [filteredMenu, keyword, activeItem]);

    useEffect(() => {
        setLocalStorage('RT_SEARCH', keyword);
        setActiveItem(null);
    }, [keyword]);

    useEffect(() => {
        document.addEventListener('keydown', onSearch);
        return () => document.removeEventListener('keydown', onSearch);
    }, []);

    useEffect(() => {
        if (search) {
            document.addEventListener('keydown', onSearchList);
        }
        return () => document.removeEventListener('keydown', onSearchList);
    }, [search, activeItem]);

    useLayoutEffect(() => {
        if (switchRef.current) activeRef.current?.scrollIntoView();
    }, [activeItem]);

    return (
        <>
            <Input
                readOnly
                prefix={(<MagnifyingGlassIcon />) as any}
                placeholder='search here'
                className='rounded-full w-56 cursor-pointer'
                suffix={<Text size='tip'>Ctrl+K</Text>}
                onClick={startSearch}
            />
            <Modal size='lg' open={search} closable onClose={endSearch}>
                <ModalHeader closeIcon={false}>
                    <Input
                        placeholder='what are you looking for ...'
                        prefix={(<MagnifyingGlassIcon />) as any}
                        variant='borderless'
                        className='w-full'
                        suffix={<Text size='tip'>esc</Text>}
                        autoFocus
                        onChange={debounce(e => setKeyword(e.target.value))}
                    />
                </ModalHeader>
                <ModalBody className='max-h-96 overflow-y-auto'>
                    <List size='large'>{searchList}</List>
                </ModalBody>
                <ModalFooter></ModalFooter>
            </Modal>
        </>
    );
};

export default GlobalSearch;
