import Basic from "./Basic/index";
import Densed from "./Densed/index";
import Divided from "./Divided/index";
import Icon from "./Icon/index";
import User from "./User/index";

const DisplayList = () => {
    return (
        <div className="columns-2 gap-6">
            <Basic />
            <Densed />
            <Divided />
            <Icon />
            <User />
        </div>
    )
}

export default DisplayList;