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
    const router = useRouter();
    const context = useContext(GlobalContext);
    const sideBarRef = useRef<HTMLElement>(null);
    const listItemsRefs = useRef<{
        [name: string]: MutableRefObject<HTMLLIElement>;
    }>({});
    const childrenRefs = useRef<{
        [name: string]: MutableRefObject<HTMLDivElement>;
    }>({});
    const [hoverRect, setHoverRect] = useState<DOMRect>(null);
    const [activeRect, setActiveRect] = useState<DOMRect>(null);
    const { sideOpenKeys, setSideOpenKeys, sideWidth, pathname, dataSet } =
        context;
    const { flattedData, idChildrenIdMap, idSiblingsMap } = dataSet;

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
        [sideOpenKeys],
    );

    const onMouseEnter: MouseEventHandler<HTMLLIElement> = e => {
        setHoverRect(e.currentTarget.getBoundingClientRect());
    };

    const activePointerTrace = () => {
        setTimeout(() => {
            const parentIds = dataSet.parentChainMap.get(pathname);
            let pointer = pathname;
            parentIds.forEach(
                id => !sideOpenKeys.includes(id) && (pointer = id),
            );
            const element = listItemsRefs.current[pointer].current;
            setActiveRect(element.getBoundingClientRect());
        }, 300);
    };
    useLayoutEffect(() => {
        activePointerTrace();
    }, [pathname, sideOpenKeys]);

    useEffect(() => {
        // when page loaded, set parentIds to openKeys
        const parentIds = dataSet.parentChainMap.get(pathname);
        setSideOpenKeys(parentIds);
    }, []);

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
                                active={isActive}
                                ref={listItemsRefs.current[item.id]}
                                className='bg-inherit hover:bg-inherit'
                                onMouseEnter={onMouseEnter}
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
    const mainClassName = twMerge('pt-20 hidden md:block px-2');
    const hoverClassName = twMerge(
        'absolute rounded-lg bg-main-hover transition-[top] duration-300',
    );
    const hoverStyles = useMemo(() => {
        if (!hoverRect) return;
        return {
            width: `${hoverRect.width}px`,
            height: `${hoverRect.height}px`,
            left: `${hoverRect.left}px`,
            top: `${hoverRect.top}px`,
        };
    }, [hoverRect]);
    const activeClassName = twMerge(
        'absolute bg-primary transition-[top] duration-300 w-1 right-0',
    );
    const activeStyles: CSSProperties = useMemo(() => {
        if (!activeRect) return;
        return {
            height: `${activeRect.height}px`,
            top: `${activeRect.top}px`,
        };
    }, [activeRect, pathname, sideOpenKeys]);
    return (
        <SideBar
            ref={sideBarRef}
            className={mainClassName}
            style={{
                width: `${sideWidth}px`,
            }}
        >
            <span className={hoverClassName} style={hoverStyles}></span>
            <span className={activeClassName} style={activeStyles}></span>
            {renderList()}
        </SideBar>
    );
};

export default Side;
