import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Input from "@/src/components/Input";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Addons = () => {
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Addons</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <Input
                    placeholder="medium input"
                    addOnAfter={<MagnifyingGlassIcon className="w-4 h-4" />}
                />
                <Input
                    placeholder="medium input"
                    addOnBefore={'https://'}
                    addOnAfter={'.com'}
                />
                <Input
                    placeholder="medium input"
                    addOnBefore={'https://'}
                    addOnAfter={'.site'}
                    value={'codingtheworld'}
                />
                <Input
                    placeholder="medium input"
                    addOnBefore={<Input
                        className="w-24"
                        prefix="(+"
                        placeholder="86"
                        suffix=")"
                    />}
                />
            </CardBody>
        </Card>
    )
}

export default Addons;