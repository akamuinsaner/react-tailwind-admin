import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import TabList from "@/src/components/Tabs/TabList";
import Tab from "@/src/components/Tabs/Tab";
import Tabs from '@/src/components/Tabs/index';
import { PhoneIcon, HomeIcon, Battery100Icon } from '@heroicons/react/24/solid';

const Icon = () => {
    return (
        <Card>
            <CardHeader>Icon</CardHeader>
            <CardBody>
                <Tabs>
                    <TabList>
                        <Tab value="tab1" icon={<PhoneIcon />}>Telphone</Tab>
                        <Tab value="tab2" icon={<HomeIcon />}>Home</Tab>
                        <Tab value="tab3" icon={<Battery100Icon />}>Battery</Tab>
                    </TabList>
                </Tabs>
            </CardBody>
        </Card>
    )
}

export default Icon;