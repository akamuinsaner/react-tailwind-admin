import { EActions, RTAccordionAction } from './action';
import { RTAccordionState } from './state';

export const computeOpenKeys = (keys, key) => {
    return keys.includes(key)
        ? keys.filter(item => item !== key)
        : [...keys, key]
}

export const reducer = (state: RTAccordionState, action: RTAccordionAction<any>): RTAccordionState => {
    switch(action.type) {
        case EActions['set-keys']:
            return { ...state, openKeys: action.value };
        case EActions['toggle-keys']:
            return { ...state, openKeys: computeOpenKeys(state.openKeys, action.value) };
        default:
            return state;
    }
}