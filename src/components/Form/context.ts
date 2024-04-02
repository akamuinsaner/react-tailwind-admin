import { RTSize } from '@/src/types/size';
import { RTVariant } from '@/src/types/variant';
import { createContext } from 'react';
import { FormInstanceType } from './useForm';

export type RTFormContext = {
    instance: FormInstanceType;
    size: RTSize;
    disabled: boolean;
    labelCol: { span?: number; offset?: number };
    wrapperCol: { span?: number; offset?: number };
    variant: RTVariant;
};

export const FormContext = createContext<RTFormContext>(null);
