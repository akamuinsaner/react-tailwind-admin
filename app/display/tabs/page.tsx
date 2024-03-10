import Basic from "./Basic/index";
import Disabled from "./Disabled";
import Controlled from "./Controlled";
import Icon from "./Icon";
import Vertical from "./Vertical";

const DisplayList = () => {
    return (
        <div className="flex flex-col gap-6">
            <Basic />
            <Disabled />
            <Controlled />
            <Icon />
            <Vertical />
        </div>
            
    )
}

export default DisplayList;