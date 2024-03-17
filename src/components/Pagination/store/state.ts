export type RTPaginationState = {
    page: number
    pageSize: number
}

export const initialState: RTPaginationState = {
    page: 1,
    pageSize: 1,
}
