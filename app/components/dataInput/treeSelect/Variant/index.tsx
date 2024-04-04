'use client';
import { treeData } from '@/app/utils/data';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import TreeSelect from '@/src/components/TreeSelect';

const Variant = () => {
    const onChange = (value: any) => {
        console.log(value);
    };

    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Variant</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <TreeSelect
                        options={treeData}
                        onChange={onChange}
                        placeholder='outlined'
                        variant='outlined'
                    />
                    <TreeSelect
                        options={treeData}
                        onChange={onChange}
                        placeholder='contained'
                        variant='contained'
                    />
                    <TreeSelect
                        options={treeData}
                        onChange={onChange}
                        placeholder='underlined'
                        variant='underlined'
                    />
                    <TreeSelect
                        options={treeData}
                        onChange={onChange}
                        placeholder='borderless'
                        variant='borderless'
                    />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Variant;
