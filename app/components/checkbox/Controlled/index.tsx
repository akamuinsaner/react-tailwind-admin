'use client'
import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Checkbox from "@/src/components/Checkbox";
import { useState } from "react";

const Controlled = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [indeterminate, setIndeterminate] = useState<boolean>(false);
    const handleChange = (e) => setChecked(e.target.checked)
    return (
        <Card className="mb-6">
            <CardHeader>Controlled</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <Checkbox
                    onChange={handleChange}
                    checked={checked}
                    disabled={disabled}
                    indeterminate={indeterminate}
                >checkbox</Checkbox>
                <div className="flex flex-row gap-3">
                    <Button
                        size="small"
                        onClick={() => setChecked(!checked)}
                    >{checked ? 'unCheck' : 'check'}</Button>
                    <Button
                        size="small"
                        onClick={() => setDisabled(!disabled)}
                    >{disabled ? 'enable' : 'disable'}</Button>
                    <Button
                        size="small"
                        onClick={() => setIndeterminate(!indeterminate)}
                    >{indeterminate ? 'unIndetermine' : 'determine'}</Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default Controlled;