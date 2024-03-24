import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Button from '@/src/components/Button';
import Dropdown from '@/src/components/Dropdown';
import DropdownAnchor from '@/src/components/Dropdown/DropdownAnchor';
import DropdownBox from '@/src/components/Dropdown/DropdownBox';
import DropdownItem from '@/src/components/Dropdown/DropdownItem';

const Placement = () => {
    return (
        <Card className='mb-6'>
            <CardHeader>Placement</CardHeader>
            <CardBody className='flex flex-wrap gap-6'>
                {[
                    'top-start',
                    'top',
                    'top-end',
                    'bottom-start',
                    'bottom',
                    'bottom-end',
                    'right-start',
                    'right',
                    'right-end',
                    'left-start',
                    'left',
                    'left-end',
                ].map((placement: any) => (
                    <Dropdown key={placement} placement={placement}>
                        <DropdownAnchor>
                            <Button variant='contained'>{placement}</Button>
                        </DropdownAnchor>
                        <DropdownBox className='w-48'>
                            <DropdownItem>HomePage</DropdownItem>
                            <DropdownItem>Education</DropdownItem>
                            <DropdownItem>Commerce</DropdownItem>
                            <DropdownItem>Finance</DropdownItem>
                        </DropdownBox>
                    </Dropdown>
                ))}
            </CardBody>
        </Card>
    );
};

export default Placement;
