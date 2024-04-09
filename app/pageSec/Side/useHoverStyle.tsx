import { SIDEBARLOCALE } from '@/app/globalStore/state';
import { MutableRefObject, useEffect, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

const useHoverStyle = ({
    sideBarLocale,
    sideOpenKeys,
    sideBarRef,
}: {
    sideBarLocale: SIDEBARLOCALE;
    sideOpenKeys: string[];
    sideBarRef: MutableRefObject<HTMLElement>;
}) => {
    const [hoverRect, setHoverRect] = useState<DOMRect>(null);

    const hoverClassName = twMerge(styles.hover);

    const hoverStyles = useMemo(() => {
        if (!hoverRect) return;
        let style = {
            width: `${hoverRect.width}px`,
            height: `${hoverRect.height}px`,
            left: `${hoverRect.left}px`,
            top: `${hoverRect.top + sideBarRef.current.scrollTop}px`,
        };
        if (sideBarLocale === SIDEBARLOCALE['right']) {
            style = Object.assign({}, style, {
                left: 'auto',
                right: `${(window.innerWidth - hoverRect.right) / 2}px`,
            });
        }
        return style;
    }, [hoverRect, sideBarLocale, sideOpenKeys]);

    return {
        placeholder: (
            <span className={hoverClassName} style={hoverStyles}></span>
        ),
        setHoverRect,
    };
};

export default useHoverStyle;
