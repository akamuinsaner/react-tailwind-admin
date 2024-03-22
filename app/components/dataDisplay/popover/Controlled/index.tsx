'use client';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Popover from '@/src/components/Popover';
import { useState } from 'react';

const Controlled = () => {
    const [open, setOpen] = useState<boolean>(false);
    const onOpenChange = open => {
        console.log(open);
        setOpen(open);
    };
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Controlled</CardHeader>
            <CardBody>
                <Popover
                    open={open}
                    title={'title'}
                    content={
                        <span>
                            content...
                            <br />
                            content...
                            <br />
                            content...
                            <br />
                        </span>
                    }
                    trigger='click'
                    onOpenChange={onOpenChange}
                >
                    <Button>{open ? 'is opening' : 'is closing'}</Button>
                </Popover>
            </CardBody>
        </Card>
    );
};

export default Controlled;
