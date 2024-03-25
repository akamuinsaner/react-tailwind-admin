import { createContext } from 'react';
import { RTStepperDirection } from '.';

export type RTStepperContext = {
    length: number;
    alternative: boolean;
    direction: RTStepperDirection;
    active: number;
};

export const StepperContext = createContext<RTStepperContext>(null);
