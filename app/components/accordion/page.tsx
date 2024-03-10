import Basic from "./Basic/index";
import Controlled from "./controlled";
import One from "./One";
import Icon from "./Icon";
import Disabled from "./Disabled";

const AccordionPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <Basic />
            <Controlled />
            <One />
            <Icon />
            <Disabled />
        </div>
    )
}

export default AccordionPage;