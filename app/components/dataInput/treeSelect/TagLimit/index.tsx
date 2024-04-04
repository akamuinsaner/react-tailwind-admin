'use client';
import { treeData } from '@/app/utils/data';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import TreeSelect from '@/src/components/TreeSelect';

const TagLimit = () => {
    const onChange = (value: any) => {
        console.log(value);
    };

    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>TagLimit</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <TreeSelect
                        multiple
                        options={treeData}
                        onChange={onChange}
                        placeholder='limited to 2 tags'
                        tagLimit={2}
                        defaultValue={[
                            'leaf1',
                            'parent 1-1',
                            'parent 1',
                            'leaf3',
                        ]}
                    />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default TagLimit;
