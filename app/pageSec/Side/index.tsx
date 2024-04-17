'use client';
import {
    useCallback,
    createElement,
    Fragment,
    TransitionEventHandler,
    useRef,
    MutableRefObject,
    useState,
    useEffect,
    useContext,
    MouseEventHandler,
    useMemo,
    useLayoutEffect,
    CSSProperties,
} from 'react';
import SideBar from '@/src/components/SideBar';
import List from '@/src/components/List';
import ListItem from '@/src/components/List/ListItem';
import ListItemIcon from '@/src/components/List/ListItemIcon';
import ListItemText from '@/src/components/List/ListItemText';
import ListItemAction from '@/src/components/List/ListItemAction';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Config } from './config';
import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';
import Box from '@/src/components/Box';
import { RESERVED_KEY } from '@/src/components/Cascader/utils';
import { GlobalContext } from '@/app/globalContext';
import { styles } from './styles';
import { SIDEBARLOCALE } from '@/app/globalStore/state';
import useHoverStyle from './useHoverStyle';
import useActiveStyle from './useActiveStyle';
import useBarStyle from './useBarStyle';
import Popover from '@/src/components/Popover';
import Tooltip from '@/src/components/Tooltip';
import ScrollBar from '@/src/components/ScrollBar';

const Side = () => {
    const context = useContext(GlobalContext);
    const sideBarRef = useRef<HTMLElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const listItemsRefs = useRef<{
        [name: string]: MutableRefObject<HTMLLIElement>;
    }>({});
    const childrenRefs = useRef<{
        [name: string]: MutableRefObject<HTMLDivElement>;
    }>({});

    const {
        navigate,
        sideOpenKeys,
        setSideOpenKeys,
        pathname,
        dataSet,
        sideBarWidth,
        setSideBarWidth,
        headerHeight,
        sideBarFolded,
        setSideBarFolded,
        settingOptions,
    } = context;

    const { sideBarLocale } = settingOptions;

    const { flattedData, idChildrenIdMap, idSiblingsMap, parentChainMap } =
        dataSet;

    const onTransitionStart = (menu: Config) => {
        if (sideOpenKeys.includes(menu.id)) {
            const ele = childrenRefs.current[menu.id].current;
            ele.style.maxHeight = `${ele.offsetHeight}px`;
            const allChildrenIds = idChildrenIdMap.get(menu.id);
            allChildrenIds.forEach(acId => {
                const ele = childrenRefs.current[acId].current;
                ele.style.maxHeight = `${ele.offsetHeight}px`;
            });
        } else {
            const siblings = idSiblingsMap.get(menu.id);
            const siblingIds = siblings.map(s => s.id);
            siblingIds.forEach(sId => {
                const ele = childrenRefs.current[sId].current;
                ele.style.maxHeight = `${ele.offsetHeight}px`;
            });
        }
    };

    const onTransitionEnd: TransitionEventHandler<HTMLDivElement> = e => {
        const target = e.currentTarget;
        if (target.style.maxHeight !== '0px') {
            target.style.maxHeight = null;
        }
    };

    const onMenuClick = useCallback(
        (menu: Config) => {
            const hasChildren = menu?.children?.length;
            if (!hasChildren) {
                if (menu.canNotJump) return;
                navigate(menu.path);
                return;
            }
            const siblings = idSiblingsMap.get(menu.id);
            const siblingIds = siblings.map(s => s.id);
            const allChildrenIds = idChildrenIdMap.get(menu.id);
            let keys = [...sideOpenKeys];
            if (keys.includes(menu.id)) {
                const closeKeys = [...allChildrenIds, menu.id];
                keys = keys.filter(k => !closeKeys.includes(k));
            } else {
                keys = [...keys.filter(k => !siblingIds.includes(k)), menu.id];
            }
            setSideOpenKeys(keys);
        },
        [sideOpenKeys],
    );

    useEffect(() => {
        setSideOpenKeys([]);
    }, [sideBarFolded]);

    const { placeholder: hoverHolder, setHoverRect } = useHoverStyle({
        sideBarLocale,
        sideOpenKeys,
        sideBarRef,
    });

    const { placeholder: barHolder } = useBarStyle({
        sideBarFolded,
        setSideBarFolded,
        sideBarLocale,
    });

    const onMouseEnter: MouseEventHandler<HTMLLIElement> = e => {
        const element = e.currentTarget;
        setTimeout(() => {
            setHoverRect(element.getBoundingClientRect());
        }, 300);
    };

    useEffect(() => {
        // when page loaded, set parentIds to openKeys
        if (sideBarFolded) return;
        const parentIds = dataSet.parentChainMap.get(pathname);
        setSideOpenKeys(parentIds);
    }, []);

    const popMenuOpen = (menu: Config) => {
        const siblings = idSiblingsMap.get(menu.id);
        const siblingIds = siblings.map(s => s.id);
        let siblingChildrenIds = [];
        siblingIds.forEach(sId => {
            const childrenIds = dataSet.idChildrenIdMap.get(sId);
            siblingChildrenIds = [...siblingChildrenIds, ...childrenIds];
        });
        const closeIds = [...siblingIds, ...siblingChildrenIds];
        let keys = [...sideOpenKeys];
        keys = Array.from(
            new Set([...keys.filter(k => !closeIds.includes(k)), menu.id]),
        );
        setSideOpenKeys(keys);
    };

    const popMenuClose = (menu: Config) => {
        const allChildrenIds = idChildrenIdMap.get(menu.id);
        // has children opening
        if (!!sideOpenKeys.find(item => allChildrenIds.includes(item))) {
            return;
        }
        const parentIds = dataSet.parentChainMap.get(menu.id);
        const closeIds = [...parentIds, menu.id];
        let keys = [...sideOpenKeys];
        keys = Array.from(
            new Set([...keys.filter(k => !closeIds.includes(k))]),
        );
        setSideOpenKeys(keys);
    };

    const changeChildrenPopOpen = (menu: Config, open: boolean) => {
        if (open) {
            popMenuOpen(menu);
        } else {
            popMenuClose(menu);
        }
    };

    const renderList = (pid: string = RESERVED_KEY, depth: number = 0) => {
        const children = flattedData.filter(item => item.parentId === pid);
        return (
            <List size='large' className='static bg-transparent'>
                {children.map(item => {
                    childrenRefs.current[item.id] =
                        useRef<HTMLDivElement>(null);
                    listItemsRefs.current[item.id] =
                        useRef<HTMLLIElement>(null);
                    const isActive = pathname === item.path;
                    const childrenCount = item?.children?.length || 0;
                    const hasChildren = !!childrenCount;
                    const showChildren = sideOpenKeys.includes(item.id);
                    const itemClassName = twMerge(styles.item.base);
                    const arrowClassName = twMerge(
                        styles.item.arrow,
                        classnames({
                            'rotate-90': showChildren,
                        }),
                    );
                    const actualHeight = 50 * childrenCount;
                    const childrenClassName = twMerge(styles.menu.children);
                    const childrenStyle = {
                        maxHeight: !(hasChildren && showChildren)
                            ? 0
                            : `${actualHeight}px`,
                    };
                    const indent = (
                        <Box
                            style={{
                                width: `${depth * 12}px`,
                            }}
                        ></Box>
                    );
                    if (sideBarFolded) {
                        if (hasChildren) {
                            if (depth === 0) {
                                //haschildren && depth === 0
                                return (
                                    <Popover
                                        open={hasChildren && showChildren}
                                        placement='right-start'
                                        className='p-0'
                                        trigger='click'
                                        onOpenChange={open =>
                                            changeChildrenPopOpen(item, open)
                                        }
                                        content={
                                            <div
                                                className={childrenClassName}
                                                onTransitionEnd={
                                                    onTransitionEnd
                                                }
                                                ref={
                                                    childrenRefs.current[
                                                        item.id
                                                    ]
                                                }
                                            >
                                                {renderList(item.id, depth + 1)}
                                            </div>
                                        }
                                    >
                                        <ListItem
                                            key={item.id}
                                            active={isActive}
                                            ref={listItemsRefs.current[item.id]}
                                            className={itemClassName}
                                            onClick={e => {
                                                e.stopPropagation();
                                                e.nativeEvent.stopImmediatePropagation();
                                            }}
                                        >
                                            <ListItemIcon>
                                                {item.icon
                                                    ? createElement(item.icon)
                                                    : null}
                                            </ListItemIcon>
                                        </ListItem>
                                    </Popover>
                                );
                            }
                            //haschildren && depth !== 0
                            return (
                                <Popover
                                    open={hasChildren && showChildren}
                                    placement='right-start'
                                    className='p-0'
                                    trigger='click'
                                    onOpenChange={open =>
                                        changeChildrenPopOpen(item, open)
                                    }
                                    content={
                                        <div
                                            className={childrenClassName}
                                            onTransitionEnd={onTransitionEnd}
                                            ref={childrenRefs.current[item.id]}
                                        >
                                            {renderList(item.id, depth + 1)}
                                        </div>
                                    }
                                >
                                    <ListItem
                                        key={item.id}
                                        active={isActive}
                                        ref={listItemsRefs.current[item.id]}
                                        className={itemClassName}
                                        onClick={e => {
                                            e.stopPropagation();
                                            e.nativeEvent.stopImmediatePropagation();
                                        }}
                                    >
                                        <ListItemText body={item.name} />
                                        <ListItemAction>
                                            {hasChildren ? (
                                                <ChevronRightIcon
                                                    className={arrowClassName}
                                                />
                                            ) : null}
                                        </ListItemAction>
                                    </ListItem>
                                </Popover>
                            );
                        }
                        if (depth === 0) {
                            // !haschildren && depth === 0
                            return (
                                <ListItem
                                    key={item.id}
                                    active={isActive}
                                    ref={listItemsRefs.current[item.id]}
                                    className={itemClassName}
                                    onClick={() => onMenuClick(item)}
                                >
                                    <ListItemIcon>
                                        {createElement(item.icon)}
                                    </ListItemIcon>
                                </ListItem>
                            );
                        }
                        return (
                            <ListItem
                                key={item.id}
                                active={isActive}
                                ref={listItemsRefs.current[item.id]}
                                className={itemClassName}
                                onClick={() => onMenuClick(item)}
                            >
                                <ListItemText body={item.name} />
                                <ListItemAction>
                                    {hasChildren ? (
                                        <ChevronRightIcon
                                            className={arrowClassName}
                                        />
                                    ) : null}
                                </ListItemAction>
                            </ListItem>
                        );
                    }
                    return (
                        <Fragment key={item.id}>
                            <ListItem
                                key={item.id}
                                onClick={() => {
                                    onTransitionStart(item);
                                    onMenuClick(item);
                                }}
                                active={isActive}
                                ref={listItemsRefs.current[item.id]}
                                className={itemClassName}
                                onMouseEnter={onMouseEnter}
                            >
                                {indent}
                                <ListItemIcon>
                                    {item.icon
                                        ? createElement(item.icon)
                                        : null}
                                </ListItemIcon>
                                <ListItemText body={item.name} />
                                <ListItemAction>
                                    {hasChildren ? (
                                        <ChevronRightIcon
                                            className={arrowClassName}
                                        />
                                    ) : null}
                                </ListItemAction>
                            </ListItem>
                            <div
                                className={childrenClassName}
                                onTransitionEnd={onTransitionEnd}
                                ref={childrenRefs.current[item.id]}
                                style={childrenStyle}
                            >
                                {renderList(item.id, depth + 1)}
                            </div>
                        </Fragment>
                    );
                })}
            </List>
        );
    };
    const mainClassName = twMerge(
        styles.main.base,
        classnames({
            [styles.main.left]: sideBarLocale === SIDEBARLOCALE['left'],
            [styles.main.right]: sideBarLocale === SIDEBARLOCALE['right'],
        }),
    );

    const setSideWidth = useCallback(() => {
        setSideBarWidth(sideBarRef.current.offsetWidth);
    }, []);

    useEffect(() => {
        setSideWidth();
        window.addEventListener('resize', setSideWidth);
        return () => window.removeEventListener('resize', setSideWidth);
    }, []);

    const { placeholder: activeHolder } = useActiveStyle({
        sideBarLocale,
        sideOpenKeys,
        sideBarRef,
        sideBarFolded,
        pathname,
        listItemsRefs,
        parentChainMap,
    });

    return (
        <SideBar
            style={{
                width: sideBarWidth ? `${sideBarWidth}px` : null,
                top: `${headerHeight}px`,
            }}
            ref={sideBarRef}
            className={mainClassName}
        >
            {/* {hoverHolder} */}
            {/* {activeHolder} */}
            {barHolder}
            <div ref={scrollRef} className={twMerge(styles.menu.wrapper)}>
                {renderList()}
            </div>
            <ScrollBar scrollEle={scrollRef.current} />
        </SideBar>
    );
};

export default Side;
