import { EActions, RTCheckboxAction } from './action';
import { RTCheckboxState } from './state';

export const reducer = (state: RTCheckboxState, action: RTCheckboxAction<any>): RTCheckboxState => {
    switch(action.type) {
        case EActions['set-checked']:
            return { ...state,
                checked: action.value,
                indeterminate: action.value ? false : state.indeterminate
            };
        case EActions['set-indeterminate']:
            return { ...state,
                indeterminate: action.value,
                checked: action.value ? false : state.checked
            };
        default:
            return state;
    }
}