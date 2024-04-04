import { useCallback, useEffect, useMemo } from 'react';
import { RTCascaderOption } from '.';
import { BaseTreeData, RESERVED_KEY } from './utils';

export type RTCascaderUseSearchProps<T extends BaseTreeData<T>> = {
    searchValue: string;
    onSearch: (value: string) => void;
    flattedData: T[];
    idChildrenMap: Map<T['id'], T[]>;
    setSearchValue: (e: any) => void;
    setOpenKeys: (keys: any[]) => void;
};

const useSearch = <T extends BaseTreeData<T>>({
    searchValue,
    onSearch,
    flattedData,
    idChildrenMap,
    setSearchValue,
    setOpenKeys,
}: RTCascaderUseSearchProps<T>) => {
    const searchChain = useMemo(() => {
        let filteredIds = [];
        for (let [key, list] of idChildrenMap.entries()) {
            const filteredByInput = !!list.find(l =>
                `${l.name}`.includes(searchValue),
            );
            if (filteredByInput) filteredIds.push(key);
        }
        return filteredIds;
    }, [idChildrenMap, searchValue]);

    const searchData = useMemo(() => {
        if (!!searchValue) {
            const filterCondition: (o: RTCascaderOption) => boolean = o =>
                searchChain.includes(o.id) ||
                `${o.name}`.indexOf(searchValue) > -1;
            return flattedData.filter(filterCondition);
        }
        return flattedData;
    }, [searchValue, idChildrenMap, flattedData, searchChain]);

    useEffect(() => {
        if (!searchValue) return;
        setOpenKeys([RESERVED_KEY, ...searchChain]);
    }, [searchValue]);

    const onInputChange = useCallback((e: any) => {
        setSearchValue(e.target.value);
        if (onSearch) onSearch(e.target.value);
    }, []);

    return {
        searchData,
        onInputChange,
        noData: !!searchValue && !searchData.length,
    };
};

export default useSearch;
