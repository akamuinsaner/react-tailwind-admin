'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Table from '@/src/components/Table';
import TableBody from '@/src/components/Table/TableBody';
import TableCell from '@/src/components/Table/TableCell';
import TableHead from '@/src/components/Table/TableHead';
import TableRow from '@/src/components/Table/TableRow';
import TablePagination from '@/src/components/Table/TablePagination';
import { useEffect, useMemo, useState } from 'react';

const Pagination = () => {
    const data = Array(50)
        .fill(0)
        .map((item, i) => ({
            id: i + 1,
            name: 'Elcid ' + (i + 1),
            email: 'elcidwang@gmail.com',
        }));
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);

    const list = useMemo(() => {
        return data.filter(
            (item, i) => i >= (page - 1) * pageSize && i < page * pageSize,
        );
    }, [page, pageSize]);
    return (
        <Card className='mb-6'>
            <CardHeader>Pagination</CardHeader>
            <CardBody>
                <Table border>
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>name</TableCell>
                            <TableCell>email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map(item => (
                            <TableRow>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    total={data.length}
                    page={page}
                    pageSize={pageSize}
                    onChange={(page, pageSize) => {
                        setPage(page);
                        setPageSize(pageSize);
                    }}
                />
            </CardBody>
        </Card>
    );
};

export default Pagination;
