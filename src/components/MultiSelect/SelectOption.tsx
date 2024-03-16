'use client'
import { CSSProperties, FC, memo, ReactNode, useContext, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { styles } from './styles'
import { MultiSelectContext } from './context';

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
    const context = useContext(MultiSelectContext);

    const { value: curValue, setValue, size, onChange } = context;

    const computedClassNames = twMerge(styles.option.base, classNames({
        [styles.option.selected]: curValue.includes(value),
        [styles.option[size]]: true,
    }), className);

    const onSelect = () => {
        const values = curValue.includes(value)
        ? curValue.filter(v => v !== value)
        : [...curValue, value]
        setValue(values);
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