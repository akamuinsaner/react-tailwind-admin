'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Switch from "@/src/components/Switch";
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Text = () => {
    const handleChange = (e) => {
        console.log(e.target.checked)
    }
    return (
        <Card className="mb-6">
            <CardHeader>Text</CardHeader>
            <CardBody className="flex gap-3">
                <Switch onChange={handleChange} checkedText="open" unCheckedText="close" />
                <Switch onChange={handleChange} checkedText="1" unCheckedText="0" defaultChecked />
                <Switch
                    onChange={handleChange}
                    checkedText={<CheckIcon className="h-5 w-5" />}
                    unCheckedText={<XMarkIcon className="h-5 w-5"/>}
                />
            </CardBody>
        </Card>
    )
}

export default Text;