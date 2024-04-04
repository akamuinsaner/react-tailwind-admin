import { FC } from 'react';
import { CircularProgress } from '../Progress';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

export type RTCascaderExpandProps = {
    showChildren?: boolean;
    hasChildren: boolean;
    isLoading: boolean;
    openChildren: () => void;
    startLoadData: () => void;
    loadData: (id: any) => any;
};

const Expand: FC<RTCascaderExpandProps> = ({
    hasChildren,
    showChildren,
    isLoading,
    openChildren,
    startLoadData,
    loadData,
}) => {
    const iconClassName = twMerge(
        styles.expand.icon,
        classNames({
            [styles.expand.show]: showChildren,
        }),
    );

    if (isLoading) {
        return <CircularProgress className={iconClassName} />;
    }
    if (!hasChildren && !loadData) return;

    return (
        <ChevronRightIcon
            className={iconClassName}
            onClick={e => {
                e.stopPropagation();
                if (hasChildren) openChildren();
                startLoadData();
            }}
        />
    );
};

export default Expand;
