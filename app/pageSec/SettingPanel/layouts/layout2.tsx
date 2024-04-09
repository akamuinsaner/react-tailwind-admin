import Box from '@/src/components/Box';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

const Layout2 = () => {
    const boxClass = twMerge(styles.box);
    const headerClass = twMerge(styles.header, 'bg-content');
    const sideClass = twMerge(styles.side, 'z-[1] bg-disableBg');
    return (
        <Box className={boxClass}>
            <Box className={headerClass}></Box>
            <Box className={sideClass}></Box>
        </Box>
    );
};

export default Layout2;
