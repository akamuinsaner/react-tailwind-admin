import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Table from "@/src/components/Table";
import TableBody from "@/src/components/Table/TableBody";
import TableCell from "@/src/components/Table/TableCell";
import TableHead from "@/src/components/Table/TableHead";
import TableRow from "@/src/components/Table/TableRow";

const Basic = () => {
    return (
        <Card>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>name</TableCell>
                            <TableCell>gender</TableCell>
                            <TableCell>tel</TableCell>
                            <TableCell>email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>John</TableCell>
                            <TableCell>male</TableCell>
                            <TableCell>21313412321</TableCell>
                            <TableCell>john@mail.com</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>John</TableCell>
                            <TableCell>male</TableCell>
                            <TableCell>21313412321</TableCell>
                            <TableCell>john@mail.com</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>3</TableCell>
                            <TableCell>John</TableCell>
                            <TableCell>male</TableCell>
                            <TableCell>21313412321</TableCell>
                            <TableCell>john@mail.com</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardBody>
        </Card>
    )
}

export default Basic;