'use client';
import { simpleRequest } from '@/app/utils/request';
import Box from '@/src/components/Box';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import DataTable from '@/src/components/DataTable';
import DatePicker from '@/src/components/DatePicker';
import { useCallback, useEffect, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';

type DataType = {
    eeid: string;
    name: string;
    gender: string;
    age: number;
    job: string;
    department: string;
    unit: string;
    country: string;
    city: string;
};

export const Table = () => {
    const fullConfig = resolveConfig(tailwindConfig);
    const [scroll, setScroll] = useState<boolean>(false);
    const xl = parseInt(fullConfig.theme.screens.xl.replace('px'));

    const checkScroll = useCallback(() => {
        if (window.innerWidth < xl) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }, []);

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);
    return (
        <Card>
            <CardBody>
                <Box className='h-96'>
                    <DataTable<DataType>
                        border
                        paginationProps={false}
                        scrollProps={{
                            y: 'auto',
                            x: 1500,
                        }}
                        columns={[
                            {
                                key: 'eeid',
                                title: 'EEID',
                                fixed: 'left',
                                width: 100,
                            },
                            {
                                key: 'pi',
                                title: 'Personal Information',
                                align: 'center',
                                children: [
                                    {
                                        key: 'name',
                                        title: 'Name',
                                    },
                                    {
                                        key: 'gender',
                                        title: 'Gender',
                                        filters: [
                                            {
                                                name: 'Male',
                                                id: 'Male',
                                            },
                                            {
                                                name: 'Female',
                                                id: 'Female',
                                            },
                                        ],
                                    },
                                    {
                                        key: 'age',
                                        title: 'Age',
                                        sortable: true,
                                    },
                                ],
                            },
                            {
                                key: 'ji',
                                title: 'Job Information',
                                align: 'center',
                                children: [
                                    {
                                        key: 'job',
                                        title: 'Job Title',
                                    },
                                    {
                                        key: 'department',
                                        title: 'Department',
                                        filters: [
                                            {
                                                name: 'IT',
                                                id: 'IT',
                                            },
                                            {
                                                name: 'Finance',
                                                id: 'Finance',
                                            },
                                            {
                                                name: 'Sales',
                                                id: 'Sales',
                                            },
                                            {
                                                name: 'Accounting',
                                                id: 'Accounting',
                                            },
                                        ],
                                    },
                                    {
                                        key: 'unit',
                                        title: 'Business Unit',
                                    },
                                ],
                            },
                            {
                                key: 'ar',
                                title: 'Area Information',
                                align: 'center',
                                fixed: 'right',
                                width: 250,
                                children: [
                                    {
                                        key: 'country',
                                        title: 'Country',
                                        fixed: 'right',
                                        width: 150,
                                    },
                                    {
                                        key: 'city',
                                        title: 'City',
                                        fixed: 'right',
                                        width: 100,
                                    },
                                ],
                            },
                        ]}
                        dataSource={[
                            {
                                eeid: 'E02387',
                                name: 'Emily Davis',
                                age: 55,
                                gender: 'Female',
                                job: 'Sr. Manger',
                                department: 'IT',
                                unit: 'Research & Development',
                                country: 'United States',
                                city: 'Seattle',
                            },
                            {
                                eeid: 'E02387',
                                name: 'Theodore Dinh',
                                age: 59,
                                gender: 'Male',
                                job: 'Technical Architect',
                                department: 'IT',
                                unit: 'Research & Development',
                                country: 'United States',
                                city: 'Seattle',
                            },
                            {
                                eeid: 'E02387',
                                name: 'Luna Sanders',
                                age: 50,
                                gender: 'Female',
                                job: 'Director',
                                department: 'Finance',
                                unit: 'Research & Development',
                                country: 'United States',
                                city: 'Seattle',
                            },
                            {
                                eeid: 'E02387',
                                name: 'Penelope Jordan',
                                age: 26,
                                gender: 'Female',
                                job: 'Computer Systems Manager',
                                department: 'IT',
                                unit: 'Research & Development',
                                country: 'United States',
                                city: 'Seattle',
                            },
                            {
                                eeid: 'E02387',
                                name: 'Austin Vo',
                                age: 55,
                                gender: 'Male',
                                job: 'Sr. Analyst',
                                department: 'Finance',
                                unit: 'Research & Development',
                                country: 'United States',
                                city: 'Seattle',
                            },
                            {
                                eeid: 'E02387',
                                name: 'Joshua Gupta',
                                age: 57,
                                gender: 'Male',
                                job: 'Account Representative',
                                department: 'Sales',
                                unit: 'Research & Development',
                                country: 'United States',
                                city: 'Seattle',
                            },
                            {
                                eeid: 'E02387',
                                name: 'Ruby Barnes',
                                age: 27,
                                gender: 'Female',
                                job: 'Manager',
                                department: 'IT',
                                unit: 'Research & Development',
                                country: 'United States',
                                city: 'Seattle',
                            },
                            {
                                eeid: 'E02387',
                                name: 'Luke Martin',
                                age: 25,
                                gender: 'Male',
                                job: 'Analyst',
                                department: 'Finance',
                                unit: 'Research & Development',
                                country: 'United States',
                                city: 'Seattle',
                            },
                            {
                                eeid: 'E02387',
                                name: 'Easton Bailey',
                                age: 29,
                                gender: 'Male',
                                job: 'Manager',
                                department: 'Accounting',
                                unit: 'Research & Development',
                                country: 'United States',
                                city: 'Seattle',
                            },
                            {
                                eeid: 'E02387',
                                name: 'Madeline Walker',
                                age: 34,
                                gender: 'Female',
                                job: 'Sr. Analyst',
                                department: 'Finance',
                                unit: 'Research & Development',
                                country: 'United States',
                                city: 'Seattle',
                            },
                        ]}
                    />
                </Box>
            </CardBody>
        </Card>
    );
};

export default Table;
