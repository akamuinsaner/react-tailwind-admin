import { useCallback, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';

const useBarStyle = ({
    sideBarFolded,
    setSideBarFolded,
}: {
    sideBarFolded: boolean;
    setSideBarFolded: (sideBarFolded: boolean) => void;
}) => {
    const wrapperClassName = twMerge(styles.bar.wrapper.base);
    const innerClassName = twMerge(styles.bar.inner.base);

    const iconClassname = twMerge(styles.bar.icon.base);

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
