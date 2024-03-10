import { RTCardStyles, styles } from './styles';
import { Reducer, ReducerState } from 'react';

type State = {
    styles: RTCardStyles
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