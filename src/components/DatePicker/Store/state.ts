import { Dayjs } from "dayjs";

export type RTDatePickerState = {
    hover: boolean;
    wrapper: HTMLDivElement;
    anchor: HTMLDivElement;
    value: Dayjs;
    searchValue: string;

    rangeValue: [Dayjs, Dayjs];
}

export const initialState: RTDatePickerState = {
    hover: false,
    wrapper: null,
    anchor: null,
    value: null,
    searchValue: '',

    rangeValue: [null, null],
}