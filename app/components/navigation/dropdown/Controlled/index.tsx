'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Button from '@/src/components/Button';
import Dropdown from '@/src/components/Dropdown';
import DropdownAnchor from '@/src/components/Dropdown/DropdownAnchor';
import DropdownBox from '@/src/components/Dropdown/DropdownBox';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import DropdownItem from '@/src/components/Dropdown/DropdownItem';

const Controlled = () => {
    const [open, setOpen] = useState<boolean>(true);
    const onOpenChange = open => {
        console.log('onOpenChange', open);
        setOpen(open);
    };
    return (
        <Card className='mb-6'>
            <CardHeader>Controlled</CardHeader>
            <CardBody className='flex'>
                <Dropdown open={open} onOpenChange={onOpenChange}>
                    <DropdownAnchor>
                        <Button variant='text' suffix={<ChevronDownIcon />}>
                            Hover me
                        </Button>
                    </DropdownAnchor>
                    <DropdownBox>
                        <DropdownItem>HomePage</DropdownItem>
                        <DropdownItem>Education</DropdownItem>
                        <DropdownItem>Commerce</DropdownItem>
                        <DropdownItem>Finance</DropdownItem>
                    </DropdownBox>
                </Dropdown>
            </CardBody>
        </Card>
    );
};

export default Controlled;
