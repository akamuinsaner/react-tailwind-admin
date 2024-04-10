import { useCallback, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';
import { SIDEBARLOCALE } from '@/app/globalStore/state';
import classNames from 'classnames';

const useBarStyle = ({
    sideBarFolded,
    setSideBarFolded,
    sideBarLocale,
}: {
    sideBarFolded: boolean;
    setSideBarFolded: (sideBarFolded: boolean) => void;
    sideBarLocale: SIDEBARLOCALE;
}) => {
    const wrapperClassName = twMerge(
        styles.bar.wrapper.base,
        classNames({
            'right-auto left-full': sideBarLocale === SIDEBARLOCALE['left'],
            'right-full left-auto': sideBarLocale === SIDEBARLOCALE['right'],
        }),
    );
    const innerClassName = twMerge(styles.bar.inner.base);

    const iconClassname = twMerge(
        styles.bar.icon.base,
        classNames({
            'rotate-180': sideBarLocale === SIDEBARLOCALE['right'],
        }),
    );

    const icon = useMemo(() => {
        if (sideBarFolded) {
            return <ChevronDoubleRightIcon className={iconClassname} />;
        }
        return <ChevronDoubleLeftIcon className={iconClassname} />;
    }, [sideBarFolded]);

    const toggleSideBarFolded = useCallback(() => {
        setSideBarFolded(!sideBarFolded);
    }, [sideBarFolded]);

    return {
        placeholder: (
            <span className={wrapperClassName}>
                <span className={innerClassName} onClick={toggleSideBarFolded}>
                    {icon}
                </span>
            </span>
        ),
    };
};

export default useBarStyle;
