import { CSSProperties, forwardRef, useRef } from 'react';
import { v4 as uuidV4 } from 'uuid';

export type RTCascaderType = {
    style?: CSSProperties;
};

const Cascader = forwardRef<HTMLDivElement, RTCascaderType>(({}, ref) => {
    const wrapperIdRef = useRef(uuidV4());
    const anchorRef = useRef<HTMLDivElement>(null);
    return (
        <div
            style={style}
            className={computedClassNames}
            ref={anchorRef}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={setWrapper}
        ></div>
    );
});

export default Cascader;
