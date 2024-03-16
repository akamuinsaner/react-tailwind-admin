import Basic from "./Basic";
import Status from "./Status";
import Disabled from "./Disabled";
import Vertical from "./Vertical";
import Box from "@/src/components/Box";

const DropdownPage = () => {
    return (
        <Box className="columns-1 xl:columns-2 gap-3">
            <Basic />
            <Status />
            <Disabled />
            <Vertical />
        </Box>
    )
}

export default DropdownPage;