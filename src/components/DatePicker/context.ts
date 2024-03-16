import { RTPlacement } from "@/src/types/placement";
import { RTSize } from "@/src/types/size";
import { Dayjs } from "dayjs";
import { createContext } from "react";


export type RTDatePickerContext = {
    value: Dayjs;
    anchor: HTMLDivElement;
    wrapper: HTMLDivElement;
    setWrapper: (wrapper: HTMLDivElement) => void;
    removeWrapper: () => void;
    setValue: (value: Dayjs) => void;
    size?: RTSize;
    onChange: (value: Dayjs, valueStr: string) => void;
}

export const DatePickerContext = createContext<RTDatePickerContext>(null);

export type RTDateRangePickerContext = {
    value: [Dayjs, Dayjs];
    anchor: HTMLDivElement;
    wrapper: HTMLDivElement;
    setWrapper: (wrapper: HTMLDivElement) => void;
    removeWrapper: () => void;
    setValue: (value: [Dayjs, Dayjs]) => void;
    size?: RTSize;
    onChange: (value: [Dayjs, Dayjs], valueStr: [string, string]) => void;
}

export const DateRangePickerContext = createContext<RTDateRangePickerContext>(null);