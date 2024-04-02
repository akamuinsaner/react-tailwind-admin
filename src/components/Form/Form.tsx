import { RTSize } from '@/src/types/size';
import React, { CSSProperties } from 'react';
import FormItem, { FormItemProps } from './Item';
import Submit, { SubmitItemComponent, SubmitItemProps } from './Submit';
import { useForm } from './useForm';
import { FormInstanceType } from './useForm';
import { RTFormContext, FormContext } from './context';
import Grid from '../Grid';
import { RTVariant } from '@/src/types/variant';

export type FormProps = {
    style?: CSSProperties;
    className?: string;
    size?: RTSize;
    disabled?: boolean;
    initialValues?: { [name: string]: any };
    children: JSX.Element | JSX.Element[];
    onValuesChange?: (prev: any, cur: any) => void;
    onSubmit?: (values: any) => void;
    onSubmitFail?: (errors: any) => void;
    form?: FormInstanceType;
    labelCol?: { span?: number; offset?: number };
    wrapperCol?: { span?: number; offset?: number };
    variant?: RTVariant;
};

export type FormComponent<T> = React.FunctionComponent<T> & {
    useForm: () => FormInstanceType;
    Item: React.FunctionComponent<FormItemProps>;
    Submit: SubmitItemComponent<SubmitItemProps>;
};

const Form: FormComponent<FormProps> = ({
    style,
    className,
    size = 'medium',
    disabled = false,
    form,
    children,
    initialValues = {},
    onValuesChange = () => {},
    onSubmit,
    onSubmitFail,
    labelCol,
    wrapperCol,
    variant,
}) => {
    const instance = useForm(form);

    React.useEffect(() => {
        instance.setFieldsValue(initialValues || {});
        instance.onValuesChange = onValuesChange;
    }, []);

    const submitForm = e => {
        e.preventDefault();
        instance.validates((errors, values) => {
            if (errors && onSubmitFail) onSubmitFail(errors);
            if (!errors && onSubmit) onSubmit(values);
        });
    };

    let preChildren = children;

    const contextValue: RTFormContext = {
        instance,
        size,
        disabled,
        labelCol,
        wrapperCol,
        variant,
    };

    return (
        <FormContext.Provider value={contextValue}>
            <form
                style={style}
                className={className}
                noValidate={true}
                onSubmit={submitForm}
            >
                <Grid wrapper rowGap='medium'>
                    {preChildren}
                </Grid>
            </form>
        </FormContext.Provider>
    );
};

Form.Item = FormItem;
Form.Submit = Submit;
Form.useForm = useForm;

export default Form;
