import React from 'react';
import Grid from '../Grid';
import { FormContext, RTFormContext } from './context';

export type SubmitItemProps = {
    children: JSX.Element;
};

export type SubmitItemComponent<T> = React.FunctionComponent<T>;

const Submit: SubmitItemComponent<SubmitItemProps> = ({ children }) => {
    const context = React.useContext<RTFormContext>(FormContext);
    const { size, disabled } = context;
    const preChildren = React.cloneElement(children, {
        size,
        disabled,
        type: 'submit',
        ...children.props,
        onClick: () => {
            if ('onClick' in children.props) {
                children.props.onClick();
            }
        },
    });

    return <Grid wrapper>{preChildren}</Grid>;
};

export default Submit;
