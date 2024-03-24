import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Button from '@/src/components/Button';
import Dropdown from '@/src/components/Dropdown';
import DropdownAnchor from '@/src/components/Dropdown/DropdownAnchor';
import DropdownBox from '@/src/components/Dropdown/DropdownBox';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import DropdownItem from '@/src/components/Dropdown/DropdownItem';

const Trigger = () => {
    return (
        <Card className='mb-6'>
            <CardHeader>Trigger</CardHeader>
            <CardBody className='flex gap-4'>
                <Dropdown>
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
                <Dropdown trigger='click'>
                    <DropdownAnchor>
                        <Button variant='outlined' suffix={<ChevronDownIcon />}>
                            Click me
                        </Button>
                    </DropdownAnchor>
                    <DropdownBox>
                        <DropdownItem>HomePage</DropdownItem>
                        <DropdownItem>Education</DropdownItem>
                        <DropdownItem>Commerce</DropdownItem>
                        <DropdownItem>Finance</DropdownItem>
                    </DropdownBox>
                </Dropdown>
                <Dropdown trigger='contextMenu'>
                    <DropdownAnchor>
                        <Button
                            variant='contained'
                            suffix={<ChevronDownIcon />}
                        >
                            Click Right
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

export default Trigger;
