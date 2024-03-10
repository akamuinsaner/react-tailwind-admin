import { styles } from './styles';
import { RTListStyles } from './styles';
import { Reducer, ReducerState } from 'react';

type State = {
    styles: RTListStyles
}

type Action = ''

const initialState = {
    styles
}

const reducer: Reducer<State, Action> = (state, action) => {
    return state;
}

export {
    reducer,
    initialState
}