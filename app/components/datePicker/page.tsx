import Basic from "./Basic/index";
import Size from "./Size";
import Variant from './Variant'
import Status from "./Status";
import Format from "./Format";
import Mask from "./Mask";
import Limit from "./Limit";

const DatePickerPage = () => {
    return (
        <div className="columns-2 gap-6">
            <Basic />
            <Size />
            <Variant />
            <Status />
            <Format />
            <Mask />
            <Limit />
        </div>
    )
}

export default DatePickerPage;