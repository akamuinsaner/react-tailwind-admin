'use client';
import { treeData } from '@/app/utils/data';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Checkbox from '@/src/components/Checkbox';
import Flex from '@/src/components/Flex';
import TreeSelect from '@/src/components/TreeSelect';
import { useState } from 'react';

const Check = () => {
    const [cr, setCR] = useState<boolean>(false);
    const onChange = (value: any) => {
        console.log(value);
    };

    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Check</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <Checkbox
                        checked={cr}
                        onChange={e => setCR(e.target.checked)}
                    >
                        CheckWithRelation
                    </Checkbox>
                    <TreeSelect
                        search
                        checkWithRelation={cr}
                        checkable
                        multiple
                        options={treeData}
                        onChange={onChange}
                        placeholder='multiple select '
                        defaultValue={['leaf1', 'parent 1-1']}
                    />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Check;
