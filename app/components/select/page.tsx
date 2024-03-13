import Basic from "./Basic/index";
import Sizes from "./Sizes";
import Status from "./Status";
import Variant from "./Variant";
import Search from "./Search";
import Multiple from "./Multiple";
import TagLimit from "./TagLimits";

const SelectPage = () => {
    return (
        <div className="columns-2 gap-6">
            <Basic />
            <Sizes />
            <Status />
            <Variant />
            <Search />
            <Multiple />
            <TagLimit />
        </div>
    )
}

export default SelectPage;