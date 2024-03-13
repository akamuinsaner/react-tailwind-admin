'use client'
import { memo, useContext, SyntheticEvent, useEffect, useState } from "react"
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import { computePlacementStyle } from "../Dropdown/utils";
import { SelectContext } from './context';
import { styles } from "./styles";

const SelectBox = ({
    children
}) => {
    const context = useContext(SelectContext);
    const [tempWrapper, setTempWrapper] = useState<HTMLDivElement>(null);
    const { wrapper, anchor } = context;
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
        document.removeEventListener('click', resetClassName);
        
    }

    useEffect(() => {
        if (tempWrapper) {
            setBoxClassName(twMerge(boxClassName, styles.selectBox.show));
            document.addEventListener('click', resetClassName);
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
        <ul
            style={{
                ...computePlacementStyle(anchor, 'bottom'),
                minWidth: anchor?.offsetWidth,
            }}
            className={boxClassName}
            onTransitionEnd={onTransitionEnd}
        >
            {children}
        </ul>,
        tempWrapper
    );
}

export default memo(SelectBox);

