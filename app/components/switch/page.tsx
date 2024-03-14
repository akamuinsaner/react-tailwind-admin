import Basic from "./Basic";
import Disabled from "./Disabled";
import Text from "./Text";
import Status from "./Status";
import Size from "./Size";
import Label from "./Label";

const SwitchPage = () => {
    return (
        <div className="columns-2 gap-3">
            <Basic />
            <Label />
            <Disabled />
            <Text />
            <Status />
            <Size />
        </div>
    )
}

export default SwitchPage;