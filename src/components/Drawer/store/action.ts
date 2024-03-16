import { RTDrawerState } from './state'

export enum EActions {
  'set-wrapper',
}

export type RTDrawerAction<T> = {
  type: EActions
  value?: T
}

export const setWrapperAction = <T extends RTDrawerState['wrapper']>(
  wrapper: T,
): RTDrawerAction<T> => {
  return {
    type: EActions['set-wrapper'],
    value: wrapper,
  }
}
