'use client'
import { memo, SyntheticEvent, useEffect, useState } from "react"
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import { computePlacementStyle } from "../Dropdown/utils";
import { styles } from "./styles";

const DatePickerBox = ({
    children,
    wrapper,
    anchor,
    removeWrapper,
}) => {
    const [tempWrapper, setTempWrapper] = useState<HTMLDivElement>(null);
    const [boxClassName, setBoxClassName] = useState<string>(styles.selectBox.base);

    const onTransitionEnd = (e: SyntheticEvent) => {
        if (e.currentTarget.classList.contains('scale-y-1')) {
            setBoxClassName(twMerge(boxClassName, 'overflow-auto'));
        } else {
            setTempWrapper(null);
        }
    }

    const resetClassName = () => {
        setBoxClassName(styles.selectBox.base);
        document.removeEventListener('click', removeWrapper);
        
    }

    useEffect(() => {
        if (tempWrapper) {
            setBoxClassName(twMerge(boxClassName, styles.selectBox.show));
            document.addEventListener('click', removeWrapper);
        }
    }, [tempWrapper]);

    useEffect(() => {
        if (wrapper) {
            setTempWrapper(wrapper);
        } else {
            resetClassName();
        }
    }, [wrapper]);

    if (!tempWrapper) return <></>

    return createPortal(
        <div
            style={{
                ...computePlacementStyle(anchor, 'bottom-start'),
            }}
            className={boxClassName}
            onTransitionEnd={onTransitionEnd}
        >
            {children}
        </div>,
        tempWrapper
    );
}

export default memo(DatePickerBox);

