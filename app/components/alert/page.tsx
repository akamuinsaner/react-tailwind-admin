import Basic from "./Basic";
import Severity from "./Severity";
import Icon from "./Icon";
import Type from "./Type";
import Accent from "./Accent";
import Action from "./Action";

const AlertPage = () => {
    return (
        <div className="columns-2 sm:columns-1 lg:columns-3">
            <Basic />
            <Severity />
            <Icon />
            <Type />
            <Accent />
            <Action />
        </div>
    )
}

export default AlertPage;