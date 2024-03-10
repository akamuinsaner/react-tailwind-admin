import NavBar from "@/src/components/NavBar";
import Text from '@/src/components/Text';
import Box from "@/src/components/Box";
import Avatar from "@/src/components/Avatar";
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link'

const Nav = () => {
    return (
        <NavBar>
            <Box className="mr-auto flex items-center">
                <Bars3Icon className="h-8 w-8 mr-4" />
                <Link href="/"><Text size="h5">RT-ADMIN</Text></Link>
                
            </Box>
            <Box className="flex items-center">
                <Avatar
                    className="bg-amber-500 mr-4"
                    src="https://avatars.githubusercontent.com/u/23072998?v=4"
                    alt="ElCid Wang"
                    title="ElCid Wang"
                >ElCid Wang</Avatar>
                <Text>ElCid Wang</Text>
            </Box>

        </NavBar>
    )
}

export default Nav;