import { EActions, RTRadioAction } from './action';
import { RTRadioState } from './state';

export const reducer = (state: RTRadioState, action: RTRadioAction<any>): RTRadioState => {
    switch(action.type) {
        case EActions['set-value']:
            return { ...state,
                value: action.value,
            };

        default:
            return state;
    }
}