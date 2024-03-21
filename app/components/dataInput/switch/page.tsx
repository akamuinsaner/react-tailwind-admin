import Basic from "./Basic";
import Disabled from "./Disabled";
import Text from "./Text";
import Status from "./Status";
import Size from "./Size";
import Label from "./Label";
import Box from "@/src/components/Box";

const SwitchPage = () => {
    return (
        <Box className="columns-1 xl:columns-2 gap-3">
            <Basic />
            <Label />
            <Disabled />
            <Text />
            <Status />
            <Size />
        </Box>
    )
}

export default SwitchPage;