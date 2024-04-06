'use client';
import {
    useReducer,
    useCallback,
    createElement,
    Fragment,
    SyntheticEvent,
    TransitionEventHandler,
    useRef,
    MutableRefObject,
    useState,
    useEffect,
    useContext,
} from 'react';
import SideBar from '@/src/components/SideBar';
import List from '@/src/components/List';
import ListItem from '@/src/components/List/ListItem';
import ListItemIcon from '@/src/components/List/ListItemIcon';
import ListItemText from '@/src/components/List/ListItemText';
import ListItemAction from '@/src/components/List/ListItemAction';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { config, Config } from './config';
import { useRouter, usePathname } from 'next/navigation';
import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';
import Box from '@/src/components/Box';
import {
    getTreeDataFormatted,
    RESERVED_KEY,
} from '@/src/components/Cascader/utils';
import { GlobalContext } from '@/app/globalContext';

const Side = () => {
    const sideBarRef = useRef<HTMLElement>(null);
    const context = useContext(GlobalContext);
    const dataSet = getTreeDataFormatted<Config>(config);
    const { flattedData, idChildrenIdMap, idSiblingsMap } = dataSet;
    const router = useRouter();
    const pathname = usePathname();
    const childrenRefs = useRef<{
        [name: string]: MutableRefObject<HTMLDivElement>;
    }>({});

    const { sideOpenKeys, setSideOpenKeys, sideWidth } = context;

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
                router.push(menu.path);
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
            setTimeout(() => {
                setSideOpenKeys(keys);
            }, 100);
        },
        [sideOpenKeys, pathname],
    );

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

    const renderList = (pid: string = RESERVED_KEY, depth: number = 0) => {
        const children = flattedData.filter(item => item.parentId === pid);
        return (
            <List size='large' divider>
                {children.map(item => {
                    childrenRefs.current[item.id] =
                        useRef<HTMLDivElement>(null);
                    const childrenCount = item?.children?.length || 0;
                    const hasChildren = !!childrenCount;
                    const showChildren = sideOpenKeys.includes(item.id);
                    const arrowClassName = twMerge(
                        'transition-transform duration-300 linear h-4 w-4',
                        classnames({
                            'rotate-90': showChildren,
                        }),
                    );
                    const actualHeight = 50 * childrenCount;
                    const childrenClassName = twMerge(
                        'origin-top overflow-hidden transition-[max-height] duration-300 linear',
                        classnames({
                            'duration-200': childrenCount <= 3,
                            'duration-300':
                                childrenCount > 3 && childrenCount <= 6,
                            'duration-400':
                                childrenCount > 6 && childrenCount <= 9,
                            'duration-500': childrenCount > 9,
                        }),
                    );
                    const childrenStyle = {
                        maxHeight: !(hasChildren && showChildren)
                            ? 0
                            : `${actualHeight}px`,
                    };
                    return (
                        <Fragment key={item.id}>
                            <ListItem
                                key={item.id}
                                onClick={() => {
                                    onTransitionStart(item);
                                    onMenuClick(item);
                                }}
                                active={pathname === item.path}
                            >
                                <Box
                                    style={{
                                        width: `${depth * 12}px`,
                                    }}
                                ></Box>
                                <ListItemIcon>
                                    {item.icon
                                        ? createElement(item.icon)
                                        : null}
                                </ListItemIcon>
                                <ListItemText body={item.name} />
                                {hasChildren ? (
                                    <ListItemAction>
                                        <ChevronRightIcon
                                            className={arrowClassName}
                                        />
                                    </ListItemAction>
                                ) : null}
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
    return (
        <SideBar
            ref={sideBarRef}
            className='pt-20 hidden md:block'
            style={{
                width: `${sideWidth}px`,
            }}
        >
            {renderList()}
        </SideBar>
    );
};

export default Side;
