'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Checkbox from "@/src/components/Checkbox";
import Switch from "@/src/components/Switch";
import React, { useState } from "react";
import Button from "@/src/components/Button";

const Disabled = () => {
    const [disabled, setDisabled] = useState<boolean>(true);
    const toggleDisabled = () => setDisabled(!disabled);
    return (
        <Card className="mb-6">
            <CardHeader>Disabled</CardHeader>
            <CardBody className="flex flex-row gap-3">
                <Switch disabled={disabled} defaultChecked={true} />
                <Button size="small" onClick={toggleDisabled}>{disabled ? 'enable' : 'disable'}</Button>
            </CardBody>
        </Card>
    )
}

export default Disabled;