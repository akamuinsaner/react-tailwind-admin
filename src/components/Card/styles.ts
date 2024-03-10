import { RTStyles } from '../../types/styles';

export interface RTCardStyles extends RTStyles {
    base: string;
    header: string;
    body: string;
}

export const styles: RTCardStyles = {
    base: 'bg-main rounded shadow-sm flex flex-col w-full flex-nowrap break-inside-avoid',
    header: 'py-4 px-6 font-semibold text-base border-b',
    body: 'flex-1 overflow-auto py-4 px-6'
}