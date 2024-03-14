import Basic from "./Basic";
import Severity from "./Severity";
import Icon from "./Icon";
import Type from "./Type";
import Accent from "./Accent";
import Action from "./Action";

const AlertPage = () => {
    return (
        <div className="sm:columns-2">
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