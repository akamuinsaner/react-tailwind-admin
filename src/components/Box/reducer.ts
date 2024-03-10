import { styles } from './styles';
import { RTStyles } from '../../types/styles';
import { Reducer, ReducerState } from 'react';

type State = {
    styles: RTStyles
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