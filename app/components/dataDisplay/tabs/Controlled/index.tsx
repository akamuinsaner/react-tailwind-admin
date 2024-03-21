'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import TabList from "@/src/components/Tabs/TabList";
import Tab from "@/src/components/Tabs/Tab";
import Tabs from '@/src/components/Tabs/index';
import { useState } from 'react';

const Controlled = () => {
    const [active, setActive] = useState<string | number>('tab3');
    const onTabChange = (tab: string | number) => {
        console.log('onTabChange', tab);
        setActive(tab);
    }
    return (
        <Card>
            <CardHeader>Controlled</CardHeader>
            <CardBody>
                <Tabs active={active} onChange={onTabChange}>
                    <TabList>
                        <Tab value="tab1">tab1</Tab>
                        <Tab value="tab2">tab2</Tab>
                        <Tab value="tab3">tab3</Tab>
                    </TabList>
                </Tabs>
            </CardBody>
        </Card>
    )
}

export default Controlled;