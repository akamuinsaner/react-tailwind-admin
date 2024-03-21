import Accordion from '@/src/components/Accordion';
import AccordionPanel from '@/src/components/Accordion/AccordionPanel';
import AccordinHeader from '@/src/components/Accordion/AccordionHeader';
import AccordionBody from '@/src/components/Accordion/AccordionBody';
import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';
import {
    ArrowDownIcon,
    ChevronDownIcon,
    BarsArrowDownIcon,
} from '@heroicons/react/24/outline';

const Icon = () => {
    return (
        <Card>
            <CardHeader>Icon</CardHeader>
            <CardBody>
                <Accordion>
                    <AccordionPanel name='frontend'>
                        <AccordinHeader expandIcon={<ArrowDownIcon />}>
                            Front End Developer
                        </AccordinHeader>
                        <AccordionBody>
                            Front-end developers are computer programmers who
                            optimize web pages and mobile apps for maximum
                            efficiency by creating designs that meet user
                            requirements. Typical duties of a front-end
                            developer include determining what the structure and
                            design of a web page should be, creating a
                            functional yet aesthetically pleasing design, and
                            maximizing efficiency. Front-end developers must be
                            conscious of maintaining brand consistency across
                            all web pages. They work closely with back-end
                            developers, graphic designers, and user experience
                            (UX) designers to ensure the consistency of web
                            designs. As such, a front-end developer needs to
                            have strong communication and interpersonal skills.
                        </AccordionBody>
                    </AccordionPanel>
                    <AccordionPanel name='backend'>
                        <AccordinHeader expandIcon={<ChevronDownIcon />}>
                            Backend Developer
                        </AccordinHeader>
                        <AccordionBody>
                            Backend developers manage server-side infrastructure
                            that powers software applications. They manage
                            databases, implement application logic, and maintain
                            seamless data integration with the front end. Their
                            work is vital to facilitate smooth data exchanges
                            between users and servers while optimizing the
                            application for speed and performance. They create
                            responsive applications that handle front-end
                            requests efficiently and often collaborate with
                            front-end teams to integrate user interface elements
                            with server-side logic. They may also build and
                            maintain company web properties.
                        </AccordionBody>
                    </AccordionPanel>
                    <AccordionPanel name='fullstack'>
                        <AccordinHeader expandIcon={<BarsArrowDownIcon />}>
                            Full Stack Developer
                        </AccordinHeader>
                        <AccordionBody>
                            A full stack developer position is perfect for those
                            who love working on projects from start to finish.
                            Both front-end and back-end developmental design
                            skills are needed in this role because full stack
                            developers are responsible for working on both
                            client and server interfacing tasks. They will also
                            need skills such as graphic design, UI/UX
                            development, and management of databases.
                        </AccordionBody>
                    </AccordionPanel>
                </Accordion>
            </CardBody>
        </Card>
    );
};

export default Icon;
