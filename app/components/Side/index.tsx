'use client'
import { useReducer, useCallback, createElement, Fragment, SyntheticEvent } from 'react';
import SideBar from '@/src/components/SideBar';
import List from '@/src/components/List';
import ListItem from '@/src/components/List/ListItem';
import ListItemIcon from '@/src/components/List/ListItemIcon';
import ListItemText from '@/src/components/List/ListItemText';
import ListItemAction from '@/src/components/List/ListItemAction';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { reducer, initialState } from './reducer';
import { config, Config } from './config';
import { useRouter, usePathname  } from 'next/navigation';
import classnames from 'classnames';

const Side = () => {
    const router = useRouter();
    const pathname = usePathname()
    const [state, dispatch] = useReducer(reducer, initialState);

    const { openKeys } = state;

    const onTransitionEnd = (e: SyntheticEvent) => {
        const target = e.currentTarget;
        if (target.classList.contains('scale-y-0')) {
            target.classList.add('hidden')
        }
    }

    const onMenuClick = useCallback((menu: Config) => {
        const hasChildren = menu?.children?.length;
        if (hasChildren) {
            dispatch({
                type: 'toggle-menu',
                value: menu.name
            });
            return;
        }
        router.push(menu.path);
    }, [openKeys, pathname]);

    const getList = useCallback((list: Config[]) => {
        if (!list || !list.length) return null;
        return list.map(item => {
            const hasChildren = item?.children?.length;
            const showChildren = openKeys.includes(item.name);
            const arrowClassName = classnames(
                'transition-transform duration-100 ease-linear', {
                'rotate-90': showChildren
            })
            const childrenClassName = classnames(
                'origin-top overflow-hidden transition-transform duration-100 ease-linear', {
                'scale-y-0': !(showChildren && hasChildren),
            })
            return (
                <Fragment key={item.name}>
                    <ListItem
                        key={item.name}
                        onClick={() => onMenuClick(item)}
                        active={pathname === item.path}
                    >
                        <ListItemIcon>
                            {item.icon
                                ? createElement(item.icon)
                                : null}
                        </ListItemIcon>
                        <ListItemText body={item.name} />
                        {hasChildren ? (
                            <ListItemAction>
                                <ChevronRightIcon className={arrowClassName} />
                            </ListItemAction>
                        ) : null}
                    </ListItem>
                    <div
                        className={childrenClassName}
                        onTransitionEnd={onTransitionEnd}
                    >
                        <List divider>
                            {getList(item.children || [])}
                        </List>
                    </div>
                </Fragment>

            )
        })
    }, [openKeys, pathname]);

    return (
        <SideBar className='pt-20'>
            <List divider>
                {getList(config)}
            </List>
        </SideBar>
    )
}

export default Side;