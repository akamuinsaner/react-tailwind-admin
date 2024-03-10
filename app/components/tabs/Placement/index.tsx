import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import TabList from "@/src/components/Tabs/TabList";
import Tab from "@/src/components/Tabs/Tab";
import Tabs from '@/src/components/Tabs/index';
import TabPane from "@/src/components/Tabs/TabPane";

const Placement = () => {
    return (
        <Card>
            <CardHeader>Placement</CardHeader>
            <CardBody className="flex gap-6">
            <Tabs placement="top">
                    <TabList>
                        <Tab value="tab1">tab1</Tab>
                        <Tab value="tab2">tab2</Tab>
                        <Tab value="tab3">tab3</Tab>
                    </TabList>
                    <TabPane value="tab1">
                        content of tab1
                    </TabPane>
                    <TabPane value="tab2">
                        content of tab2
                    </TabPane>
                    <TabPane value="tab3">
                        content of tab3
                    </TabPane>
                </Tabs>
                <Tabs placement="left">
                    <TabList>
                        <Tab value="tab1">tab1</Tab>
                        <Tab value="tab2">tab2</Tab>
                        <Tab value="tab3">tab3</Tab>
                    </TabList>
                    <TabPane value="tab1">
                        content of tab1
                    </TabPane>
                    <TabPane value="tab2">
                        content of tab2
                    </TabPane>
                    <TabPane value="tab3">
                        content of tab3
                    </TabPane>
                </Tabs>
                <Tabs placement="bottom">
                    <TabList>
                        <Tab value="tab1">tab1</Tab>
                        <Tab value="tab2">tab2</Tab>
                        <Tab value="tab3">tab3</Tab>
                    </TabList>
                    <TabPane value="tab1">
                        content of tab1
                    </TabPane>
                    <TabPane value="tab2">
                        content of tab2
                    </TabPane>
                    <TabPane value="tab3">
                        content of tab3
                    </TabPane>
                </Tabs>
                <Tabs placement="right">
                    <TabList>
                        <Tab value="tab1">tab1</Tab>
                        <Tab value="tab2">tab2</Tab>
                        <Tab value="tab3">tab3</Tab>
                    </TabList>
                    <TabPane value="tab1">
                        content of tab1
                    </TabPane>
                    <TabPane value="tab2">
                        content of tab2
                    </TabPane>
                    <TabPane value="tab3">
                        content of tab3
                    </TabPane>
                </Tabs>
            </CardBody>
        </Card>
    )
}

export default Placement;