import Box from '@/src/components/Box';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

const Layout1 = () => {
    const boxClass = twMerge(styles.box);
    const headerClass = twMerge(styles.header, 'z-[1] bg-content');
    const sideClass = twMerge(styles.side, 'bg-disableBg');
    return (
        <Box className={boxClass}>
            <Box className={headerClass}></Box>
            <Box className={sideClass}></Box>
        </Box>
    );
};

export default Layout1;
