import Basic from "./Basic";
import Variants from "./Variants";
import Color from "./Color";
import Size from './Size';
import Icon from './Icon';
import Grouped from "./Grouped";

const ButtonPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <Basic />
            <Variants />
            <Color />
            <Size />
            <Icon />
            <Grouped />
        </div>
    )
}

export default ButtonPage;