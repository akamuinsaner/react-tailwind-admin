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
        case EActions['set-side-open-keys']:
            return { ...state, sideOpenKeys: action.value };
        case EActions['set-breadcrumb']:
            return { ...state, breadcrumb: action.value };
        case EActions['set-fullscreen']:
            return { ...state, fullScreen: action.value };
        case EActions['set-historys']:
            return { ...state, historys: action.value };
        case EActions['set-side-bar-width']:
            return { ...state, sideBarWidth: action.value };
        case EActions['set-side-bar-locale']:
            return { ...state, sideBarLocale: action.value };
        case EActions['set-header-height']:
            return { ...state, headerHeight: action.value };
        case EActions['set-nav-height']:
            return { ...state, navHeight: action.value };
        case EActions['set-affix-pos']:
            return { ...state, affixPos: action.value };
        case EActions['set-footer-height']:
            return { ...state, footerHeight: action.value };
        default:
            return state;
    }
};
