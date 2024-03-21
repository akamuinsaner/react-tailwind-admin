import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import TabList from "@/src/components/Tabs/TabList";
import Tab from "@/src/components/Tabs/Tab";
import Tabs from '@/src/components/Tabs/index';
import TabPane from "@/src/components/Tabs/TabPane";

const Basic = () => {
    return (
        <Card>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Tabs>
                    <TabList>
                        <Tab value="Front End Developer">Front End Developer</Tab>
                        <Tab value="Backend Developer">Backend Developer</Tab>
                        <Tab value="Full Stack Developer">Full Stack Developer</Tab>
                    </TabList>
                    <TabPane value="Front End Developer">
                        Front-end developers are computer programmers who optimize web pages and mobile apps for
                        maximum efficiency by creating designs that meet user requirements. Typical duties of a
                        front-end developer include determining what the structure and design of a web page
                        should be, creating a functional yet aesthetically pleasing design, and maximizing
                        efficiency. Front-end developers must be conscious of maintaining brand consistency
                        across all web pages. They work closely with back-end developers, graphic designers,
                        and user experience (UX) designers to ensure the consistency of web designs. As such,
                        a front-end developer needs to have strong communication and interpersonal skills.
                    </TabPane>
                    <TabPane value="Backend Developer">
                        Backend developers manage server-side infrastructure that powers software applications.
                        They manage databases, implement application logic, and maintain seamless data integration
                        with the front end. Their work is vital to facilitate smooth data exchanges between users
                        and servers while optimizing the application for speed and performance. They create responsive
                        applications that handle front-end requests efficiently and often collaborate with front-end teams
                        to integrate user interface elements with server-side logic. They may also build and maintain
                        company web properties.
                    </TabPane>
                    <TabPane value="Full Stack Developer">
                        A full stack developer position is perfect for those who love working on projects from start
                        to finish. Both front-end and back-end developmental design skills are needed in this role
                        because full stack developers are responsible for working on both client and server
                        interfacing tasks. They will also need skills such as graphic design, UI/UX development,
                        and management of databases.
                    </TabPane>
                </Tabs>
            </CardBody>
        </Card>
    )
}

export default Basic;