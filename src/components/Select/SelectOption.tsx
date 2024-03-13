'use client'
import { CSSProperties, FC, memo, ReactNode, useContext, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { styles } from './styles'
import { SelectContext } from './context';

export type RTOptionProps = {
    className?: string;
    style?: CSSProperties;
    children?: string;
    value: string;
} 

const Option: FC<RTOptionProps> = ({
    className,
    style,
    children,
    value
}) => {
    const context = useContext(SelectContext);

    const { value: curValue, setValue, size, onChange } = context;

    const computedClassNames = twMerge(styles.option.base, classNames({
        [styles.option.selected]: value === curValue,
        [styles.option[size]]: true,
    }), className);

    const onSelect = () => {
        setValue(value);
        if (onChange) onChange(value);
    }

    return (
        <li
            style={style}
            className={computedClassNames}
            onClick={onSelect}
        >{children}</li>
    )
}

export default memo(Option);