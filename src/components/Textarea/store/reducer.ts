import { EActions, RTTextareaAction } from './action';
import { RTTextareaState } from './state';

export const reducer = (state: RTTextareaState, action: RTTextareaAction<any>): RTTextareaState => {
    switch(action.type) {
        case EActions['set-value']:
            return { ...state, value: action.value };
        case EActions['set-focused']:
            return { ...state, focused: action.value };
        default:
            return state;
    }
}