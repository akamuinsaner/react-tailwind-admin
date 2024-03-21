'use client';
import Accordion from '@/src/components/Accordion';
import AccordionPanel from '@/src/components/Accordion/AccordionPanel';
import AccordinHeader from '@/src/components/Accordion/AccordionHeader';
import AccordionBody from '@/src/components/Accordion/AccordionBody';
import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import { useState } from 'react';

const Controlled = () => {
    const [openKeys, setOpenKeys] = useState<Array<number | string>>([]);
    const onOpenKeyChange = (
        keys: Array<number | string>,
        key: number | string,
        expand: boolean,
    ) => {
        console.log(keys, key, expand);
        setOpenKeys(keys);
    };
    return (
        <Card>
            <CardHeader>Controlled</CardHeader>
            <CardBody>
                <Accordion openKeys={openKeys} onChange={onOpenKeyChange}>
                    <AccordionPanel name='Netherlands'>
                        <AccordinHeader>Netherlands</AccordinHeader>
                        <AccordionBody>
                            Netherlands literally means "lower countries" in
                            reference to its low elevation and flat topography,
                            with 26% situated below sea level. Most of the areas
                            below sea level, known as polders, are the result of
                            land reclamation that began in the 14th century. In
                            the Republican period, which began in 1588, the
                            Netherlands entered a unique era of political,
                            economic, and cultural greatness, ranked among the
                            most powerful and influential in Europe and the
                            world;
                        </AccordionBody>
                    </AccordionPanel>
                    <AccordionPanel name='Austria'>
                        <AccordinHeader>Austria</AccordinHeader>
                        <AccordionBody>
                            Austria emerged from the remnants of the Eastern and
                            Hungarian March at the end of the first millennium.
                            Originally a margraviate of Bavaria, it developed
                            into a duchy of the Holy Roman Empire in 1156 and
                            was later made an archduchy in 1453. In the 16th
                            century, Vienna began serving as the empire's
                            administrative capital and Austria thus became the
                            heartland of the Habsburg monarchy. Before the
                            dissolution of the Holy Roman Empire two years later
                        </AccordionBody>
                    </AccordionPanel>
                    <AccordionPanel name='Germany'>
                        <AccordinHeader>Germany</AccordinHeader>
                        <AccordionBody>
                            Germany, officially the Federal Republic of Germany,
                            is a country in the western region of Central
                            Europe. It is the second-most populous country in
                            Europe after Russia, and the most populous member
                            state of the European Union. Germany lies between
                            the Baltic and North Sea to the north and the Alps
                            to the south
                        </AccordionBody>
                    </AccordionPanel>
                </Accordion>
            </CardBody>
        </Card>
    );
};

export default Controlled;
