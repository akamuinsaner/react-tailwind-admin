import { RTStyles } from '../../types/styles';

export interface RTCardStyles extends RTStyles {
    base: string;
    header: string;
    body: string;
}

export const styles: RTCardStyles = {
    base: 'bg-main text-mainText rounded shadow flex flex-col w-full flex-nowrap break-inside-avoid overflow-hidden',
    header: 'py-4 px-6 font-semibold text-base border-b border-mainBorder text-inherit',
    body: 'flex-1 overflow-auto py-4 px-6 text-inherit',
};
