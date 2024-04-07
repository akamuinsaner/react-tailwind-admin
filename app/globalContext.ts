import { DataSet } from '@/src/components/Cascader/utils';
import { createContext } from 'react';
import { Config } from './pageSec/Side/config';

export interface IGlobalContext {
    theme: string;
    search: boolean;
    setTheme: (theme: string) => void;
    setSearch: (search: boolean) => void;
    sideOpenKeys: string[];
    setSideOpenKeys: (sideOpenKeys: string[]) => void;
    sideWidth: number;
    setSideWidth: (sideWidth: number) => void;
    pathname: string;
    dataSet: DataSet<Config>;
    breadcrumb: Config[];
    fullScreen: boolean;
}

export const GlobalContext = createContext<IGlobalContext>(null);
