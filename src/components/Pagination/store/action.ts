import { RTPaginationState } from './state'

export enum EActions {
    'set-page',
    'set-pageSize',
}

export type RTPaginationAction<T> = {
    type: EActions
    value: T
}

export const setPageAction = <T extends RTPaginationState['page']>(
    page: T,
): RTPaginationAction<T> => {
    return {
        type: EActions['set-page'],
        value: page,
    }
}

export const setPageSizeAction = <T extends RTPaginationState['pageSize']>(
    pageSize: T,
): RTPaginationAction<T> => {
    return {
        type: EActions['set-pageSize'],
        value: pageSize,
    }
}
