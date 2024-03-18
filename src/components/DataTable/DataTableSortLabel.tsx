import { FC, ReactNode, useState } from 'react';
import { RTDataTableSortDirections } from '.';
import { styles } from './styles';
import { ArrowLongUpIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

export type RTDataTableSortLabel = {
    active: boolean;
    direction: RTDataTableSortDirections;
    onClick: () => void;
    children: ReactNode;
};
const DataTableSortLabel: FC<RTDataTableSortLabel> = ({
    active,
    direction,
    onClick,
    children,
}) => {
    const [hovering, setHovering] = useState<boolean>(false);
    const iconClassName = twMerge(
        styles.sort.icon.base,
        classNames({
            [styles.sort.icon.show]: active || hovering,
            [styles.sort.icon.reverse]: direction === 'desc',
        }),
    );
    return (
        <span
            className={styles.sort.base}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={onClick}
        >
            {children}
            <div>
                <ArrowLongUpIcon className={iconClassName} />
            </div>
        </span>
    );
};

export default DataTableSortLabel;
