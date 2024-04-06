import { EActions, GlobalAction } from './action';
import { GlobalState } from './state';

export const reducer = (
    state: GlobalState,
    action: GlobalAction<any>,
): GlobalState => {
    switch (action.type) {
        case EActions['set-theme']:
            return { ...state, theme: action.value };
        case EActions['set-search']:
            return { ...state, search: action.value };
        case EActions['set-side-width']:
            return { ...state, sideWidth: action.value };
        case EActions['set-side-open-keys']:
            return { ...state, sideOpenKeys: action.value };
        case EActions['set-breadcrumb']:
            return { ...state, breadcrumb: action.value };
        default:
            return state;
    }
};
