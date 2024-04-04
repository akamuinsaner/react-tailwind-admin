import { FC } from 'react';
import { CircularProgress } from '../Progress';
import { RTCascaderProps } from './index';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { styles } from './styles';

export type RTCascaderExpandProps = {
    hasChildren: boolean;
    isLoading: boolean;
    openChildren: () => void;
    startLoadData: () => void;
    loadData: RTCascaderProps['loadData'];
};

const Expand: FC<RTCascaderExpandProps> = ({
    hasChildren,
    isLoading,
    openChildren,
    startLoadData,
    loadData,
}) => {
    if (isLoading) {
        return <CircularProgress className={styles.expand.icon} />;
    }
    if (!hasChildren && !loadData) return;
    return (
        <ChevronRightIcon
            className={styles.expand.icon}
            onClick={e => {
                e.stopPropagation();
                if (hasChildren) openChildren();
                startLoadData();
            }}
        />
    );
};

export default Expand;
