import { SIDEBARLOCALE } from '@/app/globalStore/state';
import Box from '@/src/components/Box';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

const SideBar = ({
    position,
    active,
    onClick,
}: {
    active?: boolean;
    position: SIDEBARLOCALE;
    onClick: () => void;
}) => {
    const boxClassName = twMerge(
        styles.box,
        classNames({
            'border-primary': active,
        }),
    );
    const sideClassName = twMerge(
        styles.side,
        classNames({
            'left-0': position === SIDEBARLOCALE['left'],
            'right-0': position === SIDEBARLOCALE['right'],
            'bg-primary': active,
        }),
    );
    return (
        <Box className={boxClassName} onClick={onClick}>
            <Box className={sideClassName}></Box>
        </Box>
    );
};

export default SideBar;
