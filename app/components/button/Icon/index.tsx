import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import CardHeader from "@/src/components/Card/CardHeader";
import CardBody from "@/src/components/Card/CardBody";
import { HomeIcon, BellAlertIcon } from '@heroicons/react/24/solid';

const Icon = () => {
    return (
        <Card>
            <CardHeader>Basic</CardHeader>
            <CardBody className="flex gap-4">
                <Button prefix={<HomeIcon />} type="text">Prefix</Button>
                <Button suffix={<BellAlertIcon />} type="text">Suffix</Button>
                <Button prefix={<HomeIcon />} type="outlined">Prefix</Button>
                <Button suffix={<BellAlertIcon />} type="outlined">Suffix</Button>
                <Button prefix={<HomeIcon />} type="contained">Prefix</Button>
                <Button suffix={<BellAlertIcon />} type="contained">Suffix</Button>
            </CardBody>
        </Card>
    )
}

export default Icon;