import Basic from "./Basic";
import Placement from "./Placement";
import Arrow from "./Arrow";
import Trigger from "./Trigger";
import Controlled from "./Controlled";

const DropdownPage = () => {
    return (
        <div className="flex flex-col gap-3">
            <Basic />
            <Placement />
            <Arrow />
            <Trigger />
            <Controlled />
        </div>
    )
}

export default DropdownPage;