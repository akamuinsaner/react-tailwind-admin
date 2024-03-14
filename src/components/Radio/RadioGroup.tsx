'use client'
import { styles } from './styles';
import React, { FC, memo, useRef, ChangeEvent, useReducer, useEffect, SyntheticEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import { RTRadioProps } from './index';
import { RadioContext, RTRadioContext } from './context';
import { reducer, initialState, setValueAction } from './store';
import classNames from 'classnames';

export type RTRadioGroupProps = RTRadioProps & {
    defaultValue?: number | string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    vertical?: boolean;
}

const Radio: FC<RTRadioGroupProps> = ({
    children,
    className,
    style,
    value,
    status,
    disabled,
    onChange,
    defaultValue,
    vertical
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const computedClassNames = twMerge(styles.group.base, classNames({
        [styles.group.vertical]: vertical
    }), className);

    const onRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(e);
        if (value !== undefined) return;
        dispatch(setValueAction(e.target.value))
    }

    useEffect(() => {
        if (value !== undefined) {
            dispatch(setValueAction(value));
            return;
        }
        if (defaultValue !== undefined) {
            dispatch(setValueAction(defaultValue));
        }
    }, [value]);

    const contextValue: RTRadioContext = {
        status,
        disabled,
        value: state.value,
        onRadioChange
    }

    return (
        <RadioContext.Provider value={contextValue}>
            <div
                style={style}
                className={computedClassNames}
            >
                {children}
            </div>
        </RadioContext.Provider>
    )
}

export default memo(Radio);