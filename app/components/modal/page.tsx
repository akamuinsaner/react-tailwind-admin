import Basic from "./Basic/index";
import Sizes from "./Sizes";
import Closable from "./Closable";
import Confirms from "./Confirms";
import CloseIcon from "./CloseIcon";

const ModalPage = () => {
    return (
        <div className="columns-2 gap-6">
            <Basic />
            <Sizes />
            <Closable />
            <Confirms />
            <CloseIcon />
        </div>
    )
}

export default ModalPage;