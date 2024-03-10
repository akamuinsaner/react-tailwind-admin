import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import TabList from "@/src/components/Tabs/TabList";
import Tab from "@/src/components/Tabs/Tab";
import Tabs from '@/src/components/Tabs/index'

const Disabled = () => {
    return (
        <Card>
            <CardHeader>Disabled</CardHeader>
            <CardBody>
                <Tabs>
                    <TabList>
                        <Tab value="tab1">Active</Tab>
                        <Tab value="tab2" disabled>Disabled</Tab>
                        <Tab value="tab3">Active</Tab>
                    </TabList>
                </Tabs>
            </CardBody>
        </Card>
    )
}

export default Disabled;