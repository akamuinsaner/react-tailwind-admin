import Basic from "./Basic/index";
import Sizes from "./Sizes";
import Status from "./Status";
import Variant from "./Variant";
import Search from "./Search";

const SelectPage = () => {
    return (
        <div className="columns-2 gap-6">
            <Basic />
            <Sizes />
            <Status />
            <Variant />
            <Search />
        </div>
    )
}

export default SelectPage;