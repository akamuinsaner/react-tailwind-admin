import { EActions, RTPaginationAction } from './action'
import { RTPaginationState } from './state'

export const reducer = (
    state: RTPaginationState,
    action: RTPaginationAction<any>,
): RTPaginationState => {
    switch (action.type) {
        case EActions['set-page']:
            return { ...state, page: action.value }
        case EActions['set-pageSize']:
            return { ...state, pageSize: action.value, page: 1 }
        default:
            return state
    }
}
