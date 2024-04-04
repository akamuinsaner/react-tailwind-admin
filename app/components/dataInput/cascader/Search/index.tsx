'use client';
import { treeData } from '@/app/utils/data';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Cascader from '@/src/components/Cascader';
import Flex from '@/src/components/Flex';

const Search = () => {
    const onChange = (value: any) => {
        console.log(value);
    };
    const onSearch = (search: string) => {
        console.log(search);
    };

    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Search</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <Cascader
                        options={treeData}
                        onChange={onChange}
                        placeholder='please input the word you want to search'
                        search
                        onSearch={onSearch}
                    />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Search;
