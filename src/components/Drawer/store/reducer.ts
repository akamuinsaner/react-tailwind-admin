import { EActions, RTDrawerAction } from './action'
import { RTDrawerState } from './state'

export const reducer = (
  state: RTDrawerState,
  action: RTDrawerAction<any>,
): RTDrawerState => {
  switch (action.type) {
    case EActions['set-wrapper']:
      return { ...state, wrapper: action.value }
    default:
      return state
  }
}
