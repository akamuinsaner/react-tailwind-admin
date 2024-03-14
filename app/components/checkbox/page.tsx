import Basic from "./Basic";
import Status from "./Status";
import Indeterminate from "./Indeterminate";
import Disabled from "./Disabled";
import Controlled from "./Controlled";

const CheckboxPage = () => {
    return (
        <div className="columns-2 gap-3">
            <Basic />
            <Status />
            <Indeterminate />
            <Disabled />
            <Controlled />
        </div>
    )
}

export default CheckboxPage;