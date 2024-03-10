import Basic from "./Basic";
import Type from "./Type";
import Color from "./Color";
import Size from './Size';
import Icon from './Icon';

const ButtonPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <Basic />
            <Type />
            <Color />
            <Size />
            <Icon />
        </div>
    )
}

export default ButtonPage;