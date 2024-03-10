import { Reducer, ReducerState } from 'react';

type State = {
    openKeys: string[];
}

type Action = {
    type: string;
    value: any;
}

const initialState: State = {
    openKeys: []
}

const reducer: Reducer<State, Action> = (state, action) => {
    if (action.type === 'toggle-menu') {
        return {
            ...state,
            openKeys: state.openKeys.includes(action.value)
                ? state.openKeys.filter(name => name !== action.value)
                : [...state.openKeys, action.value]
        }
    }
    return state;
}

export {
    reducer,
    initialState
}