'use client';
import { CSSProperties, FC, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { styles } from './styles';
import { SelectContext } from './context';

export type RTOptionProps = {
    className?: string;
    style?: CSSProperties;
    children?: string;
    value: string;
};

const Option: FC<RTOptionProps> = ({ className, style, children, value }) => {
    const context = useContext(SelectContext);

    const { value: curValue, onOptionSelect, size } = context;

    const computedClassNames = twMerge(
        styles.option.base,
        classNames({
            [styles.option.selected]: curValue.includes(value),
            [styles.option[size]]: true,
        }),
        className,
    );

    const onSelect = () => onOptionSelect(value);

    return (
        <li style={style} className={computedClassNames} onClick={onSelect}>
            {children}
        </li>
    );
};

export default Option;
