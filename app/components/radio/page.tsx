import Basic from "./Basic";
import Status from "./Status";
import Disabled from "./Disabled";
import Vertical from "./Vertical";

const DropdownPage = () => {
    return (
        <div className="columns-2 gap-3">
            <Basic />
            <Status />
            <Disabled />
            <Vertical />
        </div>
    )
}

export default DropdownPage;