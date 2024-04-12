import { SIDEBARLOCALE } from '@/app/globalStore/state';
import classnames from 'classnames';
import {
    CSSProperties,
    MutableRefObject,
    useLayoutEffect,
    useMemo,
    useState,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

const useActiveStyle = ({
    sideOpenKeys,
    sideBarLocale,
    sideBarRef,
    sideBarFolded,
    pathname,
    listItemsRefs,
    parentChainMap,
}: {
    sideBarLocale: SIDEBARLOCALE;
    sideOpenKeys: string[];
    sideBarRef: MutableRefObject<HTMLElement>;
    sideBarFolded: boolean;
    pathname: string;
    parentChainMap: Map<string, string[]>;
    listItemsRefs: MutableRefObject<{
        [name: string]: MutableRefObject<HTMLLIElement>;
    }>;
}) => {
    const [activeRect, setActiveRect] = useState<DOMRect>(null);

    const activePointerTrace = () => {
        setTimeout(() => {
            const parentIds = parentChainMap.get(pathname);
            let pointer = pathname;
            if (!sideBarFolded) {
                parentIds.forEach(
                    id => !sideOpenKeys.includes(id) && (pointer = id),
                );
            } else {
                if (parentIds.length) {
                    pointer = parentIds[parentIds.length - 1];
                }
            }
            const element = listItemsRefs.current[pointer].current;
            setActiveRect(element.getBoundingClientRect());
        }, 300);
    };

    useLayoutEffect(() => {
        activePointerTrace();
    }, [pathname, sideOpenKeys, sideBarFolded]);

    const activeClassName = twMerge(
        styles.active.base,
        classnames({
            [styles.active.left]: sideBarLocale === SIDEBARLOCALE['right'],
            [styles.active.right]: sideBarLocale === SIDEBARLOCALE['left'],
        }),
    );

    const activeStyles: CSSProperties = useMemo(() => {
        if (!activeRect) return;
        return {
            height: `${activeRect.height}px`,
            top: `${activeRect.top + sideBarRef.current.scrollTop}px`,
        };
    }, [activeRect, sideOpenKeys]);
    return {
        placeholder: (
            <span className={activeClassName} style={activeStyles}></span>
        ),
        setActiveRect,
    };
};

export default useActiveStyle;
