import React, { ReactElement, useMemo } from 'react';
import { ruleCheck } from './helpers';
import { FormContext, RTFormContext } from './context';
import Grid from '../Grid';
import { RTSize } from '@/src/types/size';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import classNames from 'classnames';
import { RTVariant } from '@/src/types/variant';

const valueHelper = (e, checkable) => {
    if (checkable) return e.target.checked;
    if (e?.target && e?.target?.value !== null) return e.target.value;
    return e;
};

export type FormItemInstanceType = {
    element?: HTMLElement;
    onChange?(v: any): void;
    getValue?: () => any;
    setValue?: (v: any) => void;
    setError?: (error: string) => void;
    validate?: (cb: (error: string, value: any) => void) => void;
};

export type RuleConfig = {
    required?: boolean;
    len?: number;
    max?: number;
    min?: number;
    regex?: RegExp;
    msg?: string;
};

export type FormItemProps = {
    name: string;
    children: ReactElement;
    rules?: RuleConfig[];
    checkable?: boolean;
    multiple?: boolean;
    label?: string;
    size?: RTSize;
    disabled?: boolean;
    labelCol?: { span?: number; offset?: number };
    wrapperCol?: { span?: number; offset?: number };
    variant?: RTVariant;
};

export type FormItemComponent<T> = React.FunctionComponent<T>;

const FormItem: FormItemComponent<FormItemProps> = ({
    name,
    checkable = false,
    multiple,
    children,
    rules = [],
    label,
    size,
    disabled,
    labelCol,
    wrapperCol,
    variant,
}) => {
    const context = React.useContext<RTFormContext>(FormContext);

    const getSafeValue = (value?: any) => {
        if (value) return value;
        if (multiple) return [];
        if (checkable) return false;
        return '';
    };

    const _this = React.useRef<FormItemInstanceType>({});
    const [value, setValue] = React.useState<any>(getSafeValue());
    const [error, setError] = React.useState<string>(null);

    const _setError = React.useCallback(error => {
        setError(error);
    }, []);

    const _setValue = React.useCallback(v => {
        const value = getSafeValue(v);
        setValue(value);
    }, []);

    const _getValue = React.useCallback(() => {
        return value;
    }, [value]);

    const _validate = React.useCallback(
        cb => {
            const err = errorCheck(value);
            setError(err);
            cb(err, value);
        },
        [value],
    );

    _this.current = {
        ..._this.current,
        setError: _setError,
        setValue: _setValue,
        getValue: _getValue,
        validate: _validate,
    };

    React.useEffect(() => {
        context.instance.wire(name, _this);
        return () => {
            context.instance.unWire(name);
        };
    }, []);

    React.useEffect(() => {
        _setValue(context.instance.getFieldValue(name));
    }, []);

    const errorCheck = React.useCallback(
        value => {
            if (!rules || !rules.length) return '';
            return ruleCheck(name, value, rules);
        },
        [name],
    );

    const valueOnChange = React.useCallback((e: any) => {
        const value = valueHelper(e, checkable);
        setError(errorCheck(value));
        setValue(value);
        context.instance.setFieldValue(name, value);
    }, []);

    const required = !!rules.find(item => item.required);

    const finalSize = useMemo(() => {
        return size || context.size || 'medium';
    }, [size, context.size]);

    const finalDisabled = useMemo(() => {
        return disabled || context.disabled || false;
    }, [disabled, context.disabled]);

    const finalVariant = useMemo(() => {
        return variant || context.variant || 'outlined';
    }, [variant, context.variant]);

    const labelGrid = useMemo(() => {
        return Object.assign(
            {},
            { span: 12, offset: 0 },
            context.labelCol,
            labelCol,
        );
    }, [labelCol, context.labelCol]);

    const wrapperGrid = useMemo(() => {
        return Object.assign(
            {},
            { span: 12, offset: 0 },
            context.wrapperCol,
            wrapperCol,
        );
    }, [wrapperCol, context.wrapperCol]);

    const labelInline = useMemo(() => {
        if (
            labelGrid.span +
                labelGrid.offset +
                wrapperGrid.span +
                wrapperGrid.offset <=
            12
        ) {
            return true;
        }
        return false;
    }, [labelGrid, wrapperGrid]);

    const labelClassName = twMerge(
        styles.label.base,
        classNames({
            [styles.label[finalSize]]: labelInline,
            [styles.label.required]: required,
            [styles.label.inline]: labelInline,
        }),
    );

    const wrapperClassName = twMerge(styles.wrapper.base);

    const props = {
        required,
        value,
        onChange: valueOnChange,
        size: finalSize,
        disabled: finalDisabled,
        variant: finalVariant,
        status: !!error ? 'danger' : undefined,
    };

    let subComponent: JSX.Element = children;

    const preChildren = React.cloneElement(subComponent, {
        ...props,
    });

    return (
        <Grid wrapper>
            <Grid {...labelGrid} className={labelClassName}>
                {label}
            </Grid>
            <Grid {...wrapperGrid} className={wrapperClassName}>
                {preChildren}
                {error ? <div className={styles.errorText}>{error}</div> : null}
            </Grid>
        </Grid>
    );
};

export default FormItem;
