'use client';
import { simpleRequest } from '@/app/utils/request';
import Flex from '@/src/components/Flex';
import { useCallback, useEffect, useRef, useState } from 'react';

const DataTablePage = () => {
    const [list, setList] = useState<any[]>([]);
    const fetchList = useCallback(() => {
        simpleRequest(`http://localhost:3001/whisky-hunter/list`, {}).then(
            (res: any) => {},
        );
    }, []);
    useEffect(() => {
        fetchList();
    }, []);
    return (
        <Flex
            align='center'
            justify='center'
            className='h-full w-full overflow-hidden'
        ></Flex>
    );
};

export default DataTablePage;
